import Resizer from "react-image-file-resizer";


export const resizeFile = (file: File): Promise<File>  =>
    new Promise((res) => {
      Resizer.imageFileResizer(
        file, // target file
        1200, // maxWidth
        1200, // maxHeight
        "JPEG", // compressFormat : Can be either JPEG, PNG or WEBP.
        70, // quality : 0 and 100. Used for the JPEG compression
        0, // rotation
        (uri) => res(uri as File), // responseUriFunc
        "file" // outputType : Can be either base64, blob or file.(Default type is base64)	
      );
    // console.log("resizeFile");
    }
  );