'use client'

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from 'next/link';
import {Search_input} from '@/components/mantine/Search_input';
import {ToggleList} from '@/components/main/ToggleList';
import { useEffect, useMemo, useState } from "react";
import { format } from "path";
import TagInput from "./MainTagInput";
import Arrow_down from "@/assets/arrow_down.svg";
import { OpeningState } from '@/Atoms/OpeningAtom';
import { useRecoilState } from "recoil";
import { SuggestPostState} from '@/Atoms/SuggestPostAtom';

export default function Notes(props: any) {
    const maxContentLength = window.innerWidth > 768 ? 70 : 40;
    const maxTitleLength = window.innerWidth > 768 ? 40 : 30;
    const [Loaded, setLoaded] = useState<boolean>(false);
    const [CategoryState, setCategoryState] = useState<string>("All");
    const [TagState, setTagState] = useState<string>("All");
    const [TagOpen, setTagOpen] = useState<boolean>(false);
    const [openingstate, setOpeningState] = useRecoilState(OpeningState);
    const [SuggestPost, setSuggestPost] = useRecoilState(SuggestPostState);

    useEffect(() => {
    setSuggestPost(props.SuggestArray);
    setLoaded(true);
    },[])

    useEffect(() => {
        setTagState("All");
    },[CategoryState])
    const filteredArray = useMemo(() => 
        props.supaArray.filter((value: any) => 
            ( CategoryState === "All" && TagState === "All") || 
            ( CategoryState === "All" && value.tags.includes(TagState)) || 
            ( value.category == CategoryState && TagState === "All") || 
            ( value.category == CategoryState && value.tags.includes(TagState))
        ),
        [TagState, CategoryState]
        );
    
    if (!Loaded) {
        return <div>loading...</div>;
    }
    return (
        <div className="px-5 lg:px-10">

            <div className="grid place-items-center">
                
                <ToggleList CategoryState={CategoryState} setCategoryState={setCategoryState}/>

            </div>

            {!openingstate && <div
            className={`${TagOpen ? '': 'transition-none hover:transition-all hover:duration-200 rounded-md hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] '}
            `}
            onClick={() => setTagOpen(true)}
            >
                <div style={{ borderColor: 'var(--text-color)'}} className=" rounded-tr-lg rounded-tl-lg  animate__bounce-in-top h-5 border-l-4 border-r-4 border-t-4" ></div>
                

                    {
                        <div className={` ${TagOpen ? 'hidden' : 'block' }  animate__bounce-in-top text-3xl font-semibold grid place-items-center`}>
                            Show Tags <Arrow_down className="w-5 h-5 inline"/>
                        </div>
                    }

                    {
                        TagOpen &&
                        <div className={` ${TagOpen ? 'block' : 'hidden' } animate__slide-in-left  overflow-hidden`} >
                            <TagInput tagArray={props.tagArray} puretagArray={props.puretagArray} CategoryState={CategoryState} setTagState={setTagState}/>
                        </div>
                        
                    }
            
                <div style={{ borderColor: 'var(--text-color)'}} className=" rounded-br-lg rounded-bl-lg animate__bounce-in-top h-5 border-l-4 border-r-4 border-b-4"></div>
            </div>}
            
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 360: 1, 640: 2, 1024: 3 }}
                className=" my-10">
                <Masonry >
                    {filteredArray.map((value: any, index: number) => (
                        <Link key={index} href={`/post/${value.uuid}`} className="group relative block min-h-40 sm:min-h-64 lg:min-h-[512px] cursor-none overflow-hidden m-4">
                            { (value.titleimage && value.titleimage.length) > 0 && (
                                <img
                                    alt={value.title}
                                    src={value.titleimage}
                                    className=" rounded-lg absolute inset-0 h-2/3 lg:h-3/4 w-full object-cover opacity-90 transition-all group-hover:opacity-70"
                                />
                            )}
                            <div className=" rounded-lg relative flex h-full transform items-end border-[4px] border-[var(--text-color)] transition-transform">
                                <div className="pb-1 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
                                    <h3 className="p-1 mt-1 text-sm font-bold lg:text-3xl overflow-hidden whitespace-nowrap text-ellipsis">
                                        <p className="p-1 mt-0 break-words">
                                            {
                                                value.title.replace(/<[^>]+>/g, '').length > maxTitleLength
                                                    ? `${value.title.replace(/<[^>]+>/g, '').slice(0, maxTitleLength)}...`
                                                    : value.title.replace(/<[^>]+>/g, '')
                                            }
                                        </p>
                                        <p className=" opacity-65 pl-1 mt-0 break-words text-xs lg:text-lg">
                                        {value.tags.map((tag:string, index:number) => (
                                                <span key={index}>{"#"+tag+" "}</span> // 각 태그를 <span>으로 감싸서 렌더링
                                            ))}
                                        </p>
                                    </h3>
                                </div>
                                <div className="absolute w-full opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                                    <h3 className="p-1 mt-1 text-sm font-bold sm:text-2xl">
                                        <p className="p-1 mt-1 break-words whitespace-normal">
                                            {
                                                value.title.replace(/<[^>]+>/g, '').length > maxTitleLength
                                                    ? `${value.title.replace(/<[^>]+>/g, '').slice(0, maxTitleLength)}...`
                                                    : value.title.replace(/<[^>]+>/g, '')
                                            }
                                        </p>
                                    </h3>
                                    <p className="p-1 mt-1 text-xs sm:text-xl break-words whitespace-normal">
                                        {
                                            value.content.replace(/<[^>]+>/g, '').length > maxContentLength
                                                ? `${value.content.replace(/<[^>]+>/g, '').slice(0, maxContentLength)}...`
                                                : value.content.replace(/<[^>]+>/g, '')
                                        }
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}
