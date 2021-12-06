import React, { Component } from 'react'
import YouTube from 'react-youtube'

class YoutubePlayer extends Component {
    render() {
        interface ScreenSize {
            width: string
            height: string
            playerVars: object
        }

        const opts: ScreenSize = {
            height: '720',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        }

        return (
            <YouTube videoId="GUE7vIGmugk" opts={opts} onReady={this.onPlay} />
        )
    }

    onPlay(event) {
        // access to player in all event handlers via event.target
        event.target.mute()
        event.target.playVideo()
    }
}

export { YoutubePlayer }
