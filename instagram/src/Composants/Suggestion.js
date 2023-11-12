import SuggestionCompte from './SuggestionCompte';

import "./Suggestion.css"

function Suggestion() {
    return (
      <div className="container-fluid mt-5 d-none d-xl-block">
        <div className="row">
            <div className="col-9 text-start p-0"><img src="/img/pp/moi.png" width="60px" height="60px" className="rounded-circle imgProfil me-2" />
            <b>nicFleurent_09</b><br/><span className="text-secondary">Nicolas Fleurent</span></div>
            <div className="col-3 text-end text-primary p-0 pt-3">Basculer</div>
        </div>
        <div className="row mt-2">
            <div className="col-8 text-start ps-0"><span className="text-secondary">Suggestion pour vous</span></div>
            <div className="col-4 text-end pe-0">Voir tout</div>
        </div>
        <SuggestionCompte
          photo="/img/pp/carlsen.webp"
          nom="soonToBe_ex..."
        />
        <SuggestionCompte
          photo="/img/pp/watson.jpg"
          nom="hermione_granger"
        />
        <SuggestionCompte
          photo="/img/pp/oda.jpg"
          nom="odaTheGOAT"
        />
        <SuggestionCompte
          photo="/img/pp/juicy_fruit.png"
          nom="juicy_fruit_la_..."
        />
        <div className="row mt-3">
            <div className="col text-start text-secondary ps-0 smalltext">
              À propos Aide Presse API Emplois Confidentialité Conditions Lieux Langue Français Meta Verified
            </div>
        </div>
        <div className="row mt-3">
            <div className="col text-start text-secondary ps-0 smalltext">
              2023 instagram par Nicolas Fleurent
            </div>
        </div>
      </div>
    );
  }
  
  export default Suggestion;