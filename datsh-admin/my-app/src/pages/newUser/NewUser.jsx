import "./newUser.css";
import { useState } from "react";
import { publicRequest } from "../../requestMethods";
export default function NewUser() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isAdmin, setIsadmin] = useState("");
    const [isRstock, setIsRstock] = useState("");
    const [isRcomm, setIsRcomm] = useState("");

    const [select, setSelect] = useState("");
    const [error, setError] = useState(false);
    console.log(setSelect)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await publicRequest.post("/auth/register", {

                username,
                email,
                phone,
                password,
                isAdmin,
                isRstock,
                isRcomm
                

            });
            res.data && window.location.replace("/users");
            window.confirm('Confirmez votre commande');

        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="foulen" onChange={(e) => setUsername(e.target.value)} />
                </div>
                
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="foulen@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+216 123 456 78" onChange={(e) => setPhone(e.target.value)} />
                </div>
               
              
                <div className="newUserItem">
                    <label>Admin</label>
                    
                    <select className="newUserSelect" value={select} onChange={(e) => setSelect(e.target.value)}>
                        <option value="isAdmin">isAdmin</option>
                        <option value="isRstock">isRstock</option>
                        <option value="isRstock">isRcomm</option>
                    </select>
                </div>
                <button onClick={handleSubmit} className="newUserButton">Create</button>
            </form>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}

        </div>
    );
}
