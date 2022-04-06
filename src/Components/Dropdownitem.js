import React from 'react';

const Dropdownitem= (props) => {
    return (
      <>
        <option value={props.season}>{props.season}</option>
        <option value={props.name}>{props.name}</option>

        {/* //key={item.id} name={item.nanme} link={item.link} */}
      </>
    );
};

export default Dropdownitem;