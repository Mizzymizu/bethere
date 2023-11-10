import React from 'react';
import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormInputItem = ({title, name, onChange, type}) => {
    return (
        <label className="form-item">
            {title}:
        <input type={type} name={name} onChange={onChange} />
    </label>
    );
    }

    FormInputItem.propTypes = { 
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired,
    };

    export default FormInputItem;