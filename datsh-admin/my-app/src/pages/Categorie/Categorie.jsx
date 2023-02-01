import { Link, useHistory, useLocation } from "react-router-dom";
import "./categorie.css";
//import Chart from "../../components/chart/Chart"
//import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//import { useMemo } from "react";
//import { useEffect } from "react";
//import { userRequest } from "../../requestMethods";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { updateCategories } from "../../redux/apiCalls";




export default function Categorie() {
    const history=useHistory();
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();
    const categorieId = location.pathname.split("/")[2];
    const categorie = useSelector((state) =>
        state.categorie.categories.find((categorie) => categorie._id === categorieId)
    );
    const handleChange = (e) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = (e, id) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const categorie = { ...inputs, img: downloadURL };
                    updateCategories(id, categorie, dispatch);
                    history.push('/CategorieList');
                });
            }
        );
    };



    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">categorie</h1>
                <Link to="/Newcategorie">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
       
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>categorie title</label>
                        <input type="text" name="title" placeholder={categorie.title} onChange={handleChange} />
                        

                    </div>
                    <div className="productFormLeft">
                        <label>categorie Name</label>
                        <input type="text" name="cat" placeholder={categorie.cat} onChange={handleChange} />


                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={categorie.img} alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" name="img" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                        </div>
                        <button onClick={(e)=>handleClick(e,categorie._id)} className="productButton">Update</button>

                    </div>
                </form>
            </div>
        </div>
    );
}
