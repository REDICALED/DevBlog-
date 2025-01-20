'use client';

import Link from "next/link";
import { useEffect } from "react";

export const PostSuggest = (props:any) => {
    useEffect(() => {
        console.log(props.data);
        console.log("aknaskdjnkasjdnkasjdnkasdjn");
    }, []);
    return (
      <div className="">
      <Link href={`/post/${props.data.uuid}`} className={` ${props.data ? `block` : `hidden`} flex flex-col items-center border-2 border-[var(--text-color)] transition-opacity rounded-lg shadow lg:flex-row  hover:opacity-75`}>
      <img className=" rounded-tl-md rounded-bl-md object-cover  h-24 w-full lg:h-48 lg:w-48 " src={props.data.titleimage} alt=""/>
      <div className="flex flex-col justify-between p-4 leading-normal lg:place-items-start  place-items-center">
              <p className="mb-3 text-sm lg:text-2xl font-semibold ">{props.data ? props.data.title : "no data"}</p>
              <div className="flex flex-wrap">
              <p className="mb-3 text-xs lg:text-xl mr-1 font-normal ">{ `#${props.data.tags[0]}` }</p>
              </div>
              <p className="mb-3 text-xs lg:text-sm mr-1 font-normal ">{ `${new Date(props.data.date).toISOString().replace('T', ' ').split('.')[0].split(' ')[0]}` }</p>

          </div>
      </Link>
    </div>
    );
}

export default PostSuggest;