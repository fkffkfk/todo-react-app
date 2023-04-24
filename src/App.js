import React from 'react';
import Todo from './Todo'; 
import AddTodo from './AddTodo.js';
import { Paper,List,Container } from '@material-ui/core';
import './App.css';
import {call} from "./service/ApiService";
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
    
    componentDidMount() {
      call("/todo","GET",null).then((response)=>
      this.setState({items:response.data}));
      }
  

    update =(item) =>{
      call("/todo","PUT",item).then((response)=>
      this.setState({items:response.data}));
    };

    add = (item) => {
      call("/todo","POST",item).then((response)=>
      this.setState({items: response.data})
      );
    };

    delete = (item) =>{
      call("/todo","DELETE",item).then((response)=>
      this.setState({items: response.data})
      );
    };

  render() {
    var todoItems = this.state.items.length> 0 && ( 
    <Paper style={{margin:16}}>
    <List> 
    {this.state.items.map((item,index)=>(
      <Todo item={item} key={item.id} delete={this.delete}
      update={this.update}/>
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
