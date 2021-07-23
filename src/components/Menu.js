import React,{useState,useEffect} from "react"
import Beverage from "./Beverage"
import CheckOut from "./CheckOut"
import EraseMenu from "./EraseMenu"

const INITIAL_MENU = {
    lemonWater: 0,
    coke: 0,
    milkTea: 0,
    ice: 0
}
const PRICE_LIST = {
    lemonWater: 10,
    coke:15,
    milkTea: 20,
    ice: 0
}

const Menu = () => {
    const [form,setForm] = useState(INITIAL_MENU)
    const [checkOut,setCheckOut] = useState(false)

    useEffect(() => {
        setForm(form =>({
            ...form,
            lemonWater: 4,
            coke: 1,
            milkTea: 0
        }))
    }, [])

    useEffect(() => {
        setForm(form =>({
            ...form,
            ice: form.lemonWater
        }))
    }, [form.lemonWater])

    const handleErase = () => {
        setForm(INITIAL_MENU)
    }

    const handleCheckout = () => {
        setCheckOut(true)
    }


    return (
    <div>
        {Object.keys(form).map(key => <Beverage key={key} name={key} cup={form[key]} setForm={setForm} checkOut={checkOut} />
        )      
        } 
        {checkOut ? <div>{`Total: ${Object.keys(form).reduce((acc,cur)=>{
            if(cur === "ice") return acc
            return acc + form[cur]
        }, 0)} Price: ${Object.keys(form).reduce((acc,cur)=>{
            return acc + PRICE_LIST[cur] * form[cur]
        }, 0)}`}</div> : 
            (
            <>
                <EraseMenu handleErase={handleErase} />
                <CheckOut handleCheckout={handleCheckout} />
            </>
            )
        }
    </div>
          
    ) 
    
};

export default Menu