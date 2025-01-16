import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import {resizeFile} from '@/utils/ResizeFile';

interface CustomDropzoneProps extends Partial<DropzoneProps> {
  setFile: React.Dispatch<React.SetStateAction<string | null>>;
  uuidstate: string;
}

export function Dropzon({ setFile, uuidstate }: CustomDropzoneProps) {
  const [files, setFiles] = useState<FileWithPath[]>([]);


  const handleDrop = async (file: FileWithPath) => {
    const resizedfile = await resizeFile(file);
    const formData = new FormData();
    const pathstring:string = `${uuidstate}/titleimage`;
    formData.append('path', pathstring);
    formData.append('file', resizedfile);
    if (file) {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.data) {
        setFile(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${result.data.path}`);
      } else {
        console.error(result.error);
      }
    }
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