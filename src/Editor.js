import './App.css';

function Editor() {
  return (
    <div className="editor">
      <header className='header'>
        <p className='header-text' for='editor'>Markdown Editor</p>
      </header>
      <textarea className='editor-area' id='editor' placeholder='text'>

      </textarea>
    </div>
  );
}

export default Editor;
