import React, { useState, useEffect} from "react";
import {client } from "../client";



function Result(props) {
    const [student, setStudent] = useState([]);
    // const [rerender, setRerender] = useState(false);

   const [loading, setLoading] = useState(false);
   const [error1, setError1] = useState(false);
  
   

//    console.log(props.click);

    useEffect(() => {
      const query = `*[_type == "${props.search}"]`;

      client.fetch(query).then((data) => {
        setStudent(data);
        if(data.length == 0){if (props.click) {
          setError1(true);
          setLoading(false);
        }}
        
        else{setLoading(true);
        }
        
      });
    }, [student]);



      if(loading){
      return (
        <>
          {student.map((student, index) => (
            <h1 key={index}>
              {student.name} {student.dob}
            </h1>
          ))}
        </>
      );}

      else{
          if(error1){ 
              return(<h4> enter correect name </h4>)
          }
          else{
              
          return(<h1>search the name</h1>)}
      }
   
  
}

export default Result
