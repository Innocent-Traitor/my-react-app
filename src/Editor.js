import './App.css';


function Editor(props) {
  return (
    <div className="editor">
      <header className='header'>
        <p className='header-text' for='editor'>Markdown Editor</p>
      </header>
      <textarea 
        className='editor-area' 
        id='editor' 
        placeholder='text'
        onChange={0}>
      </textarea>
    </div>
  );
}

export default Editor;
