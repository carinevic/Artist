import React, { Component } from 'react';
import axios from 'axios';
import Banner from './Banner';
import ArtistList from './ArtistList';


const URL_ARTIST = 'http://localhost:3004/artists'
 class index extends Component {
     state= {
         artists: ''
     }

componentDidMount(){
 axios.get(URL_ARTIST)
 .then (response => {
   this.setState({artist: response.data})
 })
}

    render() {
        return (
            <>
    
          <Banner />
          <ArtistList allArtists={this.state.artists} />
            </>
        );
    }
}

export default index;
