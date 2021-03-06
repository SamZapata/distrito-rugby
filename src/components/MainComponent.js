import React, { Component } from 'react';
import Header from './base/HeaderComponent';
import Players from './players/PlayersComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const Clubes = () => {
    return(
        <h1>Clubes</h1>
    );
};

class Main extends Component {

    render() {
        return(
            <div className="dr-wrap">
                <Header />
                <Switch>
                    <Route path="/clubes" component={Clubes}/>
                    <Route path='/players' component={Players} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);