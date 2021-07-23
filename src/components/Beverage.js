import React from "react"
import Buttons from "./Buttons"

const Beverage = ({name,cup,setForm, checkOut}) => {
    
    return (
        <div>
            {name}
            <span style={{width:16}} />
            {checkOut ? null : name==="ice" ? cup : (
            <Buttons setForm={setForm} name={name}>
                {cup}
            </Buttons>
            )}
        </div>
    )
};

export default Beverage