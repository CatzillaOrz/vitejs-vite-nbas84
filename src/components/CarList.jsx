import { forwardRef, useImperativeHandle,  useState } from "react"

 export const CarList =forwardRef(({cars}, ref) => {
    const [toggle, setToggle] = useState(false)
    const show = () =>{
        setToggle(true)
      }

    useImperativeHandle(ref, () => {
        return {
          show
        };
      }, [])
    return (
        <>
        <ul>
            {cars && cars.map((car, index) => 
                <li key={index}>{car}</li>
                )}
        </ul>
        {toggle ? (<p>Cars showed up successfully!</p>) : <></>
        }
        </>
        
    )
})
