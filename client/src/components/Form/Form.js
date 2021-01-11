import React from "react";

function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group text-center pt-4">
          <label htmlFor="search">
            <h2>Search for Books</h2>
          </label>
          <div className="input-group row justify-content-center">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control ml-2 col-sm-4"
              placeholder="Search"
              id="search"
            />

            <button
              onClick={props.handleFormSubmit}
              className="btn btn-secondary ml-2"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
