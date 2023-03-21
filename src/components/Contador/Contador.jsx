import {useState} from 'react';
import '../App.css'

const Contador = () => {
    const [contador, setContador] = useState(1)

    const modificarContador = (operacion) => {
        if (operacion === "+"){
            if (contador < 10)
            setContador(contador + 1)
        } else{
            if (contador > 0)
            setContador(contador - 1)
        }
    }
    const onAdd = (contador) =>{
        console.log(`Agregaste ${contador} unidades al carrito`)
    }
    return (
        <div className='counterBtns'>
            <button onClick={() => modificarContador("-")} className='btn btnMenos'>-</button>
            {contador}
            <button onClick={() => modificarContador("+")} className='btn btnMas'>+</button>
            <div>
                <button onClick={() => onAdd(contador)} className='btn agrCarrito'>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Contador;
