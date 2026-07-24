import './OurTeamAbout.css';
import React from "react";
import pic_doudou from "../Images/pic_about_doudou2.png";
import pic_freddy from "../Images/pic_about_antony";
import pic_profil from "../Images/pic_about_mike";
import pic_chloe from "../Images/pic_about_chloe";


function OurTeamAbout() {
    return (
        <div className="Container-OurTeam">

            <h1>Our Team</h1>

            <div className="Container-OurTeam-details" style={{backgroundColor:"#f7f5f0"}}>
                <div className="box-ourTeam">
                    <img src={pic_doudou} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#2175d9 "}}>
                        Nathalie Mataly Fili
                    </p>
                    <p>CEO – Directeur Général</p>
                </div>
                <div className="box-ourTeam">
                    <img src={pic_freddy} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#2175d9 "}}>
                        Freddy
                    </p>
                    <p>CEO – Directeur Général</p>
                </div>
                <div className="box-ourTeam">
                    <img src={pic_profil} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#2175d9 "}}>
                        Michael Ilunga
                    </p>
                    <p>Responsable Branding</p>
                </div>
                <div className="box-ourTeam1">
                    <img src={pic_chloe} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#2175d9 "}}>
                        Chloé Le Bot
                    </p>
                    <p>Chargé des Relations Internationales</p>
                </div>
            </div>
        </div>
    );
}

export default OurTeamAbout;