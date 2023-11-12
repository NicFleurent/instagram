import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';



import './Profil.css';

function Profil(props) {
    const [publi, setPubli] = useState([]);

    useEffect(() => {
        setPubli(props.publi);
    }, [])
    

    return (
      <div className="container-fluid text-start ps-2 pt-4">
        <div className="row">
            <div className="offset-xl-3 col-xl-7 mt-3 border-bottom pb-3">
                <div className="row">
                    <div className="col-xl-4 text-center">
                        <img src={publi[0] && publi[0].userPhoto} width="160px" height="160px" className="rounded-circle me-2" />
                    </div>
                    <div className="col-xl-8">
                        <div className='row'>
                            <div className='col-xl-3 mt-3'>
                                <span className='m-3'>{publi[0] && publi[0].user}</span>
                            </div>
                            <div className='col-xl-4 mt-3'>
                                <span className='m-3 p-2' id='btnModifProfil'>Modifier profil</span>
                            </div>
                            <div className='col-xl-2 ms-3 ps-0 mt-3'>
                                <FontAwesomeIcon className='ms-3' icon={faGear} />
                            </div>                            
                        </div>
                        <div className='row mt-4'>
                            <div className='col-xl-3'>
                                <span className='ms-3'>0 Publications</span>
                            </div>
                            <div className='col-xl-3'>
                                <span className='ms-3'>21 followers</span>
                            </div>
                            <div className='col-xl-3'>
                                <span className='ms-3'>4 suivi(e)s</span>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col'>
                                <b className='ms-3'>Nicolas Fleurent</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="offset-xl-3 col-xl-7 mt-3 pb-3">
                <div className='row'>
                    <div className='col text-center'>
                        {publi.map((pub) => (
                            <img src={pub.photo} width="200px" height="200px" className="m-2"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Profil;