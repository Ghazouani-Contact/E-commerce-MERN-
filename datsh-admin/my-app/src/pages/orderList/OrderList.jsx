import "./orderList.css";
//import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrders, getOrders } from "../../redux/apiCalls";
import { Link } from "react-router-dom";
//import { confirmAlert } from "react-confirm-alert";
//import "react-confirm-alert/src/react-confirm-alert.css";

export default function OrderList() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    useEffect(() => {
        getOrders(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
        deleteOrders(id, dispatch);
       /* confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => alert("Click Yes")
                },
                {
                    label: "No",
                    onClick: () => alert("Click No")
                }
            ]
        });
        window.confirm("are you sure")*/
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Liste de commande</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">User ID</th>
                        <th className="widgetLgTh">User name</th>
                        <th className="widgetLgTh">Adresse</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh"> Product name</th>
                        <th className="widgetLgTh"></th>
                        <th className="widgetLgTh"></th>
                        

                    </tr>
                    {orders.map((order) => (
                        <tr className="widgetLgTr" key={order.userId}>
                            <td className="widgetLgDate"> {order.userId}</td>
                            <td className="widgetLgUser">
                             <span className="widgetLgName">{order.nom} {order.prenom}</span>
                            </td >
                            <td className="widgetLgDate"> {order.address}</td>
                            <td className="widgetLgAmount">${order.amount}</td>
                            <td className="widgetLgAmount">{order.products[0].title}</td>
                            <td className="widgetLgStatus">
                                <DeleteOutline
                                    className="userListDelete"
                                    onClick={() => handleDelete(order._id)}
                                />
                            </td>
                            <td className="widgetLgStatus">
                                <Link to={"/ViewOrder/" +order._id}>
                                    <button className="productListEdit">Voir</button>
                                </Link>  
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
  /*  const columns = [
      
      
        { field: "userId", headerName: "UserId", width: 200 },
        { field: "address", headerName: "Address", width: 200 },
        { field: "order.products.productId", headerName: "productId", width: 200 },
        { field: "order.products.quantity", headerName: "quantity", width: 200 },

        {
            field: "amount",
            headerName: "amount",
            width: 200,
        },
       
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <> 
                        <Link to={"/ViewOrder/" + params.row._id}>
                            <button className="productListEdit">Voir</button>
                        </Link>                       
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={orders }
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    );*/
}