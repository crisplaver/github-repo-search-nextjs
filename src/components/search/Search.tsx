import React, { Fragment } from 'react';

import useSearch from 'src/hooks/search/useSearch';

const Search = () => {
  const {
    repositoriesData,
    searchInputText,
    isFetchingRepositoriesData,
    handleChangeSearchText,
    handlePressSearch
  } = useSearch();
  return (
    <Fragment>
      <div>
        <input type="text" value={searchInputText} onChange={(e) => handleChangeSearchText(e.target.value)} />
        <button type="button" onClick={handlePressSearch}>검색</button>
      </div>
      <div>
        <ul>
          {isFetchingRepositoriesData ?
            '로딩중' :
            repositoriesData?.items.map(item => (
              <li>{item.name}</li>
            ))
          }
        </ul>
      </div>
    </Fragment>
  );
};

export default Search;
