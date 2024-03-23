import React from 'react'

const Button = ({ className, onClick , type , name}) => (
<button type={type} className={className} onClick={onClick}>{name}</button>
)

export default Button
