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
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div className="p-2 bd-highlight align-self-center">
                            <GiVolleyballBall className="inline-block text-warning"/>
                        </div>
                        <div className="p-2 bd-highlight align-self-center">
                            {this.state.groupResultsResponse.tournament}
                        </div>
                    </div>
                    }
                </div>
                <GroupResults groupResultsResponse={this.state.groupResultsResponse.groupResults}/>
            </div>
        )
    }
}

export default App;
