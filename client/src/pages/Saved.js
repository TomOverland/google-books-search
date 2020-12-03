import React from 'react';
import API from "../utils/API.js";
import Results from "../components/Results/Results";

class Saved extends React.Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks().then(savedBooks => {
            this.setState({
                savedBooks: savedBooks
            })
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Saved Books</h2>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;