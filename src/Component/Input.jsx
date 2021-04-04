import React from 'react';

class Input extends React.Component {
    state = {
        todoText: ''
    }

    OnInputChange = (event) => {
         this.setState({
             todoText: event.target.value
         });
    };

    submission = (event) => {
      event.preventDefault();

      this.props.addItem(this.state.todoText);

      this.setState({
          todoText: ''
      })
    }

    render() {
        return (
            <>
                <form onSubmit={this.submission}>
                    <label>Add An Item</label>
                    <br />
                    <input type="text" placeholder="Enter an Item name" onChange={this.OnInputChange} value={this.state.todoText}/>
                    <button type="submit">Add Item</button>
                </form>
            </>
        )


    }
}

export default Input