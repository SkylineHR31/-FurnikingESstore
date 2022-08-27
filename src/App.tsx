import React from "react";


interface person {
    name: string;
    age: number;
}
 
const tom: person = {
  name: "Tom",
  age: 25
};
 
if (tom.age == 25) {
  console.log(tom.name + "is 25 years old.");
}

function App() {
  return (
    <h1>Hello there</h1>
  )
}

export default App