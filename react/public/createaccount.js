function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const currentUser         = React.useContext(UserContext);

  function CreateMsg(props){
    
    return(<>
      <h5>Success</h5><br/>
      <h3>{currentUser.user.email}</h3>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>Add another account</button>
    </>);
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
      console.log('currentUser', currentUser)
      console.log(name, email, password);
      currentUser.user = {name,email,password,balance:0};
      const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
      })();
      props.setShow(false);
      console.log('current user...', currentUser)
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
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}



