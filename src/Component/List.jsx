import React from 'react';

class List extends React.Component {

    ClickHandle = () => {
        this.props.toggleCompleted(this.props.index);
    };

    deleteItems = () => {
        this.props.deleteTodo(this.props.index)
    } 

    render () {
        const {todo} = this.props;
        return (
            <li className={todo.completed ? "completed" : ""}>
                <span onClick={this.ClickHandle}>{todo.text}</span>
            <span>
                <button onClick={this.DeleteItems}>Delete</button>
            </span>
            
            </li>
        )
    }
}

export default List;