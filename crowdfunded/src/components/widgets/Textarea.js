import React from 'react'

const Textarea = ({ value, label, name, placeholder, type, onChange }) => (
    <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <textarea
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
)

export default Textarea
