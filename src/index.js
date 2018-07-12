import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Checkout from './components/checkout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/cart" component={Checkout} />
                    <Route path="/" render={({match})=>(<div>404</div>)}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
