import React from 'react';

class SearchBar extends React.Component{
    //declare state using es2015 syntax 
    state = { city: '' };
    render(){
        return(
        <div>
            {/**Form tag: HTML form for user input.*/}
            <form>
                <div>
                    <input type="text" placeholder="Search for images"/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar; 