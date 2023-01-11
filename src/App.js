import InputForm from "./components/InputForm/InputForm";

const userList = [
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

const App = () => {
  return (
    <InputForm></InputForm>
  );
}

export default App;
