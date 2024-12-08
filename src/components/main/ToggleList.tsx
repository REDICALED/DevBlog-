import { ToggleButton } from "../mantine/ToggleButton";

export const ToggleList = () => {
    return (
        <div className=" flex gap-x-4 ">
        <ToggleButton tag="All"/>
        <ToggleButton tag="Programming"/>
        <ToggleButton tag="DailyLife"/>
        <ToggleButton tag="Art"/>
        <ToggleButton tag="Etc"/>

        </div>
    );
}

export default ToggleList;