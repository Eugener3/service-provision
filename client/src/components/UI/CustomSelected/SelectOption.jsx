import React, { useState, useEffect }  from "react";
import styles from "./SelectOption.module.scss";
import axios from "axios";

//
// console.log(options)

export const SelectOption = ({ selected }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/api/category");
      setCategories(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedOption); //Юде передавать SelectedOption!!!!
    // selected(selectedOption)
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Выберите категорию
        </option>
        {categories.map((item) => (
          <option key={item._id} value={item.nameCategory}>
            {item.nameCategory}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectOption;
