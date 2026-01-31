'use client'

import { useRecoilState } from "recoil";
import { CheckModalState, lastUuidState } from "@/Atoms/ModalsAtom";

async function deletePost(uuid: string) {
  try {
    const response = await fetch('/api/delete-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uuid }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Post deleted successfully:', data);
    } else {
      console.error('Error deleting post:', data.error);
    }
  } catch (error) {
    console.error('Error deleting post:', error);
  }
}

export const CheckingModal = (props:any)=> {
    const [checkModalState, setCheckModalState] = useRecoilState(CheckModalState);
    const [getlastUuidState, setlastUuidState] = useRecoilState(lastUuidState);
    if (!checkModalState) return null;
    return (
        <div className="w-[vw] h-screen bg-slate-600">
            <div id="default-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden  fixed top-1/2 left-1/2 z-50 w-full h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                    진짜 할거에요잉?
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " onClick={() => setCheckModalState(false)}>
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <div className="sr-only">Close modal</div>
                </button>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                <button onClick={async () => {
                    await deletePost(getlastUuidState);
                    setCheckModalState(false);
                }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">네</button>
                <button onClick={() => setCheckModalState(false)} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">아뇨</button>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default CheckingModal;