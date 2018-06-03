import React, {Component} from 'react';
import axios from "axios/index";

class musicItem extends Component{
    state = {
        music: null,
        error: false
    };

    componentDidMount(){
                axios.get('https://songs-api-ubiwhere.now.sh/api/songs/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({music: response.data});
                    })
                    .catch(error =>{
                        console.log(error);
                        this.setState({error: true})
                    })

        }

    render(){
        //console.log('props music info', this.props.match.params.id);
        let music = " ";

        if(this.props.match.params.id){
            music=<p style={{textAlign: 'center'}}>Loading content...</p>
        }

        if(this.state.music){
            music = (
                <div className="FullPost">
                    <img src={this.state.music.imgUrl} alt={"image of the music " + this.state.music.title}/>
                    <h1>{this.state.music.title}</h1>
                    <p>{this.state.music.artist}</p>
                    <p>{this.state.music.year}</p>
                </div>
            );
        }

        return(
            <div>
                {music}
            </div>
        )
    }
}

export default musicItem;