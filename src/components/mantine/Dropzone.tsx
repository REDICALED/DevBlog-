import { Group, rem } from '@mantine/core';
  import { useState } from 'react';
  import { Text, Image, SimpleGrid } from '@mantine/core';
  import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
  
  interface CustomDropzoneProps extends Partial<DropzoneProps> {
    setFile: React.Dispatch<React.SetStateAction<string | null>>;
  }
  
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
      const base64 = await fileToBase64(file);
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