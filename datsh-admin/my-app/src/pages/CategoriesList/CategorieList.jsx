import "./categoriesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategories, getCategories } from "../../redux/apiCalls";


export default function CategorieList() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categorie.categories);

    useEffect(() => {
        getCategories(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => { 
        deleteCategories(id, dispatch);
    };
  
    const columns = [
       
          { field: "_id", headerName: "ID", width: 300 },
        { field: "cat", headerName: "Categories", width: 300 },
        { field: "title", headerName: "Title", width: 300 },
        {
            field: "img",
            headerName: "Image",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                    </div>
                );
            },
        },

        
        {
            field: "action",
            headerName: "Action",
            width: 300,
            renderCell: (params) => {
                return (
                   
                    <>
                        <Link to={"/Categorie/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
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
            <div>
                <Link to="/Newcategorie">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <DataGrid
                rows={categories}
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
