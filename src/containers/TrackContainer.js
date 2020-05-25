import React from 'react'
import Track from '../components/Track'


class TrackContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: [],
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url)
    .then(res => res.json())
    .then(tracks => this.setState({ tracks: tracks.feed.entry }))
    .catch(err => console.error);
  }

  render(){
    return (
      <div>
      <h1>iTunes Top 20 Charts!</h1>
      <Track tracks={this.state.tracks}/>
      </div>
      

    )
  }

}
export default TrackContainer;
