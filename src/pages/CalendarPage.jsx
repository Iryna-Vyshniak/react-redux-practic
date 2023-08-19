import CalendarDataPicker from '../components/Calendar/CalendarDataPicker';

const CalendarPage = () => {
  return (
    <>
      <CalendarDataPicker />
    </>
  );
};

export default CalendarPage;

// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { format } from 'date-fns';
// import { useState } from 'react';
// const CalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const currentDate = format(selectedDate, 'MMMM dd');
//   console.log(currentDate);

//   const handleDateChange = (newDate) => {
//     setSelectedDate(newDate);
//   };

//   const toggleDatePicker = () => {
//     setShowDatePicker(!showDatePicker);
//   };

//   return (
//     <>
//       <button
//         style={{
//           width: '80px',
//           height: '40px',
//           position: 'relative',
//           backgroundColor: 'blue',
//           color: 'white',
//         }}
//         onClick={toggleDatePicker}
//       >
//         {currentDate}
//       </button>
//       {showDatePicker && (
//         <LocalizationProvider
//           dateAdapter={AdapterDateFns}
//           style={{ position: 'absolute', top: '5px', opacity: '0' }}
//         >
//           <DatePicker
//             open
//             value={selectedDate}
//             onChange={handleDateChange}
//             onClose={() => setShowDatePicker(false)}
//             className='custom-date-picker'
//           />
//         </LocalizationProvider>
//       )}
//     </>
//   );
// };

// export default CalendarPage;
