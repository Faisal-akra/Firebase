import { getDatabase, set, ref } from "firebase/database";
import { app } from "../firebase"; 

const getData = getDatabase(app);

function RealTime() {

  const pushData = () => {
    set(ref(getData, "Faisal-Data"), {
      name: "Faisal-Akram",
      FatherName: "Muhammad-Akram",
      degree: "ADS"
    })
  }
  return(
    <div>
      <h1>We Love Firebase</h1>
      <button onClick={pushData}>Push Data</button>
    </div>
  )
}

export default RealTime;