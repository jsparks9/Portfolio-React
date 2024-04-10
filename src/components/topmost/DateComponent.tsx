import { useState, useEffect } from 'react';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const getCurrentDate = () => {
      const dateObj = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        month: 'long', 
        day: '2-digit', 
        year: 'numeric' 
      };
      const formattedDate = dateObj.toLocaleDateString('en-US', options).replace(',', '');
      setCurrentDate(formattedDate);
    };

    getCurrentDate();
    const intervalId = setInterval(getCurrentDate, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>{currentDate}</>
  );
};

export default DateComponent;
