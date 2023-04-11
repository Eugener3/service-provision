import React, { useState, useEffect } from "react";
import styles from "./SelectOption.module.scss";

const options = [
  "Разработка сайтов",
  "Реклама и маркетинг",
  "Тексты",
  "Продвижение сайтов",
  "Дизайн",
  "Программирование и IT",
  "SMM",
  "Аудио, видео, фото",
  "3D графика",
  "Менеджмент",
  "Мобильные приложения",
  "Разработка игр",
  "Дизайн интерьера",
  "Анимация и иллюстрация",
  "Аутсорсинг и консалтинг",
];

export const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    console.log(selectedOption); //Юде передавать SelectedOption!!!! 
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="" disabled>
        Выберите категорию
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default SelectOption;