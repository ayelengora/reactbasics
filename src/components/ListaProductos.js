import React, { Component, Fragment } from 'react';
import Producto from './Producto'

class ListaProductos extends Component { 
  state = {
    productos : [

      { id : 1, name : 'camisa Ractjs', precio: 30 },
      { id : 2, name : 'camisa Angular', precio: 30 },
      { id : 3, name : 'camisa Rails', precio: 30 },
      { id : 4, name : 'camisa Ruby', precio: 30 }

    ]

  }

  render() {

    const {productos} = this.state;
    console.log(productos);

    return (
      <Fragment>
        <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />

        ))}
      </Fragment>
      
    );
  }
}

export default ListaProductos;