import React from 'react'

const ButtonsContainer = ({ handleButtonClick }) => {

    const buttons = [
        '7', '8', '9', 'DEL',
        '4', '5', '6', '+',
        '1', '2', '3', '-',
        '.', '0', '/', 'x',
        'RESET', '='
    ];

    return (
        <div className="buttons-container">
            {buttons.map((button) => (
                <button
                    key={button}
                    onClick={() => handleButtonClick(button)}  
                    className={button === 'RESET' || button === '=' ? 'full-width' : ''}                
                >
                    {button}
                </button>
            ))}
        </div>
    )
}

export default ButtonsContainer