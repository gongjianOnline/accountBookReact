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

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`
const Nav =styled.div`
  border: 1px solid blue;
  >ul{
    display: flex;
    >li{
      width:33.333%;
      text-align: center;
      padding: 16px;      
    }    
  }
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
                <Nav>
                <ul>
                    <li>
                        <Link to="/tag">标签页</Link>
                    </li>
                    <li>
                        <Link to="/money">记账页</Link>
                    </li>
                    <li>
                        <Link to="/statistics">统计页</Link>
                    </li>
                </ul>
            </Nav>
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
