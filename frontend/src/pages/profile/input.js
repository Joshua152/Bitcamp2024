import React from 'react';
import './input.css';

function Input({ type="text", label, placeholder, handleValue, handleChange }) {
    return (
        <>
            <div className='container'>
                <div>
                    <p>{label}</p>
                </div>
                <div className='input-bar'>
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={handleValue()}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}

export default Input;