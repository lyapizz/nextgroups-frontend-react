import './App.css';
import React, {Component} from 'react';
import GroupResults from './components/groupResults';

class App extends Component {

    state = {
        groupResultsResponse: {
            groupResults: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8100/api/nextGroups')
            .then(res => res.json())
            .then((data) => {
                this.setState({groupResultsResponse: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div id="groupResultResponse">
                <div className="header-left">
                    {this.state.groupResultsResponse.tournament}
                </div>
                <GroupResults groupResultsResponse={this.state.groupResultsResponse.groupResults}/>
            </div>
        )
    }
}

export default App;
