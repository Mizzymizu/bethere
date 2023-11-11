import React from "react";
import { Form } from "react-router-dom";
import PropTypes from "prop-types";

const FormInputItem = ({ title, name, onChange, type, placeholder }) => {
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
};

export default FormInputItem;
