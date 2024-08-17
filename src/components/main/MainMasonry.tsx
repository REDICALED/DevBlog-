'use client';

import Masonry, { ResponsiveMasonry } from"react-responsive-masonry";
import Link from'next/link';
import { useEffect, useState } from'react';

export default function Notes(props: any) {
    const maxContentLength = 30;


  return (
    <div>
        <ResponsiveMasonry
        columnsCountBreakPoints={{ 768: 2, 900: 3, 1200: 4 }}
        className="">
        <Masonry className=" px-5 lg:px-10 ">
          {props.supaArray.map((value: any, index: number) => (
            <Link key={index}href={`/post/${value.uuid}`} className="group relative block h-64 sm:h-80 lg:h-96">
                { (value.images && value.images.length) > 0 && <img alt={value.title}
                src={process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images/" + value.uuid + "/" + value.images[0]}
                className="absolute inset-0 h-2/3 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />}
              <span className="absolute inset-0 border-2 border-[var(--text-color)] border-dashed "></span>
                <div
                    className="relative flex h-full transform items-end border-2 border-[var(--text-color)] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                >
                    <div
                    className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                    >

                    <h2 className="mt-4 text-xl font-bold sm:text-2xl">{value.title}</h2>
                    </div>

                    <div
                    className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                    >
                    <h3 className="mt-4 text-xl font-bold sm:text-2xl">{value.title}</h3>

                    <p className="mt-4 text-sm sm:text-base max-w-[10vw] break-words whitespace-normal">
                    {value.content.length > maxContentLength 
                            ? `${value.content.slice(0, maxContentLength)}...` 
                            : value.content}
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
