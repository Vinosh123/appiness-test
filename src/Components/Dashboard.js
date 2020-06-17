import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getDashboardData } from '../Actions/DashboardAction';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loggedUser &&
      this.props.dashboardInfo();
  }

  render() {
    return (
      <Fragment>
        <div style={{ border: '1px solid black', width: '400px', height: '200px', margin: 'auto' }}>
          <table style={{ width: '100%' }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          {this.props.dashboardData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td> {item.name}</td>
              <td>   {item.age} </td>
              <td> {item.gender} </td> 
              <td> {item.email} </td> 
              <td> {item.phoneNo}</td>
            </tr>
          ))}
          </table>
        </div>
      </Fragment>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    dashboardData: state.dashboardReducer.dashboardData,
    loggedUser: state.loginLogoutReducer.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardInfo: () => dispatch(getDashboardData()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);