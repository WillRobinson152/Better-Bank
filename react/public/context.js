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
  // const [header, setHeader] = React.useState(false);

  
  return (<>
    {/* <PublicNav/>
    <PrivateNav/> */}
    <div className={classes()}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>   

    </>
  );    
}

function Nav(props){
//   function PrivateNav(props){
//     return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">BadBank</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#/login/">Logout</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#/deposit/">Deposit</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#/withdraw/">Withdraw</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#/balance/">Balance</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#/alldata/">AllData</a>
//                 </li>          
//               </ul>
//             </div>
//           </nav>)
//   }

//   function PublicNav(props){
//     return(
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">BadBank</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="#/CreateAccount/">Create Account</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#/login/">Login</a>
//             </li>          
//           </ul>
//         </div>
//       </nav>
//     )
//   }

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
                <a className="nav-link" href={navItem.href}>{navItem.txt}</a>
              </li>
            ))}
            {/* <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li>           */}
          </ul>
        </div>
      </nav>

    </>
  );    
}