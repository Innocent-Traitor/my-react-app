import './App.css';
import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="editor">
        <header className='header'>
          <p className='header-text' for='editor'>Markdown Editor</p>
        </header>
        <textarea 
          className='editor-area' 
          id='editor' 
          placeholder='text' 
          value={this.state.input} 
          onChange={this.handleInput}>
        </textarea>
      </div>
    );
  }
}

export default Editor;
