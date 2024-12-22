  import { useState } from 'react';
  import { Text, Image, SimpleGrid } from '@mantine/core';
  import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
  import Resizer from "react-image-file-resizer";
  import { v4 as uuidv4 } from 'uuid';
  import { useRecoilState } from 'recoil';
  import { UuidState } from '@/Atoms/UuidAtom';

  interface CustomDropzoneProps extends Partial<DropzoneProps> {
    setFile: React.Dispatch<React.SetStateAction<string | null>>;
  }
  
  const resizeFile = (file: File): Promise<File>  =>
    new Promise((res) => {
      Resizer.imageFileResizer(
        file, // target file
        600, // maxWidth
        600, // maxHeight
        "JPEG", // compressFormat : Can be either JPEG, PNG or WEBP.
        100, // quality : 0 and 100. Used for the JPEG compression
        0, // rotation
        (uri) => res(uri as File), // responseUriFunc
        "file" // outputType : Can be either base64, blob or file.(Default type is base64)	
      );
    // console.log("resizeFile");
    }
  );

  export function Dropzon({ setFile, ...props }: CustomDropzoneProps) {
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const [uuidstate, setUuidState] = useRecoilState(UuidState);
    const handleDrop = async (files: FileWithPath[]) => {
      setFiles(files); // 드롭된 파일을 상태에 저장

    const file = files[0]; // 첫 번째 파일을 처리한다고 가정
    const resizedFile = await resizeFile(file); // 리사이징된 파일

    // 파일을 Supabase Storage에 업로드
    // const filePath = `images/${uuidv4()}/${file.name}`; // 이미지 경로 설정 (예: images/{파일명})

    // const { data, error } = await supabaseClient.storage
    //   .from('images') // 버킷 이름
    //   .upload(filePath, resizedFile); // 파일 업로드
    const fileWithName = new File([resizedFile], resizedFile.name, { type: resizedFile.type });

    const formData = new FormData();
    formData.append('file', fileWithName);
    const uuid = uuidv4();
    setUuidState(uuid);
    formData.append('uuid', uuid);     // uuid 문자열 추가

      const response = await fetch('/api/supabase/uploadtitleimage', {
        method: 'POST',
        body: formData,
      });
    
      if (response.ok) {
        console.log('파일 업로드 성공');
      } else {
        console.error(response.statusText);
      }

    const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/images/${uuid}/${resizedFile.name}`; // 업로드된 이미지 URL
    setFile(imageUrl); // 업로드된 이미지 URL을 상위 컴포넌트로 전달
    };

    const previews = files.map((file, index) => {
      const imageUrl = URL.createObjectURL(file);
      return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    });
  
    return (
      <div>
        <Dropzone accept={IMAGE_MIME_TYPE}  onDrop={(files) => handleDrop(files)}>
          <Text ta="center">Drop images here</Text>
        </Dropzone>
  
        <SimpleGrid cols={{ base: 1, sm: 1}} mt={previews.length > 0 ? 'xl' : 0}>
          {previews}
        </SimpleGrid>
      </div>
    );
  }