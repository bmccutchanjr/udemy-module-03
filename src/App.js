import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput.js";
import UserOutput from "./UserOutput/UserOutput.js";

class App extends Component
{   state =
    {   username: "Geronimo"
    }

    changeEventHandler = (event) =>
    {
        // alert ("change fired");
        this.setState ( { username: event.target.value } );
    }

    render()
    {
        return (
        <div className="App">
            <UserInput name={ this.state.username } change={ this.changeEventHandler } />
            <UserOutput p1={ this.state.username }
                        p2="And this is the second." />

            <UserOutput p1="The second UserOutput component has different text."
                        p2="Even the second paragraph is different!" />

            <UserOutput p1="What then would you expect of the third UserOutput component?"
                        p2="You guessed it!" />
        </div>
        );
    }
}

export default App;
