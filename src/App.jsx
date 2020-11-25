import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import Routers from './Routers';
import { createBrowserHistory } from "history";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Router history={history}>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        {
                            Routers.map((route, idx) => {
                                return <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    component={props => <route.layout propsPar={props} {...props} />}
                                />
                            })
                        }
                    </Switch>
                </React.Suspense>
            </Router>

        );
    }
}

export default App;
