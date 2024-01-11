import './App.css';
import { Marked, marked } from 'marked';

function Preview({value}) {
    let element = marked.parse(value);
    console.log(element);
    return (
      <div className="preview-div">
        <header className='preview-header'>
            <p className='header-text'>Markdown Preview</p>
        </header>
        <div id='preview' className='preview' dangerouslySetInnerHTML={{__html: element}}>
        </div>
      </div>
    );
  }
  
  export default Preview;