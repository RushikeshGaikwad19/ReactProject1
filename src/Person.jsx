import React from "react";
const Person=(props)=>{

    return(<>
          <h1>Name: {props.name}</h1>
          <h2>Age: {props.age}</h2>
          <h3>Salary:{props.salary}</h3>
        </>)
}
export default Person