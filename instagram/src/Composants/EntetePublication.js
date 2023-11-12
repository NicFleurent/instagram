import './EntetePublication.css';

function EntetePublication(props) {
  return (
    <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-11 text-start p-0">
              <img src={props.userPhoto} width="50px" height="50px" className="rounded-circle imgProfil me-2" />
              <span className="text-secondary"> <b>{props.user}</b> · {props.delaisPost}</span><br /> {props.ville}
            </div>
            <div className="col-1 text-end troisPoint p-0">···</div>
        </div>
    </div>
  );
}

export default EntetePublication;