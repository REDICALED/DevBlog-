import { Group, rem } from '@mantine/core';
  import { useState } from 'react';
  import { Text, Image, SimpleGrid } from '@mantine/core';
  import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
  import Resizer from "react-image-file-resizer";

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
    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    };

    const handleDrop = async (file: FileWithPath) => {
      const base64 = await fileToBase64(await resizeFile(file));
      setFile(base64);  // Base64 문자열을 상위 컴포넌트에 전달
    };

    const previews = files.map((file, index) => {
      const imageUrl = URL.createObjectURL(file);
      return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    });
  
    return (
      <div>
        <Dropzone accept={IMAGE_MIME_TYPE} onDrop={(files) => {
        setFiles(files);
        handleDrop(files[0]);
      }}>
          <Text ta="center">Drop images here</Text>
        </Dropzone>
  
        <SimpleGrid cols={{ base: 1, sm: 1}} mt={previews.length > 0 ? 'xl' : 0}>
          {previews}
        </SimpleGrid>
      </div>
    );
  }