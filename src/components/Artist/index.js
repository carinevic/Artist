import React, { Component } from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';

const REQ_URL ='http://localhost:3004/artists';

 class Artist extends Component {
    state={
        artist: ''
    }

    componentDidMount(){

axios.get(`${REQ_URL}/${this.props.match.params.artistid}`)
.then(response =>{
  this.setState({ artist: response.data})
})
    }
    render() {
        const artist = this.state.artist;
        return (
            <div>
           <div className="artist_bio">
             <div className="avatar">
                 <span style={{
                     background: `url('/images/covers/${artist.cover}.jpg')no-repeat`
                 }}> 

                 </span>
             </div>
             <div className="bio">
                 <h3>{artist.name}</h3>
                 <div className="bio_text">
                     {artist.bio}

                 </div>
             </div>

           </div>
           <AlbumList albumList={artist.albums}/>
            </div>
        );
    }
}

export default Artist;
