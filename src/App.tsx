import React from 'react';
import styled from "styled-components";
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Nav from "./components/Nav";


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`




function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav></Nav>
            </Wrapper>
        </Router>
    );
}
function NoMatch(){
    return <h2>404,页面不存在</h2>
}

function Tag() {
    return <h2>标签页</h2>;
}

function Money() {
    return <h2>记账页</h2>;
}

function Statistics() {
    return <h2>统计页</h2>;
}

export default App;
