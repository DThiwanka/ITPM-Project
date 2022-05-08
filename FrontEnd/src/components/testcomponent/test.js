import React, { useState } from 'react';

function Test() {
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const std={
      name,
      age
    }

    console.log(std)

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>Enter your name:
        <input 
          type="text" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Test
