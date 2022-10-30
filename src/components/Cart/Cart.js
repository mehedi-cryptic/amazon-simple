import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total, prd)=> total+prd.price,0);

    let shipping=0;
    if(total>100){
        shipping=0;
    }
    else if (total>55){
        shipping=3.88;
    }
    else if(total>0){
        shipping=4.99;
    }

    const tax=(total/10).toFixed(2);
    const subtotal= (total +shipping + Number(tax)).toFixed(2);
    const formatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Orderd:{cart.length} </p>
            <p>Product price: ${formatNumber (total)}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p><small>Tax: ${tax}</small></p>
            <p>Total Price: $ {formatNumber (total +shipping + Number(tax))} </p>
        </div>
    );
};

export default Cart;