import EntetePublication from "./EntetePublication";
import ZoneCommentaire from "./ZoneCommentaire";

import './Publication.css';

function Publication(props) {
    return (
      <div className="ps-xl-5 ms-xl-5">
        <EntetePublication
          userPhoto={props.userPhoto}
          user={props.user}
          delaisPost={props.delaisPost}
          ville={props.ville}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0 mt-3">
              <img className="img-fluid rounded-1 imgPublication" src={props.photo} />
            </div>
          </div>
        </div>
        <ZoneCommentaire
          aimeParPhoto={props.aimeParPhoto}
          aimePar={props.aimePar}
          nbrAutreLike={props.nbrAutreLike}
          description={props.description}
          nbrComm={props.nbrComm}
          userComm1={props.userComm1}
          comm1={props.comm1}
          userComm2={props.userComm2}
          comm2={props.comm2}
        />
      </div>
      
    );
  }
  
  export default Publication;