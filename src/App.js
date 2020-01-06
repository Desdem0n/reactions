import React, { Component }  from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {    
        state = { displayBio: false };
       
        
        toggleDisplayBio = () => {
            this.setState({ displayBio: !this.state.displayBio });
    }

    render() {   
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Michael Milke. I'm a junior software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
            <div>
              <p>I live in Warsaw, and code every day even if it takes just couple minutes.</p>
              <p>My favourite language is JavaScript and React, thus I think React.js is awesome.</p>
              <p>Besides  coding, I love market demand of constant evolving!</p>
              <p>It is also a fabulous remmedy </p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
        )
    }
    <hr />
    <Projects />
    <hr />
    <SocialProfiles />
            </div>
        )
    }
}

export default App;
