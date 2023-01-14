import InputForm from "./components/InputForm/InputForm";
import DataList from "./components/DataList/DataList";
import { useState } from "react";


const App = () => {

  var InitialUserList = [
    {
      "_id":1,
      "fname":"Ritwik",
      "lname":"Gupta",
      "Age":25
    },
    {
      "_id":2,
      "fname":"Shivani",
      "lname":"Singh",
      "Age":25
    }
  ]

  const [userListData, updateUserData] = useState(InitialUserList);

  const addNewUser = (user) => {
    var ids = userListData.map(x => x._id)
    var newUserObj = {
      "_id": Math.max(...ids)+1,
      ...user
    }
    updateUserData((prevState) => {
      return([
        ...prevState,
        newUserObj
      ])
    });
    // updateUserData(userListData);
}

  return (
    <div>
      <InputForm addNewUser={addNewUser}></InputForm>
      <DataList userListData={userListData} style={{alignItems:"center"}}></DataList>
    </div>
  );
}

export default App;
