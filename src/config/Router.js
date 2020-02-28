import React from 'react';
import IndexScreen from '../screens/IndexScreen';
import QuizzScreen from '../screens/QuizzScreen';
import NotFoundScreen from '../screens/NotFound';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

const DefaultRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/'>
                        <IndexScreen />
                    </Route>
                    <Route exact path='/quizz'>
                        <QuizzScreen />
                    </Route>
                    <Route path='/404'>
                        <NotFoundScreen />
                    </Route>
                    <Redirect to={'/404'} />
                </Switch>
            </div>
        </Router>
    );
};

export default DefaultRouter;
