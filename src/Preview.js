import './App.css';
import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ''
        }
    }

    render() {
        return (
            <div className="preview-div">
              <header className='preview-header'>
                  <p className='header-text'>Markdown Preview</p>
              </header>
              <div className='preview'>
      
              </div>
            </div>
          );
    }
}

  export default Preview; 