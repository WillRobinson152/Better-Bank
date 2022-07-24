function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const currentUser = React.useContext(UserContext);

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow}/>}
    />
  )

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [amount, setAmount] = React.useState('');
  // const ctx = React.useContext(UserContext);  

  // function handle(){
  //   console.log(email,amount);
  //   const user = ctx.users.find((user) => user.email == email);
  //   if (!user) {
  //     props.setStatus('fail!')      
  //     return;      
  //   }

  //   user.balance = user.balance - Number(amount);
  //   console.log(user);
  //   props.setStatus('');      
  //   props.setShow(false);
  // }

  function handle() {
    const url = `/account/withdraw/${currentUser.user.email}/${amount}`;
    (async () => {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
    })();
    props.setShow(false);
    currentUser.user.balance = Number(currentUser.user.balance) - Number(amount);
  }


  return(<>
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
}