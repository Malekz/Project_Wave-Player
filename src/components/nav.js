import React from 'react';
import { FaMusic } from 'react-icons/fa';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button
        className={libraryStatus ? 'library-active' : ''}
        onClick={openLibraryHandler}
      >
        Library
        <FaMusic />
      </button>
    </nav>
  );
};

export default Nav;
