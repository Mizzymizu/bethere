import React from "react";
import PropTypes from "prop-types";

const FormInputItem = ({
  title,
  name,
  onChange,
  type,
  placeholder,
  options,
}) => {
  const getRadioButtons = (options) => {
    console.log(options);
    return options.map((option) => (
      <label key={option} className="form-radio-item">
        <input type="radio" name={name} value={option} onChange={onChange} />
        {option}
      </label>
    ));
  };

  if (type === "radio") {
    return (
      <label className="form-radio-label">
        
        {title}:
        <div className="form-radio-item-parent">{getRadioButtons(options)}{" "}</div>
      </label>
    );
  }
  return (
    <label className="form-item">
      {title}:
      {type === "textarea" ? (
        <textarea name={name} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
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
};

export default FormInputItem;
