import React from "react";



function Product1() {
    return (
      <div className="product">
        <img src="/img/BibliotecadelaMedianoche.jpg" alt="La Bibliote
        ca de la Medianoche" />
        <h2 class="product-name">BibliotecadelaMedianoche</h2> <p class="product-price">$39.750</p> 
        
        <button class="buy-button" onclick="comprarProducto()">Comprar</button>
      
      </div>
)
}

export default Product1;