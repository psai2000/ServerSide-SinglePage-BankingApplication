import React from "react";

const InputField = ({ value, label, placeholder, type, className, onChange, onBlur, onKeyUp, required }, ref) => {


  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        ref={ref}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        required={required}
      />
    </div>
  );
};

export default React.forwardRef(InputField);
