function Story(props) {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <img src={props.photo} width="65px" height="65px" className="rounded-circle me-2" />
                <br/><span className="text-secondary">{props.user}</span>
            </div>
        </div>
    </div>
  );
}

export default Story;