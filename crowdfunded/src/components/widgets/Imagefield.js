import React from 'react'

const Imagefield = ({ value, label, name, placeholder, type, onChange, onClick }) => (
    //<div className="form-group">
    //     {label && <label htmlFor="input-field">{label}</label>}
    //     <div className="input-group col-xs-12">
    //         <input type={type} name={name} value={value} onChange={onChange} className="form-control file-upload-info" disabled placeholder={placeholder} />
    //         <span className="input-group-append">
    //             <button className="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
    //         </span>
    //     </div>
    // </div>
    <div className="form-group">
        {label && <label htmlFor="input-field">{label}</label>}
        <input type={type}  onChange={onChange} name={name}className="file-upload-default" multiple />
        <div className="input-group col-xs-12">
            <input  type="text" className="form-control file-upload-info" disabled placeholder={placeholder} />
            <span className="input-group-append">
                <button miltiple className="file-upload-browse btn btn-gradient-primary" onClick={onClick} type="button">Upload</button>
            </span>
        </div>
    </div>
)
export default Imagefield
