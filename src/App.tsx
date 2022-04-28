import React, { Component } from 'react';
import 'reset-css';
import "./App.css";
import instaLogo from './assets/websitelayers/instagram.png'
import bandcampLogo from './assets/websitelayers/bandcamp.png'
import spotifyLogo from './assets/websitelayers/spotify.png'
import appleMusicLogo from './assets/websitelayers/applemusic.png'
import bandNameWritten from './assets/websitelayers/DRRtxt.png'
import youtubeLogo from './assets/websitelayers/youtube.png'
import recentRelease from './assets/websitelayers/recentrelease.png'
import backgroundImage from './assets/websitelayers/background.png'

export default class App extends Component {
  mediaLinks = {
    platforms: [
      { title: "Spotify", link: "https://open.spotify.com/artist/1JRbDAUy4BU6kKQXCGQgYN?si=4Ms104b9Rkyp6WfMDdFfFQ", imgSrc: spotifyLogo },
      { title: "Apple Music", link: "https://music.apple.com/us/artist/devils-reach-rd/1507982212", imgSrc: appleMusicLogo },
      { title: "Bandcamp", link: "https://devilsreachrd.bandcamp.com/", imgSrc: bandcampLogo },
      { title: "Instagram", link: "https://www.instagram.com/devilsreachrd/", imgSrc: instaLogo },
      { title: "Youtube", link: "https://www.youtube.com/channel/UC7m0hjtmD8JEwfD_z3aNGzQ", imgSrc: youtubeLogo}
    ]
  }

  public render() {
    return (
      <div className="App">
        <img className='bg' alt='background' src={backgroundImage}></img>
        <div className="bandName">
          <img className='bandNameImage' alt="Devils Reach Rd" src={bandNameWritten}></img>
        </div>
        <div className='recentReleaseWrapper'>
          <img className='recentReleaseImage' alt="Recent Release" src={recentRelease}></img>
        </div>
        <div className='iconsWrapper'>
          <div className="linked-icons" >
            {
              this.mediaLinks.platforms.map(plat => (
                <a className='mediaAnchor' key={plat.title} href={plat.link}  target="_blank" rel="noopener noreferrer">
                  <img className='mediaImage' alt={plat.title} src={plat.imgSrc} ></img>
                </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
