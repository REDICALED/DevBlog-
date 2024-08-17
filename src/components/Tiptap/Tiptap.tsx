'use client'

import { useEditor, EditorContent, EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import extensions from './Extensions'
import MenuBar from './Menubar'
import { useState, useEffect } from 'react'
import { createClient } from'@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const primaryKey = uuidv4();
console.log(primaryKey);
export default function Tiptap() {
  const [editor, setEditor] = useState<any>(null);
  const [Preview, setPreview] = useState("");

  // onCreate 콜백을 통해 editor 객체를 설정
  const handleEditorCreate = ({ editor }: { editor: any }) => {
    setEditor(editor);
  }
  async function addPost() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
      //date생성

      const primaryKey = uuidv4();
      console.log(primaryKey);
      //uuid 생성

      const { data, error } = await supabase
      .from('posts') // 테이블 이름
      .insert([
        { uuid: primaryKey, title: 'testPost1', content: 'This is the content of the post', date: formattedDate }
      ]);
  
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted:', data);
    }
  }

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <EditorProvider 
            slotBefore={<MenuBar />} 
            extensions={extensions} 
            content={''}
            onCreate={handleEditorCreate} // editor 객체를 받을 수 있는 콜백
          />
          <button className=' bg-white border-2 border-black' onClick={() => {
            if (editor) setPreview(editor.getHTML());
          }}>
            Preview
          </button>
          <button className=' bg-white border-2 border-black' onClick={addPost}>
            Add Post
          </button>
        </div>

        <div className=' border-2 border-black bg-white'>
          {Preview && <div dangerouslySetInnerHTML={{ __html: Preview }} />}
        </div>
      </div>
    </>
  )
}