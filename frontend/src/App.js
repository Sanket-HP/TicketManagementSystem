// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

const App = () => {
    return (
        <Router>
            <div>
                {/* Your header, navigation, or common components can go here */}
                
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/admin" component={AdminDashboard} />
                    <Route exact path="/create-ticket" component={TicketForm} />
                    {/* Add more routes for different pages or components */}
                </Switch>
                
                {/* Your footer or other common components */}
            </div>
        </Router>
    );
};

export default App;

