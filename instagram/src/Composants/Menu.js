import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faClapperboard, faBars } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faPaperPlane, faCompass, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

import './Menu.css';

function Menu() {
    return (
      <>
        <div className="container-fluid text-start ps-2 pt-4 border-end h-100 d-none d-xl-block">
          <div className='container-fluid m-0 p-0 heightManu'>

            <div className="row">
              <div className="col p-3">
                <Link to="/"><img src="/img/logoText.jpg" width="110px"/></Link>
              </div>
            </div>

            <Link to="/" className='sansLigne'>
              <div className="row hoverGris me-1">
                <div className="col-2 p-3">
                  <FontAwesomeIcon icon={faHouse} size="lg" />
                </div>
                <div className="col-10 p-3">
                  <b>Accueil</b>
                </div>
              </div>
            </Link>
            
            <div className="row hoverGris me-1">
              <div className="col-2 p-3">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </div>
              <div className="col-10 p-3">
                <span>Recherche</span>
              </div>
            </div>

            <div className="row hoverGris me-1">
              <div className="col-2 p-3">
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </div>
              <div className="col-10 p-3">
                <span>Découvrir</span>
              </div>
            </div>

            <div className="row hoverGris me-1">
              <div className="col-2 p-3">
                <FontAwesomeIcon icon={faClapperboard} size="lg" />
              </div>
              <div className="col-10 p-3">
                <span>Reels</span>
              </div>
            </div>

            <Link to="/message" className='sansLigne'>
              <div className="row hoverGris me-1">
                <div className="col-2 p-3">
                  <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                </div>
                <div className="col-10 p-3">
                  <span>Messages</span>
                </div>
              </div>
            </Link>
            
            <div className="row hoverGris me-1">
              <div className="col-2 p-3">
                <FontAwesomeIcon icon={faHeart} size="lg" />
              </div>
              <div className="col-10 p-3">
                <span>Notifications</span>
              </div>
            </div>

            <div className="row hoverGris me-1">
              <div className="col-2 p-3">
              <FontAwesomeIcon icon={faSquarePlus} size="lg" />
              </div>
              <div className="col-10 p-3">
                <span>Créer</span>
              </div>
            </div>

            <Link to="/profil" className='sansLigne'>
              <div className="row hoverGris me-1">
                <div className="col-2 p-3">
                  <img src="/img/pp/moi.png" width="25px" height="25px" className="rounded-circle imgProfil" />
                </div>
                <div className="col-10 p-3">
                  <span>Profil</span>
                </div>
              </div>
            </Link>
            
          </div>

          <div className="row hoverGris me-1" id='menuPlus'>
            <div className="col-2 p-3">
              <FontAwesomeIcon icon={faBars} size="xl" />
            </div>
            <div className="col-10 p-3">
              <span>Plus</span>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center ps-2 pt-4 border-end h-100 d-xl-none d-block">
          <div className='row'>
            <div className='col'>
              <Link to="/" className='sansLigne'>
                <FontAwesomeIcon icon={faHouse} size="xxl" />
              </Link>

              <Link to="/message" className='sansLigne ms-3'>
                <FontAwesomeIcon icon={faPaperPlane} size="xxl" />
              </Link>

              <Link to="/profil" className='sansLigne'>
                <img src="/img/pp/moi.png" width="25px" height="25px" className="rounded-circle ms-3" />
              </Link>
            </div>
          </div>
        </div>
      </>
      
    );
  }
  
  export default Menu;