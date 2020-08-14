import React, { useContext, useState } from "react";
import GlobalContext from "../../context/globalContext";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// add faMicrophone to svg import above when enabling voice commands

const Search = () => {
  const globalContext = useContext(GlobalContext);

  const { getSearchResults } = globalContext;

  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search === "") {
      console.log("Please enter something");
    } else {
      console.log("you entered something yay");
      getSearchResults(search);
      setSearch("");
    }
  };

  return (
    <>
      <InputGroup className="mt-3 mb-3">
        {/* <InputGroup.Prepend>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faMicrophone} />
          </Button>
        </InputGroup.Prepend> */}
        <FormControl
          name="text"
          placeholder="Search through your imagination..."
          value={search}
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default Search;
