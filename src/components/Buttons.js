import React from "react"

const Buttons = ({setForm,name,children}) => {
    const onPlus = () => {
        setForm(form => ({
                ...form,
                [name]: form[name] + 1
            })
        )
    }
    const onMinus = () => {
        setForm(form => ({
                ...form,
                [name]: form[name] - 1
            })
        )
    }

    return (
    <>
        <button onClick={onPlus}>+</button> 
            {children}
        <button onClick={onMinus}>-</button> 
    </>
    )
};

export default Buttons