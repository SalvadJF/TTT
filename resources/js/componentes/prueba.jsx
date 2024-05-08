import react from "react";
import {createRoot} from 'react-dom/client'

const Prueba = () => {
    return (
        <div>Prueba</div>
    )
}

export default Prueba

if (document.getElementById("prueba")){
    createRoot(document.getElementById("prueba")).render(<Prueba/>)
}
