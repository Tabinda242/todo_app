import React from 'react';
import Input from './Component/Input';
import List from './Component/List';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
    {
      text: "Buy Milk",
      completed: false
    },
    {
      text: "Buy Egg" ,
      completed: true
    }
  ]
  };

  toggleCompleted = (index) => {
      const newTodos = this.state.todos.map((todo,i) => {
        if (index === i) {
          return {
            ...todo,
            completed : todo.completed
          };
        }
        return todo;

      })
      this.setState({
        todos: newTodos
      })
  }

  deleteTodo = (index) => {
   const newTodos =  this.state.todos.filter((todo, i) => {
  //    if (index === i) {
  //      return false;
  //    }
  //    return true;
  return index === i ? false : true;
  })

  
   this.setState({
     todos: newTodos
   });
  };

  addItem = (text) => {
    const newTodos = this.state.todos.concat({
      text
    })
    this.setState({
      todos: newTodos
    });
  }
  render() {
    return <div>
     {this.state.todos.map((todo, index ) => {
       return (
         <List toggleCompleted={this.toggleCompleted} 
         deleteTodo={this.deleteTodo}
         todo={todo} key={index} index={index}/>
       )
  })}

    <Input addItem={this.addItem} />
    </div>
  }
}

export default App;
