import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Styles/Calendar.css'; // Import your custom CSS file

const MyCustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="custom-calendar">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          // Add custom class to specific dates
          if (date.getDate() === 1) {
            return 'highlight';
          }
        }}
      />
    </div>
  );
};

export default MyCustomCalendar;
