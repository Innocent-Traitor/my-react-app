import './App.css';

function Editor() {
  return (
    <div className="editor">
      <header className='header'>
        <label className='header-text' for='editor'>Markdown Editor</label>
      </header>
      <textarea className='editor-area' id='editor' placeholder='text'>

      </textarea>
    </div>
  );
}

export default Editor;
