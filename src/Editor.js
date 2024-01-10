import './App.css';


function Editor({value, onChange}) {
  return (
    <div className="editor">
      <header className='header'>
        <p className='header-text' for='editor'>Markdown Editor</p>
      </header>
      <textarea 
        className='editor-area' 
        id='editor' 
        placeholder='text'
        value={value}
        onChange={onChange}
        >
      </textarea>
    </div>
  );
}

export default Editor;
