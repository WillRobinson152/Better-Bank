function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const currentUser         = React.useContext(UserContext);
  const [header, setHeader] = React.useState(false);

  function PrivateNav(){
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#/login/">Logout</a>
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

  function LoginMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>
          Log Out
      </button>
    </>);
  }
  
  function LoginForm(props){
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');

  
    // const ctx = React.useContext(UserContext);  
  
    // function handle(){
    //   const user = ctx.users.find((user) => user.email == email);
    //   console.log(user);
    //   console.log(email, password);
    //   if (!user) {
    //     console.log('one')      
    //     props.setStatus('fail!')      
    //     return;      
    //   }
    //   if (user.password == password) {
    //     console.log('two')            
    //     props.setStatus('');
    //     props.setShow(false);
    //     return;      
    //   }
    //   console.log('three')          
    //   props.setStatus('fail!');        
    // }
  
    function handle() {
      console.log(email, password);
      const url = `/account/login/${email}/${password}`;
      (async () => {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        if (data.length === 0){
          console.log('Incorrect email or password');
          props.setStatus('fail!');
          return;
        }
        props.setStatus('');
        props.setShow(false);
        setHeader(true);
      })();
      
    }
  
    return (<>
  
      Email<br/>
      <h1>{currentUser.user.email}</h1><br/>
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
  
      <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
     
    </>);
  }

  return (
    <Card
      bgcolor="secondary"
      header={show ? 
        <PublicNav setHeader={setHeader}/> : 
        <PrivateNav setHeader={setHeader}/>}
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

