'use client';

import Masonry, { ResponsiveMasonry } from"react-responsive-masonry";
import Link from'next/link';
import { useEffect, useState } from'react';

export default function Notes(props: any) {
    const maxContentLength = 70;


  return (
    <div>
        <ResponsiveMasonry
        columnsCountBreakPoints={{ 360: 1, 640:2, 1024: 3 }}
        className="">
        <Masonry className=" px-5 lg:px-10 ">
          {props.supaArray.map((value: any, index: number) => (
            <Link key={index}href={`/post/${value.uuid}`} className="group relative block h-40 sm:h-64 lg:h-96">
                { (value.images && value.images.length) > 0 && <img alt={value.title}
                src={process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images/" + value.uuid + "/" + value.images[0]}
                className="absolute inset-0 h-2/3 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />}
              <span className="absolute inset-0 border-2 border-[var(--text-color)] border-dashed "></span>
                <div
                    className="relative flex h-full transform items-end border-2 border-[var(--text-color)] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                >
                    <div
                    className="pb-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 "
                    >

                    <h2 className=" p-4 mt-4 text-sm font-bold sm:text-2xl max-w-[20vw] sm:max-w-[20vw] break-words">{value.title}</h2>
                    </div>

                    <div
                    className=" absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
                    >
                    <h3 className=" p-4 mt-4 text-sm font-bold sm:text-2xl">{value.title}</h3>

                    <p className=" p-4 mt-4 text-sm sm:text-base max-w-[20vw] sm:max-w-[20vw] break-words whitespace-normal">
                    {
                    value.content.replace(/<[^>]+>/g, '').length > maxContentLength 
                            ? `${value.content.replace(/<[^>]+>/g, '').slice(0, maxContentLength)}...` 
                            : value.content.replace(/<[^>]+>/g, '')}
                    </p>

                    { value.content.length > maxContentLength && <p className="mt-8 font-bold">Read more</p>}
                    </div>
                </div>
    </Link>
          ))}
        </Masonry>
        </ResponsiveMasonry>
    </div>
  );
}