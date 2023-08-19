import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ReactFitty } from 'react-fitty';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';

export default function CalendarDataPicker() {
  const [startDate, setStartDate] = useState(new Date());

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <ReactFitty>
        <button
          className='py-2 px-4 w-[144px] h-[44px] rounded-2xl text-white bg-blue-700 text-sm text-center uppercase font-bold'
          onClick={onClick}
          ref={ref}
        >
          {value}
        </button>
      </ReactFitty>
    );
  });

  console.log(startDate);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        dateFormat='MMMM yyyy'
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
    </>
  );
}
