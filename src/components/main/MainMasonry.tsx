'use client'

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from 'next/link';
import {Search_input} from '@/components/mantine/Search_input';
import {ToggleList} from '@/components/main/ToggleList';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SupaArrayState } from "@/Atoms/OpeningAtom";

export default function Notes(props: any) {
    const maxContentLength = 40;
    const maxTitleLength = 20;
    const [loaded, setloaded] = useState<boolean>(false);
    useEffect(() => {
        setloaded(true);
        console.log(props.supaArray)

    },[]);

    if (!loaded) {
        return <div>loading...</div>;
    }
    return (
        <div className="px-5 lg:px-10">
            <div className="lg:flex">
            <div className=" pr-10">
            <Search_input/>
            </div>
            <div>
                <ToggleList/>
            </div>
            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 360: 1, 640: 2, 1024: 3 }}
                className="">
                <Masonry >
                    {props.supaArray.map((value: any, index: number) => (
                        <Link key={index} href={`/post/${value.uuid}`} className="group relative block min-h-40 sm:min-h-64 lg:min-h-[512px] cursor-none overflow-hidden m-1">
                            { (value.titleimage && value.titleimage.length) > 0 && (
                                <img
                                    alt={value.title}
                                    src={value.titleimage}
                                    className=" p-1 pt-3 absolute inset-0 h-2/3 w-full object-cover opacity-90 transition-all group-hover:opacity-70"
                                />
                            )}
                            <div className=" rounded-sm relative flex h-full transform items-end border-2 border-[var(--text-color)] transition-transform">
                                <div className="pb-1 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
                                    <h3 className="p-1 mt-1 text-sm font-bold sm:text-2xl overflow-hidden whitespace-nowrap text-ellipsis">
                                        <p className="p-1 mt-1 break-words">
                                            {
                                                value.title.replace(/<[^>]+>/g, '').length > maxTitleLength
                                                    ? `${value.title.replace(/<[^>]+>/g, '').slice(0, maxTitleLength)}...`
                                                    : value.title.replace(/<[^>]+>/g, '')
                                            }
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
