import './App.css';
import React, {Component} from 'react';
import GroupResults from './components/groupResults';

class App extends Component {

  state = {
    groupResults: []
  }

  componentDidMount() {
    fetch('https://cutshot-next-groups.herokuapp.com/api/nextGroups')
        .then(res => res.json())
        .then((data) => {
          this.setState({groupResults: data})
        })
        .catch(console.log)
  }

  render() {
    return (
        <GroupResults groupResults={this.state.groupResults}/>
    )
  }
}

export default App;
