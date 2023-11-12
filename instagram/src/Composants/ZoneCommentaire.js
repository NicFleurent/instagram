import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';

import './ZoneCommentaire.css';

function ZoneCommentaire(props) {
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-11 text-start p-0">
                    <FontAwesomeIcon icon={faHeart} size='xl' className='me-2 iconeClickable' />
                    <FontAwesomeIcon icon={faComment} size='xl' className='mx-2 iconeClickable' />
                    <FontAwesomeIcon icon={faPaperPlane} size='xl' className='mx-2 iconeClickable' />
                </div>
                <div className="col-1 text-end p-0">
                    <FontAwesomeIcon icon={faBookmark} size="xl" className='iconeClickable' />
                </div>
            </div>
            <div className='row'>
                <div className='col text-start mt-3 ps-0'>
                    <img src={props.aimeParPhoto} width="14px" height="14px" className="rounded-circle me-2" /> 
                     Aimé par <b>{props.aimePar}</b> et <b>{props.nbrAutreLike} autres personnes</b>
                </div>
            </div>
            <div className='row'>
                <div className='col text-start ps-0'>
                     <b>{props.user}</b> {props.description} <br />
                     <span className="text-secondary">
                        plus <br />
                    </span>
                </div>
            </div>
            <div className='row'>
                <div className='col text-start ps-0'>
                     <span className="text-secondary">
                        Afficher les {props.nbrComm} commentaires
                    </span>
                </div>
            </div>
            <div className='row'>
                <div className='col-11 text-start ps-0'>
                    <b>{props.userComm1}</b> {props.comm1}
                </div>
                <div className='col-1 text-secondary text-end pe-0'>
                    <FontAwesomeIcon icon={faHeart} size='sm' className='iconeClickable' />
                </div>
            </div>
            <div className='row'>
                <div className='col-11 text-start ps-0'>
                    <b>{props.userComm2}</b> {props.comm2}
                </div>
                <div className='col-1 text-secondary text-end pe-0'>
                    <FontAwesomeIcon icon={faHeart} size='sm' className='iconeClickable' />
                </div>
            </div>
            <div className='row border-bottom'>
                <div className='col-11 text-start ps-0'>
                <textarea placeholder="Ajouter un commentaire..." id='ecrireComm'></textarea>
                </div>
                <div className='col-1 text-secondary text-end pe-0'>
                    <FontAwesomeIcon icon={faFaceSmile} size='sm' className='iconeClickable' />
                </div>
            </div>
        </div>
    );
  }
  
  export default ZoneCommentaire;