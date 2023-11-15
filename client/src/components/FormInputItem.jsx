import React from "react";
import PropTypes from "prop-types";

const FormInputItem = ({
  title,
  name,
  onChange,
  type,
  placeholder,
  options,
  labelStyle
}) => {
  const getRadioButtons = (options) => {
    console.log(options);
    return options.map((option) => (
      <label key={option} className="form-radio-item" style={labelStyle}>
        <input type="radio" name={name} value={option} onChange={onChange} />
        {option}
      </label>
    ));
  };

  if (type === "radio") {
    return (
      <label className="form-radio-label" style={labelStyle}>
        
        {title}:
        <div className="form-radio-item-parent">{getRadioButtons(options)}{" "}</div>
      </label>
    );
  }
  return (
    <label className="form-item" style={labelStyle}>
      {title}:
      {type === "textarea" ? (
        <textarea name={name} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          style={labelStyle}
        />
      )}
    </label>
  );
};

FormInputItem.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  labelStyle: PropTypes.object,
};

export default FormInputItem;
