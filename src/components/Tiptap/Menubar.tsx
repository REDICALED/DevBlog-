import './styles.scss'

import { useCurrentEditor } from '@tiptap/react'
import Strikethrough from '@/assets/icons/Strikethrough.png'
import H1 from '@/assets/icons/H1.png'
import H2 from '@/assets/icons/H2.png'
import H3 from '@/assets/icons/H3.png'
import Bold from '@/assets/icons/Bold.png'
import Italic from '@/assets/icons/Italic.png'
import Quote from '@/assets/icons/Quote.png'
import AddPhoto from '@/assets/icons/AddPhoto.png'
import AddSlider from '@/assets/icons/AddSlider.png'
import AddCode from '@/assets/icons/code.png'
import AddVideo from '@/assets/icons/AddVideo.png'
import Clear from '@/assets/icons/Clear.png'
import AlignCenter from '@/assets/icons/AlignCenter.png'
import AlignJustify from '@/assets/icons/AlignJustify.png'
import AlignLeft from '@/assets/icons/AlignLeft.png'
import AlignRight from '@/assets/icons/AlignRight.png'
import Paragraphimage from '@/assets/icons/Paragraph.png'
import Undo from '@/assets/icons/Undo.png'
import Redo from '@/assets/icons/Redo.png'
import Horizontal from '@/assets/icons/Horizontal.png'
import Resizer from "react-image-file-resizer";
import Image from 'next/image'

import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { PostImageModal } from '../modal/PostImageModal'

const MenuBar = (props: any) => {

    const { editor } = useCurrentEditor()

    if (!editor) {
      return null
    }
  
      const handleUploadPhoto = async () => {
        // if (!files) {
        //   return;
        // }
      
        // const file = await resizeFile(files[0]);
        // if (file) {
        //   const reader = new FileReader();
      
        //   reader.onload = () => {
        //     const imageData = reader.result as string; // Base64로 변환된 데이터
        //     editor.commands.setImage({ src: imageData }); // Base64 이미지 삽입
        //   };
      
        //   reader.readAsDataURL(file); // 파일을 Base64로 변환
        // }
      };
  
  const handleButtonClick = () => {
    const url = prompt('Please enter URL:');
    if (url) {
      // console.log("url:", url)
      editor.commands.insertContent(`------\n[비디오입니다!]\nVideourl=<<<${url}>>>\n[!비디오입니다]\n------`);
  
    }
  };
  
    return (
      <div className="">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={Bold} className="w-5 h-5"/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={Italic} className="w-5 h-5"/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={Strikethrough} className="w-5 h-5"/>
        </button>
        
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className="border border-black p-[10px] hover:bg-gray-200 ">
          <Image alt="" src={Clear} className="w-5 h-5"/>
        </button>
  
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={Paragraphimage} className="w-5 h-5"/>
        </button>
        
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={H1} className="w-5 h-5"/>
        </button>
        
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={H2} className="w-5 h-5"/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={H3} className="w-5 h-5"/>
        </button>
        
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={AlignLeft} className="w-5 h-5"/>
        </button>
  
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={AlignCenter} className="w-5 h-5"/>
        </button>
  
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={AlignRight} className="w-5 h-5"/>
        </button>
  
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={AlignJustify} className="w-5 h-5"/>
        </button>
  
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : 'is-none'}
        >
          <Image alt="" src={Quote} className="w-5 h-5"/>
        </button>
  
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="border border-black p-[10px] hover:bg-gray-200 ">
        <Image alt="" src={Horizontal} className="w-5 h-5"/>
        </button>
        
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
          className="border border-black p-[10px] hover:bg-gray-200 ">
          <Image alt="" src={Undo} className="w-5 h-5"/>
        </button>
  
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
          className="border border-black p-[10px] hover:bg-gray-200 ">
          <Image alt="" src={Redo} className="w-5 h-5"/>
        </button>
  
        <button
        type="button"
        className="relative cursor-pointer border border-black p-[10px] hover:bg-gray-200 "
      >
        {/* <input
          type="file"
          className="absolute top-0 left-0 w-8 h-8 outline-none opacity-0 file:cursor-pointer"
          accept="image/*"
          onChange={(e) => {
            handleUploadPhoto(e.target.files);
          }}
        /> */}
        <PostImageModal uuidstate={props.uuidstate} calDate={props.calDate} editor={editor}/>
  
      </button>
  
      <button
        type="button"
        className="relative cursor-pointer border border-black p-[10px] hover:bg-gray-200 "
        onClick={handleButtonClick}
      >
        <Image alt="" src={AddVideo} className="w-5 h-5"/>
  
      </button>

      <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className="relative cursor-pointer border border-black p-[10px] hover:bg-gray-200 "
            >
        <Image alt="" src={AddCode} className="w-5 h-5"/>
        </button>
      </div>
    )
  }


  export default MenuBar;