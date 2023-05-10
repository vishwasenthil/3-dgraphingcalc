import React, { Component } from 'react';

function KeyPadComponent(props) {

    return (

        <div className="button">

            




            <button name="x" onClick={e => props.onClick(e.target.name)}>x</button>

            <button name="y" onClick={e => props.onClick(e.target.name)}>y</button>

            <button name="z" onClick={e => props.onClick(e.target.name)}>z</button>

            <button name="=" onClick={e => props.onClick(e.target.name)}>=</button><br />





            <button name="(" onClick={e => props.onClick(e.target.name)}>(</button>

            <button name=")" onClick={e => props.onClick(e.target.name)}>)</button>

            <button name="DEL" onClick={e => props.onClick(e.target.name)}>DEL</button>

            <button name="C" onClick={e => props.onClick(e.target.name)}>C</button><br />





            <button name="1" onClick={e => props.onClick(e.target.name)}>1</button>

            <button name="2" onClick={e => props.onClick(e.target.name)}>2</button>

            <button name="3" onClick={e => props.onClick(e.target.name)}>3</button>
            <button name="+" onClick={e => props.onClick(e.target.name)}>+</button><br />





            <button name="4" onClick={e => props.onClick(e.target.name)}>4</button>

            <button name="5" onClick={e => props.onClick(e.target.name)}>5</button>

            <button name="6" onClick={e => props.onClick(e.target.name)}>6</button>

            <button name="-" onClick={e => props.onClick(e.target.name)}>-</button><br />




            <button name="7" onClick={e => props.onClick(e.target.name)}>7</button>

            <button name="8" onClick={e => props.onClick(e.target.name)}>8</button>

            <button name="9" onClick={e => props.onClick(e.target.name)}>9</button>

            <button name="*" onClick={e => props.onClick(e.target.name)}>*</button><br />





            <button name="." onClick={e => props.onClick(e.target.name)}>.</button>

            <button name="0" onClick={e => props.onClick(e.target.name)}>0</button>

            <button name="NEGATE" onClick={e => props.onClick(e.target.name)}>(-)</button>

            <button name="/" onClick={e => props.onClick(e.target.name)}>÷</button> <blockquote />







            <button name="^(" onClick={e => props.onClick(e.target.name)}>^</button>

            <button name="cos(" onClick={e => props.onClick(e.target.name)}>cos</button>

            <button name="sin(" onClick={e => props.onClick(e.target.name)}>sin</button>

            <button name="tan(" onClick={e => props.onClick(e.target.name)}>tan</button><br />




            <button name="e^(" onClick={e => props.onClick(e.target.name)}>e^</button>

            <button name="acos(" onClick={e => props.onClick(e.target.name)}>arccos</button>

            <button name="asin(" onClick={e => props.onClick(e.target.name)}>arcsin</button>

            <button name="atan(" onClick={e => props.onClick(e.target.name)}>arctan</button><br />




            <button name="ln(" onClick={e => props.onClick(e.target.name)}>ln</button>

            <button name="sec(" onClick={e => props.onClick(e.target.name)}>sec</button>

            <button name="csc(" onClick={e => props.onClick(e.target.name)}>csc</button>

            <button name="cot(" onClick={e => props.onClick(e.target.name)}>cot</button><br />




            <button name="log(" onClick={e => props.onClick(e.target.name)}>^</button>

            <button name="asec(" onClick={e => props.onClick(e.target.name)}>arcsec</button>

            <button name="acsc(" onClick={e => props.onClick(e.target.name)}>arccsc</button>

            <button name="acot(" onClick={e => props.onClick(e.target.name)}>arccot</button><br />




            <button name="e" onClick={e => props.onClick(e.target.name)}>e</button>

            <button name="pi" onClick={e => props.onClick(e.target.name)}>pi</button>

            <button name="tbd" onClick={e => props.onClick(e.target.name)}>x^y</button>

            <button name="sqrt(" onClick={e => props.onClick(e.target.name)}>sqrt</button><br />











        </div>

    );

}

export default KeyPadComponent;