'use client'

import { EditorProvider } from '@tiptap/react'
import extensions from './Extensions'
import MenuBar from './Menubar'
import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CalComponent from '@/components/Tiptap/Calendar';
import { TagsInput } from '@mantine/core';
import {Dropzon} from '@/components/mantine/Dropzone';
import styles from '../../app/post/[id]/styles.module.scss';
import '@mantine/core/styles.css';
import { createClient } from '@supabase/supabase-js' // supabase client -> add post용 csr 동적 클라이언트
import { CheckModalState } from "@/Atoms/ModalsAtom";
import { useRecoilState } from 'recoil'
import { Search_input } from '../mantine/Search_input'

// console.log(primaryKey);
export default function Tiptap( ) {
  const [editor, setEditor] = useState<any>(null);
  const [Preview, setPreview] = useState("");
  const [Tags, setTags] = useState<string[]>([]);
  const titletextRef = useRef<HTMLInputElement>(null);
  const [titleimagestate, setTitleImageState] = useState<string | null>(null);
  const [checkModalState, setCheckModalState] = useRecoilState(CheckModalState);
  const [CalDate, setCalDate] = useState<Date|null>(null);
  const [Posts, setPosts] = useState<boolean>(false);
  const [category, setCategory] = useState('cs');
  const [uuidstate, setUuidstate] = useState<string>(uuidv4());
  const [SupaArray, setSupaArray] = useState<any>(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(true);
    };
    fetchPosts();
  }, []);
  // onCreate 콜백을 통해 editor 객체를 설정
  const handleEditorCreate = ({ editor }: { editor: any }) => {
    setEditor(editor);
  }
  async function addPost() {
      const formattedDate = CalDate?.toISOString().slice(0, 19).replace('T', ' ');
      //date생성
      const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,);
      const { data, error } = await supabaseClient
        .from('posts') // 테이블 이름
        .insert([
          { uuid: uuidstate, titleimage: titleimagestate, title: titletextRef.current?.value, content: Preview, date: formattedDate, tags: Tags, category: category },
        ]);
  
        setUuidstate(uuidv4());
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted:', data);
    }
  }

  // const handlePaste = async (e:any) => {
  //   const clipboardItems = e.clipboardData.items;
  
  //   for (const item of clipboardItems) {
  //     if (item.type.includes("image")) {
  //       const file = item.getAsFile();
  //       if (file) {
  //         const resizedFile = await resizeFile(file);
  //         const imageUrl = await fetch('/api/upload-image', {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({ path:uuidstate, file:file }),
  //         });
  //         editor.commands.setImage({ src: imageUrl });
  //       }
  //     }
  //   }
  // };
  

  async function loadpost(props:any) {
    editor.commands.setContent(props.content);
    setPreview(props.content);
    setTitleImageState(props.titleimage);
    if (titletextRef.current) {
      titletextRef.current.value = props.title;  // 글 불러오면 input 필드에 값 설정
    }
    setTags(props.tags);
    setCategory(props.category);
}

  if (Posts === false) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="grid my-4 mx-2 ">
        <div>
        
        <div className=' m-2 flex  '>
          <CalComponent CalDate={CalDate} setCalDate={setCalDate} />
          <div className=' overflow-y-scroll max-h-[25vh] h-1/2 w-1/2'>
            <Search_input setSupaArray={setSupaArray}/>
            { SupaArray && SupaArray.map((value: any, index: number) => (
              <div className='border-2 border-black m-2 p-2 ' key={index}>
                <div className='flex'>
                  <h3 className=' mr-5 font-bold text-lg'>{"title:  " + value.title}</h3>
                <img className=' w-10 h-10' alt={value.title} src={value.titleimage} />
                </div>
                
                <div className="flex items-center">
                    <p>{value.date.split('T')[0]}</p>
                    <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors ' onClick={() => loadpost(value)}>
                      Load
                    </button>
                    <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors ' 
                    onClick={() => setCheckModalState(true)}>
                      modal test
                    </button>
                    </div>


              </div>
            ))}

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
              className='my-2 rounded-xl'
            />
            카테고리
            <select id="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
              <option value="cs" selected>CS</option>
              <option value="dailylife">DailyLife</option>
              <option value="art">Art</option>
              <option value="etc">etc</option>
            </select>
  
            </div>
        </div>


        <div className=' ml-10 m-2 border-black border-2 p-10'>
        <Dropzon uuidstate={uuidstate} setFile={setTitleImageState}/>
        </div>

        <div>
        <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors' 
  onClick={() => {
    if (editor) {
      setPreview(editor.view.dom.innerHTML);
      console.log(editor.view.dom.innerHTML);
    }
  }}>
  Preview
</button>
        <div>
          <input type="text" className='border-2 border-black m-1' />
          <button className=' bg-white border-2 border-black m-2 hover:bg-slate-500 transition-colors ' onClick={addPost}>
            Add Post
          </button>
        </div>
          
        </div>


        </div>

        

        <div className='flex w-[100vw]'>
        
        <div className='h-[70vh] '>
          <EditorProvider 
            slotBefore={<MenuBar uuidstate={uuidstate} />} 
            extensions={extensions} 
            content={''}
            onCreate={handleEditorCreate} // editor 객체를 받을 수 있는 콜백
            immediatelyRender={false}
            // onPaste={(e) => handlePaste(e)}
          />
        </div>
        <div className=' border-2 border-black bg-white overflow-scroll w-[55vw]'>
          {Preview &&  <div className={`${styles.wrapper} overflow-y-scroll h-[100vh] `} dangerouslySetInnerHTML={{ __html: Preview }} />}
        </div>
        </div>

        </div>
      </div>
    </>
  )
}