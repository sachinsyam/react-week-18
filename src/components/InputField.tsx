import React from 'react';
import './styles.css';


const InputField = () => {
  return (
    <form action="" className="input">
        <input type="input" placeholder='input task' className='input__box'/>
        <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField