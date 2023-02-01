import "./widgetSm.css";
//import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import {userRequest} from "../../requestMethods";
import { format } from "timeago.js";

export default function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const getUsers = async () => {
            try{
            const res = await userRequest.get("users/?new=true");
            setUsers(res.data);
        }catch {}
        };
        getUsers();
    },[]);
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map(user=>(
                <li className="widgetSmListItem" key={user._id}>
                    <img
                        src={user.img || 
                            "https://firebasestorage.googleapis.com/v0/b/hygieneplus-d9a17.appspot.com/o/secure%2Fdownload-black-male-user-profile-icon-png-116371332534k5baafcll.png?alt=media&token=40d763ff-83dd-46ef-9f8b-6ba15dafdfeb"}
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername"> {format(user.createdAt)}</span>
                        </div>
                       
                   {/*<button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>*/} 
                </li>
                ))}
            </ul>
        </div>
    );
}
