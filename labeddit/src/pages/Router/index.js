import React from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import FeedPage from '../FeedPage';
import PostPage from '../PostPage';



const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="/post/:idPost">
                    <PostPage />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Routers;