function SuggestionCompte(props) {
    return (
      <div className="container-fluid p-0">
        <div className="row">
            <div className="col-9 text-start p-0 mt-3"><img src={props.photo} width="50px" height="50px" className="rounded-circle imgProfil me-2" />
            <b>{props.nom}</b><br/><span className="text-secondary">Vous suit</span></div>
            <div className="col-3 text-end text-primary p-0 pt-3">Suivre</div>
        </div>
      </div>
    );
  }
  
  export default SuggestionCompte;