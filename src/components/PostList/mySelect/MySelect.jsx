import React from 'react';
import styles from './MySelect.module.scss'

const MySelect = ({ options, defaultValue, value, onChange }) => {
  console.log(options);
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value={value}>{defaultValue}</option>
      {options.map((option) =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default MySelect;
