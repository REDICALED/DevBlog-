import { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className=" w-[300px]">
      <div className="">
        
        <div className={`w-[300px] max-h-[80px] flex overflow-y-hidden overflow-x-scroll ${tags.length > 0 ? '' : 'hidden'}`}>
          {tags.map((tag, index) => (
          <div
            key={index}
            className=" min-w-[200px] h-[60px] px-1 py-1 text-sm font-medium border-2 border-[var(--text-color)] rounded"
            onClick={() => removeTag(index)}
          >
            {tag}
          </div>
        ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tag로 검색!"
          className=" focus:outline-none 
          focus:border-[3px]
          transition-[background-color]
          duration-[0.45s]
          placeholder-[var(--text-color)] w-[300px] h-[40px] border-2 rounded-lg p-2 border-[var(--text-color)] text-[var(--text-color)] bg-[var(--bg-color)]" />
      </div>
    </div>
  );
};

export default TagInput;
