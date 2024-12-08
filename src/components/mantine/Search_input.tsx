import { TextInput,rem } from '@mantine/core';
import {IconSearch} from '@tabler/icons-react';

export function Search_input() {
    const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;

  return (
    <div>
        <input type="text" placeholder="Search" className=" focus:outline-none 
    focus:border-[3px]
    transition-[background-color]
    duration-[0.45s]
    placeholder-[var(--text-color)] w-[300px] h-[40px] border-2 rounded-lg p-2 border-[var(--text-color)] text-[var(--text-color)] bg-[var(--bg-color)]" />
    </div>
  );
}