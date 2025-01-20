import { useEffect, useState } from "react";

interface TagInputProps {
  tagArray: { [key: string]: number };
  CategoryState: string;
  setTagState: React.Dispatch<React.SetStateAction<string>>;
  puretagArray: any;
}

const TagInput = (props: TagInputProps) => {
  const [SelectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    setSelectedTag('All')
  },[props.CategoryState])
  return (
    <>
    
    {<div
    className="lg:max-h-[400px] max-h-[150px] overflow-y-scroll scrollbar lg:mx-10 mx-4 font-bold text-2xl">
          <div className='flex flex-wrap '
          >
            <div  
              onClick={() => {
                props.setTagState('All')
                setSelectedTag('All')
              }}
              className={`
              flex-shrink-0
              transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
               border-[var(--text-color)] border-2 rounded-md mr-2 p-1 my-1
                grid place-items-center
                ${SelectedTag === 'All' ? 'bg-[var(--text-color)] text-[var(--bg-color)]' : 'bg-[var(--bg-color)] text-[var(--text-color)]'}
                `}>
                <span className="text-sm lg:text-xl mx-2 ">All</span>
              </div>


            {
            props.CategoryState === "All" &&
            Object.entries(props.puretagArray)
            .map(([key, value]) => (
              <div key={key} 
              onClick={() => {
                props.setTagState(key)
                setSelectedTag(key)
              }}
              className={` 
              flex-shrink-0
              transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
               border-[var(--text-color)] border-2 rounded-md mr-2 p-1 my-1
                grid place-items-center
                ${SelectedTag === key ? 'bg-[var(--text-color)] text-[var(--bg-color)]' : 'bg-[var(--bg-color)] text-[var(--text-color)]'}
               `}>
                <span className="text-sm lg:text-xl ml-1">{`${key} (${value})`}</span>
              </div>
            ))}
            {
            props.CategoryState !== "All" &&
            Object.entries(props.tagArray[props.CategoryState])
            .map(([key, value]) => (
              <div key={key} 
              onClick={() => {
                props.setTagState(key)
                setSelectedTag(key)
              }}
              className={` 
              flex-shrink-0
              transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
               border-[var(--text-color)] border-2 rounded-md mr-2 p-1 my-1
                grid place-items-center
                ${SelectedTag === key ? 'bg-[var(--text-color)] text-[var(--bg-color)]' : 'bg-[var(--bg-color)] text-[var(--text-color)]'}
               `}>
                <span className=" text-sm lg:text-xl ml-1">{`${key} (${value})`}</span>
              </div>
            ))}
          </div>  
    </div>}
    
    </>
  );
};

export default TagInput;
