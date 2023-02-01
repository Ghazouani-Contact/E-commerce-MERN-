import "./viewMessage.css";
import { useSelector } from "react-redux";
import {  useLocation } from "react-router-dom";
export default function WidgetSm() {
    const location = useLocation();
    const contactId = location.pathname.split("/")[2];
    const contact = useSelector((state) =>
        state.contact.contacts.find((contact) => contact._id === contactId)
    );

              
   
    return (
        <div className="product">
            

            <div className="productBottom">
   
                
                    <div className="productFormLeft">
                        <div className="widgetSmList">

                     
                            
                                

                        <h4>    User Name:</h4><p className="text">{contact.username}</p> 
                        <h4>  Email :</h4><p className="text">Email{contact.email}</p>
                        <h4>Phone number:</h4><p className="text">{contact.phone}</p>
                        <h4> Message :</h4><div className="text"> {contact.msg}</div>
                            

                            

                        </div>
                      

                    </div>
                
            </div>
           
        </div>
    );
}
