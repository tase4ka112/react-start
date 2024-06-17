// export default function OfficerProfile(props) {
//   console.log(props);

//   return (
//     <div>
//       <p>Name: (props.name)</p>
//       <p>Rank: Commander</p>
//       <p>Age: (props.age)</p>
//       <p>Spes: Fighter Pilot</p>
//       <p>Status: Active</p>
//     </div>
//   );
// }

export default function OfficerProfile({
  officer: { name, rank, age, spec, status, skills },
}) {
  return (
    <div>
      <p>Name: {name} </p>
      <p>Rank: {rank} </p>
      <p>Age: {age} </p>
      <p>Spes: {spec}</p>
      <p>Status: {status === "Active" ? "Is active" : "Is retired"}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
