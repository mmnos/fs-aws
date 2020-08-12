import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// add faMicrophone to svg import above when enabling voice commands

const Search = () => {
  return (
    <div>
      <InputGroup className="mt-3 mb-3">
        {/* <InputGroup.Prepend>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faMicrophone} />
          </Button>
        </InputGroup.Prepend> */}
        <FormControl
          placeholder="Search through your imagination..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
