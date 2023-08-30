import { useEffect, useState } from 'react';
import './App.css';
import Quetoe from './components/Quetoe';
import axios from 'axios';

function App() {
  // const [content,setcontent]=useState(null)
  const [quetoe,setqueto]=useState(
    {
      content:"",
      dateAdded:"",
      author:""
    });
  const[loaging,setloading]=useState(false);

  useEffect(()=>{
    getqueto();
  if(loaging) return <h1>Loading...</h1>

  },[])
  
  async function getqueto(){
    try{
      setloading(true);
     const {data}=await axios.get("https://api.quotable.io/random")
      setqueto(data);
      setloading(false);
      
    }catch(err){
      console.log(err)
    }

  }
  return (
  
  <div>
      <button onClick={()=>getqueto()}>
        Generate
      </button>
      {
        //hadii content aysan null ahayn ii soo daabac
        <Quetoe
         content={quetoe.content}
        date={quetoe.dateAdded}
        author={quetoe.author}
       />
      }
      {/* <pre>{content.content}</pre>  */}
      {/* pre waa qatar oo obj aya lagu so dabacaa */}
      {/* awoit inu waqti qato aa laga yabaa ee sug waye micnaha */}

     {/* <Quetoe content="It is not so much our friends' help that helps us, as the confidence of their help"
        date="20/2/2020"
        author="Epicurus"
       />
        <Quetoe content="It is not so much our friends' help that helps us, as the confidence of their help"
        date="20/2/2020"
        author="Epicurus"
       /> */}

    </div>
  );
}

export default App;
