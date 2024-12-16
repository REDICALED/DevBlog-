'use client'

import { EditorProvider } from '@tiptap/react'
import extensions from './Extensions'
import MenuBar from './Menubar'
import { useState, useEffect, useRef } from 'react'
import { createClient } from'@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import CalComponent from '@/components/Tiptap/Calendar';
import { TagsInput } from '@mantine/core';
import {Dropzon} from '@/components/mantine/Dropzone';
import styles from '../../app/post/[id]/styles.module.css';
import '@mantine/core/styles.css';

const primaryKey = uuidv4();
// console.log(primaryKey);
export default function Tiptap() {
  const [editor, setEditor] = useState<any>(null);
  const [Preview, setPreview] = useState("");
  const [Tags, setTags] = useState<string[]>([]);
  const maintextRef = useRef<HTMLInputElement>(null);
  const titletextRef = useRef<HTMLInputElement>(null);
  const [acceptedFile, setAcceptedFile] = useState<string | null>(null);

  const [CalDate, setCalDate] = useState<Date|null>(null);

  // onCreate 콜백을 통해 editor 객체를 설정
  const handleEditorCreate = ({ editor }: { editor: any }) => {
    setEditor(editor);
  }
  async function addPost() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      
      const formattedDate = CalDate?.toISOString().slice(0, 19).replace('T', ' ');
      //date생성

      const primaryKey = uuidv4();
      //uuid 생성

      const { data, error } = await supabase
        .from('posts') // 테이블 이름
        .insert([
          { uuid: primaryKey, titleimage: acceptedFile, title: titletextRef.current?.value, content: Preview, date: formattedDate, user_id: maintextRef.current?.value ?? 'testUser', tags: Tags },
        ]);
  
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted:', data);
    }
  }

  return (
    <>
      <div className="grid my-4 mx-2 ">
        <div>
        
        <div className=' m-2 flex '>
          <CalComponent CalDate={CalDate} setCalDate={setCalDate} />
          <div className=''>
            post list
          </div>
        </div>

        <div className='flex'>

        <div className=' m-2 '>
            <input type="text" placeholder='제목' ref={titletextRef} className='border-2 border-black' />
            <div className=''>
            <TagsInput
              label="태그 입력"
              placeholder="Enter tag"
              value={Tags}
              onChange={setTags}
            />
        </div>
        </div>

        <div className=' ml-10 m-2 border-black border-2 p-10'>
        <Dropzon setFile={setAcceptedFile}/>
        </div>

        <div>
        <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors' onClick={() => {
            if (editor) setPreview(editor.getHTML());
          }}>
            Preview
        </button>
        <div>
          <input type="text" ref={maintextRef} className='border-2 border-black m-1' />
          <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors ' onClick={addPost}>
            Add Post
          </button>
        </div>
          
        </div>


        </div>

        

        <div className='flex w-[100vw]'>
        
        <div className='h-[70vh] '>
          <EditorProvider 
            slotBefore={<MenuBar />} 
            extensions={extensions} 
            content={''}
            onCreate={handleEditorCreate} // editor 객체를 받을 수 있는 콜백
            immediatelyRender={false}
          />
        </div>
        <div className=' border-2 border-black bg-white overflow-scroll w-[50vw]'>
          {Preview &&  <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: Preview }} />}
        </div>
        </div>

        </div>
      </div>
    </>
  )
}