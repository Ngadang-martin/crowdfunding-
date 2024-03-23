import React from 'react'


export const SelectInput = ({ options, label, onChange }) => {
    
    return (
        <div className="form-group">
            <label for="category">{label}</label>
            <select onChange={onChange} className="form-control" id="category">

                {options.map((option, index) => (
                    <option key={index} value={option.id}>{option.category}</option>
                ))}
            </select>
        </div>
    ) 
}


