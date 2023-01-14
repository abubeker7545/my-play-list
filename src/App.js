import React from 'react';
import SearchBar from './Component/SearchBar'
import VideoDetail from './Component/VideoDetail.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      musicList: []
    };
  }

  render() {
    return (
      <div>
        <h1>Music List App</h1>

        {/* Render all music list related components here */}
        <SearchBar/>
        <VideoDetail/>
      </div>
    );
  }  
}  
export default App;