interface TagInputProps {
  tagArray: { [key: string]: number };
  setTagState: React.Dispatch<React.SetStateAction<string>>;
}

const TagInput = (props: TagInputProps) => {

  return (
    <div
    className="">
          <div className='flex'
          >
            <div  
              onClick={() => props.setTagState('All')}
              className=" 
              transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
               border-[var(--text-color)] border-2 rounded-md mr-2 p-1">
                <span className="text-lg lg:text-xl mx-2">All</span>
              </div>


            {Object.entries(props.tagArray).map(([key, value]) => (
              <div key={key} 
              onClick={() => props.setTagState(key)}
              className=" 
              transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
               border-[var(--text-color)] border-2 rounded-md mr-2 p-1">
                <span className="text-lg lg:text-xl ml-1">{`${key} (${value})`}</span>
              </div>
            ))}
          </div>  
        
    </div>
  );
};

export default TagInput;
