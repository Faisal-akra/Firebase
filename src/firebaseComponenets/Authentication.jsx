import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";

const emailPass = getAuth(app);

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const subMit = () => {
    createUserWithEmailAndPassword(emailPass, email, password).then((msg) => alert("SUCCESSSSSS"))
  }
  return(
    <div className="flex items-center justify-center min-h-screen text-center ">
    <div className="flex flex-wrap flex-col border border-black justify-center text-center max-w-md w-full ">

        <h1 className=" bg-orange-300" >Login Form</h1>

            <input onChange={(e) => setEmail(e.target.value)} value={email}
             className="border border-black text-center " type="email" placeholder="Enter your email" />
            <input onChange={(y) => setPassword(y.target.value)} value={password}
             className="border border-black my-1 text-center" type="password" placeholder="Enter your Password" />
            <button onClick={subMit}
             className=" ml-auto mr-auto border border-black w-fit bg-orange-300 " type="submit">Submit-Form</button>

        </div>
    </div>
  )
}

export default Authentication;