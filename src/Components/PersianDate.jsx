import moment from "moment-jalaali";
import React, { useEffect, useState } from "react";


const weekDays = [
    'یک شنبه',
    'دو شنبه',
    'سه شنبه',
    'چهار شنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
]

const yearMonth = [
     'فروردین',
     'اردیبهشت',
     'خرداد',
     'تیر',
     'مرداد',
     'شهریور',
     'مهر',
     'آبان',
     'آذر',
     'دی',
     'بهمن',
     'اسفند',

]

const PersianDate = () => {
  
  const [date , setDate] = useState('')
  const [time , setTime] = useState('')  


  useEffect(()=>{
    let m = moment()
    let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ${m.jYear()}`
    setDate(finalDate);
    setTime(m.format('HH:mm'))
  } , [])

  return (
    <div>
      <span className="mb-3 text-center d-block text-color">{date}</span>
      <span className="text-center d-block text-color">{time} ساعت </span>
    </div>
  );
};

export default PersianDate;
