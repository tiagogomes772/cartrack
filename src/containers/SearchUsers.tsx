import * as React from 'react';
import { getUsers } from '../actions/UsersActions';
import { connect } from 'react-redux';

interface SearchUsersStateProps {
    storeUsers: any;
}

interface SearchUsersStateDispatchers {
    dispatchGetUsers: () => Promise<object>;
}

interface SearchUsersState {
    users: any;
}

class SearchUsers extends React.Component<SearchUsersStateProps & SearchUsersStateDispatchers, SearchUsersState> {
    state = {
        users: this.props.storeUsers,
    }

    componentDidMount() {
        this.props.dispatchGetUsers().then(() => {
            this.setState({users: this.props.storeUsers});
        })
    }

    render() {
        return (
            <div className="search-users">
                <div>Search Bar</div>
            </div>
        );
    }
}

const mapStateToProps = (state: any): SearchUsersStateProps => ({
    storeUsers: state.users,
})

const mapDispatchToProps = (dispatch: React.Dispatch<any>): SearchUsersStateDispatchers => ({
    dispatchGetUsers: () => dispatch(getUsers()),
})

export default connect<SearchUsersStateProps, SearchUsersStateDispatchers, any>(mapStateToProps, mapDispatchToProps)(SearchUsers);
  