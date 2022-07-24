function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const currentUser         = React.useContext(UserContext);  

  function LoginMsg(props){
    console.log(currentUser.user);
    return(<>
      <h1>Success: {currentUser.user.email} is logged in</h1>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {window.location.href="#"; window.location.reload(true)}}>Go to bank</button><br/>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true); (async () => {
          await fetch("/account/current/nonuser");
          })();
          window.location.href="#"; window.location.reload(true)}
          }>
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
      currentUser.user = {email, password};
      console.log(email, password);
      const url = `/account/login/${email}/${password}`;
      const url2 = "/account/current/user"; 
      (async () => {
        let res = await fetch(url);
        let data = await res.json();
        if (data.length === 0){
          console.log('Incorrect email or password');
          props.setStatus('fail!');
          return;
        }
        props.setStatus('');
        props.setShow(false);
        // currentUser.user.name = data[0].name;
        // currentUser.user.email = data[0].email;
        // currentUser.user.password = data[0].password;
        // currentUser.user.balance = data[0].balance;
      })();
      (async () => {
        let res = await fetch(url2);
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

  return (<>
    <Card
      bgcolor="secondary"
      header="Log in"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
    </>
  ) 
}

