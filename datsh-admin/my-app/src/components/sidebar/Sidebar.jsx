import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    ChatBubbleOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRequest } from '../../requestMethods'


export default function Sidebar() {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isRstock, setIsRstock] = useState(false);
    const [isRcomm, setIsRcomm] = useState(false);

    userRequest.post('/auth/me').then(res => {
        const data = res.data
        setIsAdmin(data.isAdmin)
        setIsRstock(data.isRstock)
        setIsRcomm(data.isRcomm)
    }).catch(err => {

        console.log(err)
    });

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        {isAdmin && ! isRcomm && ! isRstock ? (  <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>) : null }
                        
                        {isRstock || isAdmin && ! isRcomm ? (<Link to="/ProductList" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>) : null }

                        {isRcomm || isAdmin && !isRstock ? (<Link to="/orderList" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Orders
                            </li>
                        </Link >) : null}
                        

                        {isRstock || isAdmin && !isRcomm ?  ( <Link to="/CategorieList" className="link">
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Categories
                        </li>
                        </Link>) : null}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Messages</h3>
                    <ul className="sidebarList">
                        <Link to="/ContactList" className="link">
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Contacts
                        </li>
                        </Link>
                    </ul>
                    <ul className="sidebarList">
                        <Link to="/NewsletterList" className="link">
                            <li className="sidebarListItem">
                                <ChatBubbleOutline className="sidebarIcon" />
                                Newsletter
                            </li>
                        </Link>
                    </ul>
                    
                </div>
          
            </div>
        </div>
    );
}
