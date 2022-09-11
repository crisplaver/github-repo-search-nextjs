import React, { Fragment } from 'react';

const Search = () => {
  return (
    <Fragment>
      <div>
        <input type="text" onChange={() => {}}/>
        <button type="button" onClick={() => {}}>검색</button>
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
