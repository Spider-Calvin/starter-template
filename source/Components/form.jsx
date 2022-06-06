import React , {useState} from 'react'
import Result from './Result'

function Form() {

    const [name , setName]=useState("")
    const [name1 , setName1]=useState("")
    const [submit, setSubmit] = useState(false);

    const handleSubmit = () => {
         console.log(name);
         setName1(name);
        setSubmit(true);
         
    }

    const handleChangeInput = (e) => {
      const { value } = e.target;
      setName(value);
     
    };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChangeInput}
        placeholder="enter the name"
      />
      <button onClick={handleSubmit}>submit</button>

      <Result search={name1} click={submit}/>
    </div>
  );
}

export default Form

