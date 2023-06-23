
import './App.css';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

function App() {


  return (
    <div className="App">
    
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTQ55Qq30GrN4DwJ-n9hXxNC5JHnuIBp-mqD-WMmpNaOnpqr9N1ggXf-HA2PjmodZsjw2VAyYk3RMNU/pub?embedded=true" style = {{height: "100vh", width: "100vw"}}></iframe>
      
    </div>
  );
}

export default App;
