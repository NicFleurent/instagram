import SectionStory from './SectionStory';
import Publication from './Publication';
import Suggestion from './Suggestion';

import './mur.css'

function Mur(props) {

    const [publi]= [props.publi];

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='offset-xl-4 col-xl-4'>
            <SectionStory/>
            {publi.map((pub) => (
              <Publication 
                userPhoto={pub.userPhoto}
                user={pub.user}
                delaisPost={pub.delaisPost}
                ville={pub.ville}
                photo={pub.photo}
                aimeParPhoto={pub.aimeParPhoto}
                aimePar={pub.aimePar}
                nbrAutreLike={pub.nbrAutreLike}
                description={pub.description}
                nbrComm={pub.nbrComm}
                userComm1={pub.userComm1}
                comm1={pub.comm1}
                userComm2={pub.userComm2}
                comm2={pub.comm2}
              />
            ))}
          </div>
          <div className='offset-xl-1 col-xl-2'>
            <Suggestion />
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Mur;