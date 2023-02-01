/* eslint-disable jsx-a11y/iframe-has-title */
import "./contact.css";
//import { mobile } from "../../responsive";
//import styled from "styled-components";
import {toast} from 'react-toastify'
import Announcement from "../../Components/Announcement";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  userRequest } from "../../requestMethods";

export default function Contact() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await userRequest.post("/contacts", {
                username,
                email,
                phone,
                msg,
            });
           
            res.data && toast('Votre message a été envoyé :)', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            window.setTimeout(function () {
                window.location.replace("");
            }, 3000);
           //  window.location.replace("");
       // window.confirm('Confirmez votre commande');
           
           
        } catch (err) {
            console.log(err);
            toast("Quelque chose s'est mal passé", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
   

    return (

        <div className="Container" >
            <Announcement />
            
                <Link to="/">
                <div className="MenuItem" > Home Page</div>
                </Link>
   
            <div className="Wrapper">
                <div className="Left">
                  
                    <h2>HygienePlus </h2>
                    <h4> La société Hygiene Plus®  sarl  connue sous l'appelation Hygiene Plus- BIOCIDE  est une entreprise industrielle d’AGROCHIMIE (API 200604), son siège social est basé à Tunis depuis Avril 2006 .

                        Hygiene Plus® a pour mission la formulation  des produits de lutte anti-nuisibles (raticides,insecticides et désinfectants).

                        Nos produits phares sont CracK Rodent® Plus et CracK Rodent® sont homologués à usage de l’ hygiène publique par le Ministère de la Santé

                        Nos marques Déposées :  Société Hygiene Plus® , CracK® et CracK Rodent®  à l'échelle internationale.</h4>
                    <h2>Contact</h2>
                    <h4>
                        HYGIENE PLUS   s.a.r.l.
                        14 bis rue Ibn Abi Rahal
                        Cite Olympique 1003
                        Tunis - TUNISIE
                    </h4>

                    <h4>tel: (+216) 71.806.367  <br />    52.806.367 <br /> fax : (+216) 71.806.410</h4>  

                  
                    <h4> hygieneplus.tunisia@gmail.com       </h4>
             
                    
                </div>
                <div className="Center">

                    <div className="contact-box">

                        <div className="right">
                            <h2>Contact Us</h2>
                            <input type="text" className="field" placeholder="Your Name" onChange={(e) => setUsername(e.target.value)}  />
                            <input type="text" className="field" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" className="field" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
                            <textarea placeholder="Message" className="field" onChange={(e) => setMsg(e.target.value)}></textarea>
                            <button className="btn"onClick={handleSubmit}>Send</button>
                        </div>
                    </div>

                </div>
                <div className="Right">
              <div>
                   <iframe width="367" height="512" id="gmap_canvas" src="https://maps.google.com/maps?q=14%20bis%20rue%20Ibn%20Abi%20Rahal%20Cite%20Olympique%201003%20%20Tunis%20-%20TUNISIE&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
    </div>
                </div>
            </div>
        </div>

    );
}
