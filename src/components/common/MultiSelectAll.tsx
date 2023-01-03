import React from 'react';
import { Picky } from 'react-picky';
import 'react-picky/dist/picky.css';

interface Props {
  options: any;
  placeholder?: string;
  arrayValue: any;
  setArrayValue: Function;
}

export const MulitSelectAll: React.FC<Props> = (props) => {
  const { options, placeholder, arrayValue, setArrayValue } = props;

  const selectMultipleOption = (value: any) => {
    setArrayValue(value);
  };

  return (
    <Picky
      placeholder={placeholder}
      value={arrayValue}
      options={options}
      onChange={selectMultipleOption}
      valueKey="id"
      labelKey="name"
      multiple={true}
      includeSelectAll={true}
      includeFilter={true}
      dropdownHeight={600}
      numberDisplayed={0}
    />
  );
};
