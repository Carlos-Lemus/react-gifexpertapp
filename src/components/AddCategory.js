import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( { setCategories} ) => {

    const [inputValue, setInputValue] = useState("");

    const submitHandle = event => {
        event.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
    
            setInputValue("");
        }
    

        console.log("submitHandle llamado");
    };

    const changeInputHandle = event => {
        setInputValue(event.target.value);

        console.log("changeInputHandle llamado");
    };

    return (
        <form onSubmit={ submitHandle }>
            <p> {inputValue} </p>
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


