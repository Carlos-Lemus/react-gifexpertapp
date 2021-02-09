import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( { setCategories} ) => {

    const [inputValue, setInputValue] = useState("");

    const submitHandle = event => {
        event.preventDefault();
    
        setCategories(cats => [inputValue, ...cats]);

        setInputValue("");
    };

    const changeInputHandle = event => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={ submitHandle }>
            <input type="text" 
                value={ inputValue } 
                onChange={ changeInputHandle } 
                />
        </form>
    );

};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};


