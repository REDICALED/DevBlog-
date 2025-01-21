import { ToggleButton } from "../mantine/ToggleButton";

export const ToggleList = ({ setCategoryState, CategoryState }: { setCategoryState: React.Dispatch<React.SetStateAction<string>>, CategoryState:string }) => {
    return (
        <div className=" flex lg:gap-x-5 gap-x-3 lg:overflow-auto overflow-scroll lg:pt-0 my-10 lg:w-auto w-full pr-10 "> 
        <ToggleButton tag="All" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="cs" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="dailylife" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="art" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="etc" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        </div>
    );
}

export default ToggleList;