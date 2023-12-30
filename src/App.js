import './App.css';
import { Footer } from './Components/Footer';
import { InsertTask } from './Components/InsertTask';
import { Header} from './Components/Header';
import { TaskList } from './Components/TaskList';
import { useState } from 'react';

export default function App() {

  const onDelete= (T)=>{
    console.log("i m on delete" , T)
    setTL(TL.filter((e)=>{
      return e!==T;
    }))
  }
  
  const addTask = (title, desc)=>{
    console.log("i m adding this todo", title, desc )
    let sno;
    if(TL.length===0){
      sno = 1;
    }else{
      sno = TL[TL.length-1].sno + 1;
    }
    const newtask = {
      sno : sno,
      title : title,
      desc : desc,
    }
    setTL([...TL , newtask]);
    console.log(newtask)
    
  }

  
  const [TL , setTL] = useState([
    {
      sno: 1,
      title: " Market ",
      desc: " You need to do job 1 "
    },

    {
      sno: 2,
      title: " Bank ",
      desc: " You need to do job 2 "
    },

    {
      sno: 3,
      title: " Mall ",
      desc: " You need to do job 3 "
    }
  ])
  
  return (
    <>
      <div className="App">
        <Header />
        <InsertTask addTask = {addTask}/>
        <TaskList TL = {TL}  onDelete={ onDelete}/>
        <Footer/>
      </div>
    </>
  );
}




