import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons"


const TeamDetails = () => {
    const {teamId} = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    },[teamId])
    const {
        strTeam, 
        intFormedYear, 
        strCountry, 
        strSport, 
        strGender, 
        strDescriptionEN, 
        strTeamBadge, 
        strTeamFanart3, 
        strTeamFanart4,
        strTeamBanner,
        strTwitter,
        strFacebook,
        strYoutube
    } = teamDetails;
    
    return (
        <div className="container">
            <div className="row bg-dark text-white">

                <div className="col-md-12 m-0 p-0 mb-3">   
                    <img src={strTeamBanner} className="banner-image" alt=""/>
                    
                    <div className="d-flex align-items-center justify-content-around logo-position">
                        <img src={strTeamBadge} className="team-logo rounded" alt=""/>
                    </div>
                </div>
                
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <div>
                        <h2>{strTeam}</h2>
                        <p><b>Founded : </b>{intFormedYear}</p>
                        <p><b>Country : </b>{strCountry}</p>
                        <p><b>Sport Type : </b>{strSport}</p>
                        <p><b>Gender : </b>{strGender}</p>
                        
                    </div>
                </div>  
                <div className="col-md-7">
                    <div>
                        {
                          strGender=="Male" ? 
                          <img src={strTeamFanart3} className="img-fluid rounded" alt=""/> : 
                          <img src={strTeamFanart4} className="img-fluid rounded" alt=""/>  
                        }  
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-12 mt-3">
                    <p className="text-justify">
                        {strDescriptionEN}
                    </p>
                </div>

                <div className="col-md-12 mt-3 d-flex justify-content-around align-items-around mb-3">
                    <div>
                        <a href={`https://${strTwitter}`} target="_blanc">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                        </a>
                    </div>
                    <div>
                        <a href={`https://${strFacebook}`} target="_blanc">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>  
                    </div>
                    <div>
                    <a href={`https://${strYoutube}`} target="_blanc">
                        <FontAwesomeIcon icon={faYoutube} size="2x"/>
                    </a>
                    </div>
                </div>
                <div className="col-md-12 mt-3 d-flex justify-content-around align-items-around mb-3">
                    <a href={"/"} role="button" className="btn btn-success">Back to Home</a>
                </div>
            </div>
    
        </div>
    );
};

export default TeamDetails;