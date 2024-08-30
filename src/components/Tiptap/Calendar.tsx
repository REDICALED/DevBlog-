'use client';
import { useState, useEffect  } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalComponent(props: any) {
    const [value, onChange] = useState<Value>(new Date());
    const [CalendarView, SetCalendarView] = useState<boolean>(false);

    useEffect(() => {
        SetCalendarView(true);
    }, []);
    useEffect(() => {
        props.setCalDate(value);
    }, [value]);
    return (
        <div>
            <div className="border-2 border-black bg-white overflow-scroll">
                {CalendarView && <Calendar onChange={onChange} value={value} />}
            </div>
        </div>
    );
}
