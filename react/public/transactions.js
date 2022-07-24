function Transactions(){
    const currentUser = React.useContext(UserContext);
    return (
      <Card
        bgcolor="info"
        header="Balance"
        body={<TransMsg/>}
      />
    )
  
  
  function TransMsg(props){
    return(<>
      <h1>{currentUser.user.name}</h1><br/>
      <h5>Your transactions:</h5><br/>
      <h3>${currentUser.trans}</h3><br/>    
    </>);
  }
}