import React from 'react'

const Button = ({texto, color, children}) => {
  console.log(texto, color);
  return (
    <>
    <input type="text" />
      <button style={{color: color }}>{color ? color :  'defecto' }</button>
      {children}
    </>
  )
}
export default Button;
