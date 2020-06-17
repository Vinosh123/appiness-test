const getEmployeeUsers = (data) => {
    return {
        type: "STORE_DASHBOARD_DATA",
        data
    }
}
export function getDashboardData() {
    let fetchData = {
        method: 'GET',
        headers: new Headers()
    }
    return (dispatch) => {
        fetch("./Dashboard.json", fetchData)
        .then(response =>response.json())
        .then(result => dispatch(getEmployeeUsers(result.user)))
        .catch(error => error);
    }
};