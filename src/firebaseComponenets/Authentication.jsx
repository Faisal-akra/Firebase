import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function Authntication() {

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "zjan45097@gmail.com", "armyjans").then((value) => console.log(value));
  };
  return(
    <div>
      <h1>Authentication</h1>
      <button onClick={signUpUser}>Email</button>
    </div>
  )
}

export default Authntication;