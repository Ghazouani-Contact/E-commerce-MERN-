import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
//import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser,getUsers } from "../../redux/apiCalls";
import { Link } from "react-router-dom";


export default function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
        deleteUser(id, dispatch);

        confirmAlert({
            title: "Confirm to submit",
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
    };
      
    
    const columns = [
      /*  { field: "_id", headerName: "ID", width: 220 },*/
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        { field: "adress", headerName: "Adress", width: 200 },
        { field: "phone", headerName: "Phone", width: 120 },
        
        {
            field: "createdAt",
            headerName: "Date",
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                    { /*  <Link to={"/user/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>*/}
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
            <div>
                <Link to="/newUser">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <DataGrid
                rows={users}
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
