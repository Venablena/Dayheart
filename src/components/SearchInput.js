import React, { Fragment } from 'react';
import { Input, Popup } from 'semantic-ui-react';

const SearchInput = () => {
  const searchBar = (
    <Input
      transparent
      icon= 'search'
      placeholder="Enter zip code" />
  )
  return (
      <Fragment>
        <Popup
          trigger={ searchBar }
          on='focus'
          content='Currently only zip code 98108 has data'
          hideOnScroll
          position='right center'
        />
      </Fragment>
    );
}

export default SearchInput;
