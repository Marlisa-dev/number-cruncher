import React from 'react'

const ButtonsContainer = () => {
    return (
        <div className='buttons-container'>
            <div>
                <button className='regular-btn'>7</button>
                <button className='regular-btn'>8</button>
                <button className='regular-btn'>9</button>
                <button className='regular-btn'>DEL</button>
            </div>
            <div>
                <button className='regular-btn'>4</button>
                <button className='regular-btn'>5</button>
                <button className='regular-btn'>6</button>
                <button className='regular-btn'>+</button>
            </div>
            <div>
                <button className='regular-btn'>1</button>
                <button className='regular-btn'>2</button>
                <button className='regular-btn'>3</button>
                <button className='regular-btn'>-</button>
            </div>
            <div>
                <button className='regular-btn'>.</button>
                <button className='regular-btn'>0</button>
                <button className='regular-btn'>/</button>
                <button className='regular-btn'>x</button>
            </div>
            <div>
                <button className='large-btn'>RESET</button>
                <button className='large-btn'>=</button>
            </div>

    
        </div>
      )
}

export default ButtonsContainer