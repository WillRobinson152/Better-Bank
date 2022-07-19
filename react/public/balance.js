let globalEmail = '';
let globalBalance = 0;

function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Your balance is:</h5><br/>
    <h3>${globalBalance}</h3><br/>    
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  // const [balance, setBalance] = React.useState('');  
  // const ctx = React.useContext(UserContext);  

  // function handle(){
  //   const user = ctx.users.find((user) => user.email == email);
  //   if (!user) {
  //     props.setStatus('fail!')      
  //     return;      
  //   }

  //   setBalance(user.balance);
  //   console.log(user);
  //   props.setStatus('Your balance is: ' + user.balance);      
  //   props.setShow(false);
  // }

  function handle() {
    console.log(email);
    globalEmail = email;
    const url = `/account/balance/${email}`;
    (async () => {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.balance);
      globalBalance = data.balance;
      props.setShow(false);
    })();
    
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}