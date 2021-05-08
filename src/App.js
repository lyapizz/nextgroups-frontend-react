import React, {Component} from 'react';
import {GiVolleyballBall} from "react-icons/gi"
import GroupResults from './components/groupResults';

class App extends Component {

    state = {
        groupResultsResponse: {
            groupResults: []
        }
    }

    componentDidMount() {
        fetch('https://cutshot-next-groups-backend.herokuapp.com/api/nextGroups')
            .then(res => res.json())
            .then((data) => {
                this.setState({groupResultsResponse: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div id="groupResultResponse" className="App container mx-auto mt-3">
                <div className="header-left fs-4">
                    {this.state.groupResultsResponse.tournament != null &&
                    <GiVolleyballBall className="inline-block text-warning align-top"/>
                    }
                    {this.state.groupResultsResponse.tournament}
                </div>
                <GroupResults groupResultsResponse={this.state.groupResultsResponse.groupResults}/>
            </div>
        )
    }
}

export default App;
