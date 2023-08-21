import playerData from "./playerData";


function BaseballCard(props) {
  const statsDisplay = [];
  for(let stat in props.stats){
    statsDisplay.push(
      <p>{`${stat}: ${props.stats[stat]}`}</p>
    )
  }

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.team}</p>
      <p>{props.position}</p>
      <p>{statsDisplay}</p>
    </div>
  )
  
  // return (
  //   <div className="card">
  //     <h2>{props.name}</h2>
  //     <img src={props.imgUrl}/>
  //   </div>
  // );
}

function App() {
  const cards = playerData.map((player) => 
  <BaseballCard 
  name={player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  imgUrl={player.imgUrl}
  key={player.cardId}
  />);
  return <>{cards}</>
}

export default App;
