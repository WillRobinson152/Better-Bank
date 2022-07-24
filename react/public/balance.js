function Balance(){
  const currentUser = React.useContext(UserContext);
  return (
    <Card
      bgcolor="info"
      header="Balance"
      body={<BalanceMsg/>}
    />
  )


function BalanceMsg(props){
  return(<>
    <h1>{currentUser.user.name}</h1><br/>
    <h5>Your balance is:</h5><br/>
    <h3>${currentUser.user.balance}</h3><br/>    
  </>);
}

function BalanceForm(props){
  // const [email, setEmail]   = React.useState('');
  const currentUser = React.useContext(UserContext);
  let email = currentUser.user;

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
    // globalEmail = email;

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

    Email: {currentUser.user}<br/>
    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}
}
