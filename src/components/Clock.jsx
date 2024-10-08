
const ClockComponent = () => {

  //Skapar/hämtar det format som jag vill att tiden ska visas i.
  let time = new Date().toLocaleTimeString();

  // Returnerar en div som innehåller en rubrik samt en variabel som innehåller tiden
  return (
    <>
      <div className="clockDiv">
        <h1> Current Time</h1>
        <h2> {time} </h2>
      </div>
    </>
  )
}

export default ClockComponent;