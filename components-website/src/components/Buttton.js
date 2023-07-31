import React from 'react'
import './Button.css'

// Classes we can apply in styles to change the button css
const STYLES = ['btn--primary', 'btn--outline']

const SIZES =['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'green']

export const Button = ({ 
    children,
    type,
    onClick,
    buttonStyle ,
    buttonSize,
    buttonColor
})=> {

    //  to change the style of the button without touching the CSS
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0]
    // The upper statement means if the buttonstyle is true show the desiggn that is 
    // chosen else go to automatic primary 

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor: COLOR[0]

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}



