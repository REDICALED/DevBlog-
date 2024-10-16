'use client';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from 'next/link';

export default function Notes(props: any) {
    const maxContentLength = 40;
    const maxTitleLength = 20;

    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 360: 1, 640: 2, 1024: 3 }}
                className="">
                <Masonry className="px-5 lg:px-10">
                    {props.supaArray.map((value: any, index: number) => (
                        <Link key={index} href={`/post/${value.uuid}`} className="group relative block h-40 sm:h-64 lg:h-96 overflow-hidden m-1">
                            { (value.images && value.images.length) > 0 && (
                                <img
                                    alt={value.title}
                                    src={process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images/" + value.uuid + "/" + value.images[0]}
                                    className="absolute inset-0 h-2/3 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />
                            )}
                            <span className=" absolute inset-0 border-2 border-[var(--text-color)] border-dashed"></span>
                            <div className=" relative flex h-full transform items-end border-2 border-[var(--text-color)] transition-transform">
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
