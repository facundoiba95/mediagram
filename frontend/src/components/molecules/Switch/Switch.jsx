import React, { useContext } from 'react'
import { InputStyles, LabelStyles, SwitchStyles } from './SwitchStyles';
import { GlobalContext } from '../../../Context/GlobalContext';

const Switch = () => {
    const { switchChecked, setSwitchChecked } = useContext(GlobalContext);  
   
    return (
      <LabelStyles>
        <InputStyles checked={switchChecked} type="checkbox" onChange={(e) =>setSwitchChecked(e.target.checked)} />
        <SwitchStyles />
      </LabelStyles>
    );
  };
  

export default Switch