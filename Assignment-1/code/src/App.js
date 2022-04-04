import Appcomponentgrp from "./components/Appcomponentgrp";
import Yellow from "./components/Yellow";
import Blue from "./components/Blue";
import Red from "./components/Red";

function App() {
  return (
    <div className="App">
      
        <Appcomponentgrp>
          <Yellow />
          <Yellow />
        </Appcomponentgrp>
        <Appcomponentgrp>
          <Red />
        </Appcomponentgrp>
        <Appcomponentgrp>
          <Blue />
          <Blue />
          <Blue />
        </Appcomponentgrp>
      
    </div>
  );
}

export default App;
