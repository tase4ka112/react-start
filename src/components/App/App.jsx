// const App = () => {
//   return <p>Hello react</p>;
// };

// export default App;

// export default function App() {
//   const username = "Tetiana";
//   const title = "Супер титл";
//   const imgURL = "https://www.imgonline.com.ua/examples/red-yellow-flower.jpg";
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>Hello react {2 + 2} </p>
//       <p>Hello {username}</p>
//       <img src={imgURL} alt="chornobryvsi" />
//     </div>
//   );
// }
import AppBar from "../AppBar/AppBar";
import OfficerList from "../OfficerList/OfficerList";
import officers from "../../officers.json";

// const fistPilot = {
//   id: 1,
//   name: "Jacob Mercer",
//   rank: "Commander",
//   age: 42,
//   spec: "Fighter Pilot",
//   skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
//   status: "Active",
// };

// const cecondPilot = {
//   id: 2,
//   name: "Adrian Cross",
//   rank: "Lieutenant",
//   age: 35,
//   spec: "Reconnaissance",
//   skills: ["Stealth Operations", "Surveillance", "Data Analysis"],
//   status: "Active",
// };

export default function App() {
  return (
    <div>
      <AppBar />
      <OfficerList items={officers} />
      {/* <OfficerProfile officer={fistPilot} />
      <OfficerProfile officer={cecondPilot} /> */}
    </div>
  );
}
