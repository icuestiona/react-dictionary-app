import React, { useCallback, useEffect, useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  const search = useCallback((searchTerm) => {
    //documentation: https://dictionaryapi.dev/
    const encodedKeyword = encodeURIComponent(searchTerm.trim());
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodedKeyword}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setResults(data[0]))
      .catch(() => setResults(null));

    const pexelsApiKey = "eac360db5fc86ft86450f3693e73o43f";
    const pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${encodedKeyword}&key=${pexelsApiKey}`;
    fetch(pexelsApiUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
      .catch(() => setPhotos(null));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    search(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    search(props.defaultKeyword);
  }, [props.defaultKeyword, search]);

  return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words: sunset, climate, action, flower, cloud...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
}
