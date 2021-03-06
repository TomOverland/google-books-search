import React from "react";
import Form from "../components/Form/Form";
import Results from "../components/Results/Results";
import API from "../utils/API";

class Search extends React.Component {
  state = {
    value: "",
    books: [],
  };

  componentDidMount() {
    this.searchBook();
  }

  makeBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  searchBook = (query) => {
    API.getBook(query)
      .then((res) =>
        this.setState({
          books: res.data.items.map((bookData) => this.makeBook(bookData)),
        })
      )
      .catch((error) => console.log(error));
  };

  // Change state to the value of the input search
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the search button is clicked, run search on the state var
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
          <h2>Results</h2>
          <Results books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;
