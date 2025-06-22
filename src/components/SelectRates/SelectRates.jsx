import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '../../reduxState/currency/currency-slice';

const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const handleChange = selectedOption => {
    dispatch(setBaseCurrency(selectedOption.value));
  };
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
        options={symbols}
        value={{ label: baseCurrency, value: baseCurrency }}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectRates;
