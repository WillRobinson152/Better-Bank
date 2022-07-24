function Home(){
  const publicNav           = [{href:"#/CreateAccount/", txt:"Create Account", onclick:()=>{}},
                               {href:"#/Login/", txt:"Log in", onclick:()=>{}}] 
  const privateNav          = [{href:"#/CreateAccount/", txt:"Log out", onclick:() => {fetch("/account/current/nouser")}},
                               {href:"#/Deposit/", txt:"Deposit", onclick:()=>{}},
                               {href:"#/Withdraw/", txt:"Withdraw", onclick:()=>{}},
                               {href:"#/Balance/", txt:"Balance", onclick:()=>{}}]
  const currentUser         = React.useContext(UserContext);
  const [data, setData]     = React.useState(data);
  React.useEffect(() => {

    // fetch all accounts from API
    fetch("/account/currentuser")
      .then(response => response.json())
      .then(data => {
        console.log(data[data.length-1].name);
        setData(data[data.length -1 ].name);
      })
  }, []);
  if (data === 'user')
  {
  return (<>
    {/* <Nav 
      brand="BadBank"
      navItems={privateNav}
    /> */}
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
    </>
  );  
}
else {
  return (<>
    {/* <Nav 
      brand="Bad Bank"
      navItems={publicNav}
    /> */}
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
    </>
  );
}
}