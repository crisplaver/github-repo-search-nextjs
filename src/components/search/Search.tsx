import React, { Fragment } from 'react';

import useSearch from 'src/hooks/search/useSearch';

const Search = () => {
  const {
    searchInputText,
    handleChangeSearchText,
    handlePressSearch
  } = useSearch();
  return (
    <Fragment>
      <div>
        <input type="text" value={searchInputText} onChange={(e) => handleChangeSearchText(e.target.value)} />
        <button type="button" onClick={() => handlePressSearch}>검색</button>
      </div>
      <div>
        <ul>
          <li>결과1</li>
          <li>결과2</li>
          <li>결과3</li>
          <li>결과4</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Search;
