import Sidebar from "../../components/Sidebar/Sidebar";
import "./App.css";


function Main({stateSignin,setStateSignin}) {

  return (
    <div className="container">
      <Sidebar
        user={stateSignin.user}
        stateSignin={stateSignin}
        setStateSignin={setStateSignin}
      />
    </div>
  );
}

export default Main;
