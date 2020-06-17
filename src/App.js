import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/EmployeeList" component={Dashboard} />
        </Router>
      </div>
    </Provider>
  );
}
export default App;
