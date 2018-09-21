import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components 
import ExpensDashboard from '../components/ExpensDashboard';
import CreateDashboard from '../components/CreateExpense';
import EditExpense     from '../components/EditExpense';
import helpExpanse     from '../components/helpExpense';
import errorPage       from '../components/ErrorPage';
import Header          from '../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>       
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensDashboard} exact={true} />
                <Route path="/create" component={CreateDashboard} />
                <Route path="/edit/:id" component={EditExpense}  />
                <Route path="/help" component={helpExpanse } />
                <Route component={errorPage} />
            </Switch> 
        </div>           
             
    </BrowserRouter>
    )
}

export default AppRouter;