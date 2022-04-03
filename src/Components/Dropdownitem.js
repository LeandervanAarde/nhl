import React from 'react';

const Dropdownitem= (props) => {
    return (
      <>
        <option value={props.season}>{props.season}</option>
      </>
    );
};

export default Dropdownitem;