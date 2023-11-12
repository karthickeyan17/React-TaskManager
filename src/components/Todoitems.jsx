import './CSS/Todoitems.css'
import tick from './Asserts/check-mark.png';
import not_tick from './Asserts/square.png' ;
import cross from './Asserts/x-mark.png';

const Todoitems = ({no,text,flag,set_todos}) => {

  const tk =(count)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i =0;i<data.length;i++){
      if(data[i].count===count){
        data[i].flag=!data[i].flag;
        break;
      }
    }
    set_todos(data);
  };

  const remove =(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
        data=data.filter((todo)=>todo.count!==no);
        set_todos(data);
      };

  return (
    <div className='todoitems'>
        <div className={'todoitems-container '.concat(!flag?"r":"")} onClick={()=>{tk(no)}}>
          {flag==false ? <img src={tick} alt=''/>:<img src={not_tick} alt=''/>}
           <div className="todoitems-text">{text}</div>
        </div>
        <img className="todoitems-cross-icon" src={cross} alt="" onClick={()=>{remove(no)}}/>     
    </div>
  )
}

export default Todoitems
