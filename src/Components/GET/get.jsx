import React, { useState, useEffect} from "react";
import {client } from "../../client";




function Get() {
    const [student, setStudent] = useState([]);
    const [rerender, setRerender] = useState(false);

 //whenever you want to re-render

  
    useEffect(() => {
      const query = '*[_type == "student"]';

      client.fetch(query).then((data) => {
        setStudent(data);
        console.log(data);
      });

      
  
    }, [rerender]);

    
    


    const [students, setStudents] = useState({
      id : "",
      name : "",
      dob : "",
    });

    const { id ,name, dob } = students;


  

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
   
    setStudents({ ...students, [name]: value }); 
  };

   

  const handleSubmit = () => {

    const posting = {
      _type: "student",
      id : parseInt(students.id),
      name : students.name,
      dob : students.date
    };


    client
      .create(posting)
      .then(() => {console.log("messege sent succes");
    setRerender((prevState)=> !prevState);})
      .catch((err) => console.log(err));


    console.log(rerender);
      
     
      
  };

 const handleDelete = () =>{
   client
     .delete({ query: '*[_type == "student"][0]'})
     .then(()=> {
       console.log("deleted succesfully")
       setRerender((prevState)=>!prevState);
     })
     .catch(console.error);

     console.log(rerender);
     

 }



  return (
    <div>
      <h1>heeloo</h1>
      {student.map((student, index) => (
        <h1 key={index}>
          {student.name} {student.dob}
        </h1>
      ))}

      <input
        className="p-text"
        type="number"
        placeholder="index"
        name="id"
        value={id}
        onChange={handleChangeInput}
      />

      <input
        className="p-text"
        type="text"
        placeholder="Your Name"
        name="name"
        value={name}
        onChange={handleChangeInput}
      />

      <input
        className="p-text"
        type="date"
        placeholder="Your Name"
        name="dob"
        value={dob}
        onChange={handleChangeInput}
      />

      <button type="button" className="p-text" onClick={handleSubmit}>
        Send Message
      </button>

      <button type="button" className="p-text" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Get
