import React, { useState, useEffect } from 'react'
import Repos from "./components/Repos";
import Profile from "./components/Profile";
import { MdSearch, MdStar, MdFolder, MdAccountBox } from 'react-icons/md';

function App({ match }) {
  const [nameUser, setNameUser] = useState("");
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null)

  useEffect(() => {
    if (match.params.idPesquisa) {
      setNameUser(match.params.idPesquisa);
      let tempPages = [<Repos type="repos" nameUser={match.params.idPesquisa} />, <Profile nameUser={match.params.idPesquisa} />, <Repos type="starred" nameUser={match.params.idPesquisa} />];
      setCurrentPage(tempPages[1])
      setPages(tempPages)
    }
  }, [match.params.idPesquisa]);



  function handleSubmit(e) {
    e.preventDefault();
    let tempPages = [<Repos type="repos" nameUser={nameUser} />, <Profile nameUser={nameUser} />, <Repos type="starred" nameUser={nameUser} />];
    setCurrentPage(tempPages[1])
    setPages(tempPages)
  }

  function changeRepo() {
    setCurrentPage(pages[0]);
  }

  function changeProfile() {
    setCurrentPage(pages[1]);
  }

  function changeStarred() {
    setCurrentPage(pages[2]);
  }

  return (
    <div className="App container">
      <div className="row">
        <form className="col s12" onSubmit={e => handleSubmit(e)}>
          <div className="row valign-wrapper">
            <div className="input-field col s6">
              <input type="text" id="icon_prefix2" className="materialize-textarea" onChange={e => setNameUser(e.target.value)} />
              <label htmlFor="icon_prefix2">Pesquisar <MdSearch size={20} /></label>
            </div>
            <div className="col s6 valign-wrapper">
              <button className="btn waves-effect waves-light" type="submit" name="action"  >
                Pesquisar
                <MdSearch size={20} />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="div_around_buttons">
            <button className="waves-effect waves-light btn botoes_inicial deep-orange darken-1" onClick={changeRepo}><MdFolder size={20} />Repositórios</button>
            <button className="waves-effect waves-light btn botoes_inicial  teal darken-3" onClick={changeProfile}><MdAccountBox size={20} />Perfil</button>
            <button className="waves-effect waves-light btn botoes_inicial red darken-4" onClick={changeStarred}><MdStar size={20} />Repositórios estrelados</button>
          </div>
        </div>
      </div>
      <div className="row">
        {currentPage}
      </div>
    </div>
  );
}

export default App;