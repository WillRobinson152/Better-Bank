function Transact(){
    const currentUser = React.useContext(UserContext);
    return (<>
        <Card
          txtcolor="black"
          header="BadBank Landing Module"
          title="Welcome to the bank"
          text="You can move around using the navigation bar."
          body={JSON.stringify(currentUser.trans)}
        />
        </>
      );
  }