import { ToggleButton } from "../mantine/ToggleButton";

export const ToggleList = ({ setCategoryState, CategoryState }: { setCategoryState: React.Dispatch<React.SetStateAction<string>>, CategoryState:string }) => {
    return (
        <div className=" flex gap-x-4 lg:overflow-auto overflow-scroll lg:pt-0 py-5 lg:w-auto w-full pr-10 ">
        <ToggleButton tag="All" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="cs" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="dailylife" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="art" setCategoryState={setCategoryState} CategoryState={CategoryState}/>
        <ToggleButton tag="etc" setCategoryState={setCategoryState} CategoryState={CategoryState}/>

        </div>
    );
}

export default ToggleList;