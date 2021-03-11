import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
const Home = () => {
    const [teams, setTeams] = useState([]);
    const history = useHistory();
    useEffect( () => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    
    const handleTeamDetails = (teamId) => {
        const url = `/details/${teamId}`;
        history.push(url);
    }

    return (
        <div className="container">
            <div className="row"> 
                <div className = "col-md-12">
                    <div className="banner-img d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="text-white">Premier League Tracker</h1>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="row mt-3 mb-5 text-center">
                {
                    teams.map(team => {
                        return(
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
                                <div className="league-card rounded">
                                    <img src={team.strTeamBadge} className="img-fluid w-50" alt=""/>
                                    <div className="pt-3">
                                        <h4>{team.strTeam}</h4>
                                        <p>Sports Type : {team.strSport}</p>
                                        <button onClick={() => handleTeamDetails(team.idTeam)} className="btn btn-info">Explore</button>
                                    </div> 
                                </div>    
                            </div>     
                        )
                        
                    })
                }
            </div>
        </div>
    );
};

export default Home;