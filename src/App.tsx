import React from 'react';
import styled from "styled-components";
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    // Link,
    Redirect
} from "react-router-dom";
import Tag from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";


const AppWrapper =styled.div`
  color:#333
`

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/tag">
                        <Tag />
                    </Route>
                    <Route path="/money">
                        <Money />
                    </Route>
                    <Route path="/statistics">
                        <Statistics />
                    </Route>
                    <Redirect exact from="/" to='/money' />
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;
