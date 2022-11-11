function Main(){
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Soliv.Code</h3>
            </div>

            <div className="item-menu">
              <a href="1">Login</a>
            </div>
          </div>

          <div className="form">
          <h2>Entre em contato</h2>
            <form>
              
              <div className="items-form">
                <input placeholder="Preencha o campo" type="text"></input>
                <input placeholder="Preencha o campo" type="text"></input>
                <input placeholder="Preencha o campo" type="text"></input>
                <input placeholder="Preencha o campo" type="text"></input>

                <input type="submit"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Main;