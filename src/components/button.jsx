import React from 'react'

const Button = ({className, text, icon}) => {
    return (
        <div>
            <button className={className}>
                {text}
                {icon}
            </button>
        </div>
    )
}

export default Button