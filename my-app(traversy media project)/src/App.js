import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/projects';
import AddProjects from './components/AddProjects';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Php",
          category: "Web "
        },
        {
          id: uuid.v4(),
          title: "Java",
          category: "Android "
        },
        {
          id: uuid.v4(),
          title: "C Sharp",
          category: "Apple "
        }

      ]
    });
  }

  handleAddProject(project){
    //console.log({project})
    let projects = this.state.projects;
    //console.log(projects);
    projects.push(project);
    this.setState({projects: projects})
    console.log(projects);
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index= projects.findIndex(x=>x.id ===id);
    projects.splice(index,1);
    this.setState({projects: projects})
  }
  render() {
    return (
      <div className="App">
        Hello There!
        <Projects projects= {this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <AddProjects addprojects1={this.handleAddProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
