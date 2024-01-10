import './App.css';

function Preview({value}) {
    return (
      <div className="preview-div">
        <header className='preview-header'>
            <p className='header-text'>Markdown Preview</p>
        </header>
        <div className='preview'>
            {value}
        </div>
      </div>
    );
  }
  
  export default Preview;