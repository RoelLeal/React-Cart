import React from 'react';
import { useCart } from "react-use-cart";

const Cart = () => {

  const { 
    isEmpty,  
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if(isEmpty) return <h1 className="text-center my-5">Cart is empty</h1>
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Carrito ({totalUniqueItems}) Cantidad de productos: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
            {items.map((item, index) => {
              return(
              <tr key={index}>
                <td>
                  <img src={item.img} style={{height: '6rem'}} alt=""/>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Cantidad: ({item.quantity})</td>
                <td>
                  <button className="btn btn-warning ms-2"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >-</button>
                  <button className="btn btn-info ms-2"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  <button className="btn btn-danger ms-2" 
                    onClick={() => removeItem(item.id)}
                    >Eliminar producto</button>
                </td>
              </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        <div className="ms-auto col-auto my-3">
          <h2>Precio total: $ {cartTotal}</h2>
        </div>
        <div className="col-auto m-3">
          <button className="btn btn-danger" 
            onClick={() => emptyCart()}
          >Vaciar carrito</button>
          <button className="btn btn-primary m-3">Comprar</button>
        </div>
      </div>
    </section>
  )
}

export default Cart