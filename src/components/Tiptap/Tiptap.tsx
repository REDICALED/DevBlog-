'use client'

import { EditorProvider } from '@tiptap/react'
import extensions from './Extensions'
import MenuBar from './Menubar'
import { useState, useEffect, useRef } from 'react'
import { createClient } from'@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import CalComponent from '@/components/Tiptap/Calendar';

const primaryKey = uuidv4();
console.log(primaryKey);
export default function Tiptap() {
  const [editor, setEditor] = useState<any>(null);
  const [Preview, setPreview] = useState("");
  const [Tags, setTags] = useState<string[]>([]);
  const maintextRef = useRef<HTMLInputElement>(null);
  const titletextRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

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
          { uuid: primaryKey, title: titletextRef.current?.value, content: Preview, date: formattedDate, user_id: maintextRef.current?.value ?? 'testUser', tags: Tags },
        ]);
  
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted:', data);
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 my-4">
        <div>
        
        <div className=' m-2 '>
          <CalComponent CalDate={CalDate} setCalDate={setCalDate} />
        </div>

        <div className=' m-2 '>
            <input type="text" placeholder='제목' ref={titletextRef} className='border-2 border-black' />
        </div>

        <div className=' m-2  '>
            <input type="text" placeholder='Tags' ref={tagsRef} className='border-2 border-black ' />
            <button className=' transition-colors ml-2 inline-block rounded border border-black bg-black px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black' onClick={() => {
              if (tagsRef.current?.value) {
                setTags([...Tags, tagsRef.current.value]);
                tagsRef.current.value = '';
            } }}>
              태그추가
            </button>
            <div>
              {Tags.map((tag, index) => (
                <div onClick={()=>{
                    setTags(Tags.filter((_, i) => i !== index));}}
                    key={index} 
                    className=' transition-colors cursor-pointer inline-block rounded border border-white bg-white px-6 py-2 text-sm font-medium text-black hover:bg-gray-300 hover:text-black focus:outline-none focus:ring active:text-white'>
                  {tag}
                </div>
              ))}
            </div>
        </div>

          <EditorProvider 
            slotBefore={<MenuBar />} 
            extensions={extensions} 
            content={''}
            onCreate={handleEditorCreate} // editor 객체를 받을 수 있는 콜백
            immediatelyRender={false}
          />
          <input type="text" ref={maintextRef} className='border-2 border-black m-1' />

          <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors' onClick={() => {
            if (editor) setPreview(editor.getHTML());
          }}>
            Preview
          </button>

          <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors ' onClick={addPost}>
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