import React from 'react';

export default class PeopleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('/api/person')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({data: data});
    });
  }

  render () {

    let content = (
      <div className="loading">Loading...</div>
    );

    if (this.state.data) {
      content = this.state.data.map((person) => {
        return (
          <div className="person" key={person.id}>
            {person.name}<br />
            <img src={person.image_url} alt={person.name}/>
          </div>
        );
      }); 
    }

    return (
      <div className="people-list">
        { content }
      </div>
    );
  }
}