import { ToggleButton } from "../mantine/ToggleButton";

export const ToggleList = () => {
    return (
        <div className=" flex gap-x-4 lg:overflow-auto overflow-scroll lg:pt-0 py-5 lg:w-auto w-full pr-10 ">
        <ToggleButton tag="All"/>
        <ToggleButton tag="CS"/>
        <ToggleButton tag="DailyLife"/>
        <ToggleButton tag="Art"/>
        <ToggleButton tag="Etc"/>

        </div>
    );
}

export default ToggleList;