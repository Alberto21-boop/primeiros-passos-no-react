//Components 
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponet from './components/MyComponet';
import Events from './components/Events';


//styles / CSS
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponet/>
      <Events/>
    </div>
  );
}

export default App;
