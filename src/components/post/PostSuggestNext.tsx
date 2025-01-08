'use client';

import Link from "next/link";
import { useEffect } from "react";

export const PostSuggest = (props:any) => {
    useEffect(() => {
        if (!props.data) {
            
        }
    }, []);
    return (
      <div >
      <Link href={`/post/${props.data.uuid}`} className={` ${props.data ? `block` : `hidden`} flex flex-col items-center border-2 border-[var(--text-color)]  rounded-lg shadow md:flex-row hover:opacity-75 transition-opacity`}>
        <img className=" rounded-tl-md rounded-bl-md object-cover  h-24 w-full lg:h-48 lg:w-48 " src={props.data.titleimage} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal lg:place-items-start  place-items-center ">
            <h5 className="mb-2 text-sm lg:text-2xl font-bold tracking-tight  ">다음 게시물</h5>
            <p className="mb-3 text-sm lg:text-2xl font-semibold ">{props.data ? props.data.title : "no data"}</p>
            <div className="flex flex-wrap">
              {props.data.tags.map((tag:string, index:number) => (
                <p className="mb-3 text-xs lg:text-xl mr-1 font-normal ">{ `#${tag}` }</p>
              ))}
              </div>
        </div>
    </Link>
</div>
    );
}

export default PostSuggest;