function Spa() {
  return (
    <HashRouter>
      <div>       
        {/* <UserContext.Provider value={{user:{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}}}> */}
        <UserContext.Provider value={{user:{name:'',email:'',password:'',balance:0}}}>
        {/* <NavBar/>  */}
          {/* <div className="container" style={{padding: "20px"}}> */}
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          {/* </div> */}
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
