import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
	  <div className='pa2'>
		<input 
		  className='pa3 ba bw2 b--white  bg-pink'
		  type='search' 
		  placeholder='search robots' 
		  onChange={searchChange}
		  />
	  </div>
		);
}

export default SearchBox;