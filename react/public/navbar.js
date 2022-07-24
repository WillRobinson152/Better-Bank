function NavBar(){
  const publicNav           = [{href:"#/CreateAccount/", txt:"Create Account", onclick:()=>{}},
                               {href:"#/Login/", txt:"Log in", onclick:()=>{}}] 
  const privateNav          = [{href:"#", txt:"Log out", onclick:() => {fetch("/account/current/nouser/-/-"); window.location.href="#"; window.location.reload(true)}},
                               {href:"#/Deposit/", txt:"Deposit", onclick:()=>{}},
                               {href:"#/Withdraw/", txt:"Withdraw", onclick:()=>{}},
                               {href:"#/Balance/", txt:"Balance", onclick:()=>{}},
                               {href:"#/Transactions/", txt:"Transactions", onclick:()=>{}}
                              ]
  const currentUser         = React.useContext(UserContext);
  const [data, setData]     = React.useState('');
  React.useEffect(() => {

    // fetch all accounts from API
    fetch("/account/currentuser")
      .then(response => response.json())
      .then(data => {
        console.log(data[data.length-1].name);
        setData(data[data.length -1 ].name);
      })
  }, []);
  if (data === 'user'){
    return (
      <Nav 
        brand="BadBank"
        navItems={privateNav}
      />)
  }
  else {
    return (
      <Nav 
        brand="BadBank"
        navItems={publicNav}
      />)
  }
}