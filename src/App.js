import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {

    state = {
        characters: [
            {name: 'Giannis', job: 'Developer'},
            {name: 'kostas', job: 'Developer'}
        ]
    }

    removeCharacter = (index) => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
    }

    editCharacter = (index, character) => {
        const { characters } = this.state
        characters[index] = character;
        this.setState({ characters: characters })
    }

    handleSubmitAdd = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {

        const {characters} = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} editCharacter={this.editCharacter} />
                <Form handleSubmitAdd={this.handleSubmitAdd} />
            </div>
        )
    }
}

export default App