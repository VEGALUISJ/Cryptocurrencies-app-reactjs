import React, { Fragment, useState } from "react";

const useCoin = (label, initialState, options) => {
  //Custom Hook State
  const [state, setState] = useState({ initialState });

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">--Select your option--</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return [state, Select, setState];
};

export default useCoin;
