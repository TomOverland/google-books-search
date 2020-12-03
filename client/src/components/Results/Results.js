import React from 'react';
import API from "../../utils/API";

class Results extends React.Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => {
                this.setState({
                    savedBooks: savedBooks
                })
            }).catch(error => {
                console.log(error);
            })
    }

    handleSave = book => {
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => {
                    this.setState({
                        savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id)
                    })
                }).catch(error => {
                    console.log(error);
                })
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({
                    savedBooks: this.state.savedBooks.concat([savedBook])
                })).catch(error => {
                    console.log(error);
                })
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results Found</h1>
                ) : (
                    <div>
                        {this.props.books.map(result => (
                            <div className="card mb-2" key={result._id}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-fluid" src={result.image} alt={result.title} />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                                <h4 className="card-title">{result.title} by {result.authors}</h4>
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                    <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                                                    <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3">
                                                        {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        )}
                        
                    </div>
                )
                }
            }

export default Results;