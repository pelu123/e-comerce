import {useState, useEffect} from 'react';

const Home = () => {

    const consultarBDD = async () => {
        fetch('./json/productos.json')
            .then(promise => promise.json())
            .then(productos => {
                const cardProductos = productos.map(prod =>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={`.img/${prod.img}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Marca: {prod.marca}.</p>
                            <p className="card-text">Modelo: {prod.modelo}.</p>
                            <p className="card-text">Stock: {prod.stock}.</p>
                            <p className="card-text">Precio: ${prod.precio}.</p>
                        </div>
                    </div>
                )
                console.log(cardProductos)
                setProductos(cardProductos)
            })
    }
    const [productos,setProductos]= useState([]);

    useEffect(() => {
        consultarBDD()
    }, []);








    return (
        <>
            <div>
                {productos}
            </div>
        </>
    );
}

export default Home;
