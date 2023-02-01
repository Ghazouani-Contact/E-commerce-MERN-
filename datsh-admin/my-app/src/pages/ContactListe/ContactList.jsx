import "./contactList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContacts, getContacts } from "../../redux/apiCalls";


export default function ContactList() {
    const dispatch = useDispatch();
    const Contacts = useSelector((state) => state.contact.contacts);

    useEffect(() => {
        getContacts(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
        deleteContacts(id, dispatch);
    };


    const columns = [

        { field: "username", headerName: "username", width: 200 },
        { field: "email", headerName: "email", width: 200 },
        { field: "phone", headerName: "phone", width: 200 },
        { field: "msg", headerName: "message", width: 200 },

        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/ViewMessage/" + params.row._id}>
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
                rows={Contacts}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    );
}