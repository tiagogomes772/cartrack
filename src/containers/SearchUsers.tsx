import { getUsers } from '../actions/UsersActions';
import { connect } from 'react-redux';
import { SearchBar } from '../components/SearchBar/SearchBar';
import React from 'react';

import './SearchUsers.scss';
import { UserCard } from '../components/UserCard/UserCard';

interface SearchUsersStateProps {
    storeUsers: any;
}

interface SearchUsersStateDispatchers {
    dispatchGetUsers: () => Promise<object>;
}

interface SearchUsersState {
    users: any;
    filters: any[];
    currentKeyword: string;
}

class SearchUsers extends React.Component<SearchUsersStateProps & SearchUsersStateDispatchers, SearchUsersState> {
    state = {
        users: this.props.storeUsers,
        filters: [{label: 'Email', enabled: true, value: 'email'}, {label: 'Name', enabled: true, value: 'name'}],
        currentKeyword: '',
    }

    componentDidMount() {
        this.props.dispatchGetUsers().then(() => {
            this.setState({users: this.props.storeUsers});
        })
    }

    handleChangeKeyword = (e : any) => {
        this.setState({currentKeyword: e.target.value}, this.applyFilters);
    }

    renderUserCards = () => {
        if(this.state.users.length > 0) {
            return this.state.users.map((user: string, index: number) => 
                <UserCard user={user} key={index} />)
        } else {
            return null;
        }
    }

    toggleFilter = (index: number) => {
        const filters = this.state.filters.map((filter: any, key: number) => {
            if (index === key) {
                const newFilter = Object.assign(filter);
                newFilter.enabled = !filter.enabled;
                return newFilter;
            } else {
                return filter;
            }
        })
        this.setState({filters}, this.applyFilters)
    }

    applyFilters = () => {
        const keysToFilter = this.state.filters.filter((filter: any) => filter.enabled).map((filter: any) => filter.value);
        if(this.props.storeUsers.length > 0) {
            const newStoreUsers = this.props.storeUsers.filter((user: any) => {
                let showUser = false;
                keysToFilter.map((filter: string) => {
                    if(user[filter].includes(this.state.currentKeyword)) {
                        showUser = true;
                    }
                });
                return showUser;
            })
            this.setState({users: newStoreUsers});
        }
    }

    render() {
       
        return (
            <div className="search-users">
                <SearchBar 
                    handleChange={this.handleChangeKeyword}
                    value={this.state.currentKeyword}
                    toggleFilter={this.toggleFilter}
                    filters={this.state.filters}
                />
                <div className="search-users__list">
                    {this.state.users && this.renderUserCards()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any): SearchUsersStateProps => ({
    storeUsers: state.users.users,
})

const mapDispatchToProps = (dispatch: any): SearchUsersStateDispatchers => ({
    dispatchGetUsers: () => dispatch(getUsers()),
})

export default connect<SearchUsersStateProps, SearchUsersStateDispatchers, any>(mapStateToProps, mapDispatchToProps)(SearchUsers);
  