import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{
    render(){
        return (
            <div>
                {/*Parent component will create a prop called on  */}
                <SearchBar />
            </div>
        );
    }
};

export default App; 