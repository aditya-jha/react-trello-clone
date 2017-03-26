"use strict";

import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from "./reducers/index";
import AppContainer from "./container/AppContainer";

require("style-loader!css-loader!./styles/style.css");

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer} />
        </Router>
    </Provider>
    ,
    document.querySelector("#app")
);