import { useState, useContext } from "react";
import { ContextCategory } from "../../../utils/Context/ContextCategory";

const DateInput = () => {
  const {date, setDate} = useContext(ContextCategory);

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    const [day, month, year] = inputDate.split('/');
    const dateObject = new Date(`${day}.${month}.${year}`).toLocaleDateString('sv');
    setDate(inputDate);
    
    console.log(inputDate) //ЮДЕ ОТПРАВЛЯТЬ InputDate!!!!!!!!!!!!!!!!!
                   
  };

  const handleDateBlur = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const inputDate = e.target.value;
    setDate(inputDate);
  };

  const handleInputFocus = (e) => {
    e.currentTarget.type = "date";
  };

  const handleInputBlur = (e) => {
    e.currentTarget.type = "text";
    const inputDate = e.target.value;
    setDate(inputDate);
  };
  
  const today = new Date().toISOString().split("T")[0];

  return (
    <input 
        type="text"
        placeholder="Дата окончания" 
        value={date}
        onChange={handleDateChange}
        onFocus={handleInputFocus}
        onBlur={handleDateBlur}
        dir="auto"
        min={today}
    />
  );
};

export default DateInput;