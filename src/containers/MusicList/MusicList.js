import React, { Component } from 'react';
import axios from 'axios';

import classes from './MusicList.css';

import MusicItem from '../../components/MusicItem/MusicItem';


class MusicList extends Component {
    state = {
        musics: [],
        error: false
    };

    componentDidMount(){
        axios.get('https://songs-api-ubiwhere.now.sh/api/songs')
            .then(response => {
                console.log(response);

                //it will give an array of objects
                const updatedMusics = response.data.map(music => {
                    return{
                        ...music,
                    }
                });
                this.setState({musics: updatedMusics});
                console.log('updated', updatedMusics);
                })
            .catch(error =>{
                //console.log(error);
                this.setState({error: true})
            });
            }

    render () {
        let musics = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

        if(!this.state.error){
            musics= this.state.musics.map(
                music => {
                    return <MusicItem
                        key={music.id}
                        id={music.id}
                        title={music.title}
                        artist={music.artist}
                        year={music.year}
                        //clicked={() => this.postSelectHandler(post.id)}
                    />
                }
            );
        }


        return (
            <div className={classes.MusicList}>
                <ul>
                   {musics}
                </ul>
            </div>
        );
    }
}

export default MusicList;