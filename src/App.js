
import './App.css';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

function App() {


  return (
    <div className="App">
    
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ5fs7zGwJJZnOpWaqaJ8ystKINH6bZP3L3ZUUaref_xOZU2wvqlXp0r0hSyqZ6_AAAXXjwa3PJm_Ok/pub?embedded=true" style = {{height: "100vh", width: "100vw"}}></iframe>
      
    </div>
  );
}

export default App;
