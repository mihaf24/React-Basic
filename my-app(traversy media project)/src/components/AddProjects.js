import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }


  static defaultProps = {
    categories: ['Php' ,'Java', 'React']
  }

  handleSubmit(e){

    if(this.refs.titlex.value === ''){
      alert('cant be empty');
    }
    else{
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.titlex.value,
        category: this.refs.category.value

      }},
      function(){
        //console.log(this.state);
        this.props.addprojects1(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category =>
        {
          return <option key={category} value= {category}  >{category}</option>
        }
      );



    return (
      <div>
        <p>add a project</p>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div>
            <label> Title </label>
            <input type="text" ref="titlex" />
          </div>

          <div>
            <label> Category </label>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>,

          <input type="submit" />


        </form>
      </div>
    );
  }
}

export default AddProjects;
