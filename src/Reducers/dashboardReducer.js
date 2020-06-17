import initialState from './initialState';
const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_DASHBOARD_DATA':
        return Object.assign({}, state, { dashboardData: action.data });
        default:
            return state;
    }
};
export default dashboardReducer;