import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <InputGroup className="mt-3 mb-3">
        <FormControl
          placeholder="Search for books..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default Search;
