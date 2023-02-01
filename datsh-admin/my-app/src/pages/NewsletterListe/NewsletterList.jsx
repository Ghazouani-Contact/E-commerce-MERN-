import "./newsletterList.css";
//import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsletters, getNewsletters } from "../../redux/apiCalls";
 
export default function NewsletterList() {
    
    const dispatch = useDispatch();
    const newsletters = useSelector((state) => state.newsletter.newsletters);
    useEffect(() => {
        getNewsletters(dispatch);
    }, [dispatch]); 
    const handleDelete = (id) => {
        deleteNewsletters(id, dispatch);
        
        let confirmAction = window.confirm("Are you sure to execute this action?");
        if (confirmAction) {
            alert("Action successfully executed");
        } else {
            alert("Action canceled");
        }
    };
    


    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Liste de commande</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">User ID</th>
                        <th className="widgetLgTh">Email</th>

                    </tr>
                    {newsletters.map((newsletter) => (
                        <tr className="widgetLgTr" key={newsletter._id} >
                           
                            <td className="widgetLgDate"> {newsletter._id}</td>
                            <td className="widgetLgDate"> {newsletter.email}</td>
                            <td className="widgetLgStatus">
                                <DeleteOutline
                                    className="userListDelete"
                                    onClick={() => handleDelete(newsletter._id)}
                                     

                                />
                            </td>
                            
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
   
}