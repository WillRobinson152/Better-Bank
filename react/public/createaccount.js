function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const currentUser         = React.useContext(UserContext);
  const [header, setHeader] = React.useState(false);

  function CreateMsg(props){
    
    return(<>
      <h5>Success</h5><br/>
      <h3>{currentUser.user.email}</h3>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>Add another account</button>
    </>);
  }

  function PrivateNav(){
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#/login/">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/deposit/">Deposit</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/withdraw/">Withdraw</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/balance/">Balance</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/alldata/">AllData</a>
                </li>          
              </ul>
            </div>
          </nav>)
  }

  function PublicNav(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li>          
          </ul>
        </div>
      </nav>
    )
  }

  function CreateForm(props){
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    
    // const [balance, setBalance]   = React.useState(0);
    // original
    // const ctx = React.useContext(UserContext);  
    // function handle(){
    //   console.log(name,email,password);
    //   ctx.users.push({name,email,password,balance});
    //   props.setShow(false);
    // }    
  
    function handle() {
      currentUser.user = {name,email,password,balance:0};
      currentUser.login = true;
      setHeader(true);
      const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
        let res = await fetch(url);
        let data = await res.json();
      })();
      props.setShow(false);
      
    }
  
    return (<>
      Name<br/>
      <h1>{currentUser.user.email}</h1><br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter name" 
        value={name} 
        onChange={e => setName(e.currentTarget.value)} /><br/>
  
      Email address<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>Create Account</button>
  
    </>);
  }

  return (
    <Card
      bgcolor="primary"
      header={show ? 
        <PublicNav setHeader={setHeader}/> : 
        <PrivateNav setHeader={setHeader}/>}
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}



