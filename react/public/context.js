const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);


function Card(props){
  function classes(){
     
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }
  
  return (<>
    <div className="container" style={{padding: "20px"}}>
    <div className={classes()}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>   
    </div>
    </>
  );    
}

function Nav(props){
  return (  
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {props.brand && (<a className="navbar-brand" href="#">{props.brand}</a>)}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {props.navItems.map(navItem => (
              <li className="nav-item">
                <a className="nav-link" href={navItem.href} onClick={navItem.onclick}>{navItem.txt}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </>
  );    
}