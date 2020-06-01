import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));}

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {robots, searchfield} = this.state;
        const filterKitties = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
        <div className='tc'>
            <h1 className='f1'>Kitty Friends</h1>
            <SearchBox searchChange={this.onSearch}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filterKitties}/>
                </ErrorBoundry>
            </Scroll>
        </div>
            );
        }
    };

export default App;