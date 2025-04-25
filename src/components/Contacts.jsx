import React,{useState} from 'react'

const Contacts = () => {
  // One-Way data binding in React
  
  const [name, setName] = useState("initial")
  //Important(Re-Render of Components)

  return (
    <div>
      <form>
        <input
         type="text"
         placeholder="Name"
        //  onChange={(e) => (name = e.target.value)}
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <input type="email" placeholder="Email" />
      </form>
      <button onClick={()=>console.log(name)}>Press</button>
      <p>{name}</p>
    </div>
  )
}

export default Contacts