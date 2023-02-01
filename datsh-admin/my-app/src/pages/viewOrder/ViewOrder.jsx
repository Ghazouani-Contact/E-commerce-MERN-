import "./viewOrder.css";
import { useSelector } from "react-redux";
import {  useLocation } from "react-router-dom";
import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
export default function WidgetSm() {
    const location = useLocation();
    const orderId = location.pathname.split("/")[2];
    const order = useSelector((state) =>
                   state.order.orders.find((order) => order._id === orderId)
    );
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
   
    return (
        <div className="product">
            
            <button onClick={handlePrint} className="print__button">  Print </button>
            <div className="productBottom" ref={componentRef}>
   
                
                    <div className="productFormLeft">
                        <ul className="widgetSmList">

                     
                            <ul>
                           

                            <li>UserId: {order.userId} </li>
                            <li>Address:{order.address}</li>
                            <li>Amount: {order.amount} </li>
                            <li>Number: {order.number} </li>
                            <li>Nom:    {order.nom}    </li>
                            <li>Prenom: {order.prenom} </li>
                            ---------------Products---------------------
                            </ul>
                            <ul>
                            {order.products.map((product, index) => {
                                
                                return (
                                <li key={index}>
                            <li >title: {product.title} </li>
                            <li >price: {product.price} </li>
                            <li >quantity: {product.quantity} </li>
                            <li >totale price: {product.quantity * product.price}</li>
                                </li>
                                );
                            })}
                             <li >total: {order.amount} </li>

                            </ul>

                           
                          
                            

                           

                        </ul>
                      

                    </div>
                
            </div>
           
        </div>
    );
}
