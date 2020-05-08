import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';
import ShowPageInfo from 'components/ShowPageInfo';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/about/:name" component={About}/>
                <ShowPageInfo />
            </div>
        );
    }
}

export default App;