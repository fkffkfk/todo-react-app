import React from 'react';
import Todo from './Todo'; 
import AddTodo from './AddTodo.js';
import { Paper,List,Container } from '@material-ui/core';
import './App.css';

/*class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Todo />
        <Todo />
      </div>
    );
  }
}*/
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items: [
       /* {id: 0, title: "Hello world 1", done: true},
      {id: 1, title: "Hello world 2", done: false},
      {id: 2, title: "Hello world 3", done: true} */
    ]
    };
    }
  
    add = (item) => {
      const thisItems = this.state.items;
      item.id = "ID-" + thisItems.length;
      item.done = false;
      thisItems.push(item);
      this.setState({items:thisItems});
      console.log("items: ",this.state.items);
    }

    delete = (item) =>{
      const thisItems=this.state.items;
      console.log("Before Update Items : ",this.state.items)
      const newItems= thisItems.filter(e => e.id !== item.id);
      this.setState({items:newItems},()=>{
        console.log("Update Items : ",this.state.items)
      });
    }

  render() {
    var todoItems = this.state.items.length> 0 && ( 
    <Paper style={{margin:16}}>
    <List> 
    {this.state.items.map((item,index)=>(
      <Todo item={item} key={item.id} delete={this.delete}/>
    ))}
   </List>
   </Paper> 
   );

    return(
    <div className="App">
      <Container maxWidth="md">
      <AddTodo add = {this.add}/>
      <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}*/


export default App;
