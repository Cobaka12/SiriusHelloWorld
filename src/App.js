import './App.css';
import NameText from './components/NameText';
import JinguLogo from './components/JinguLogo';
import Emoji from './components/Emoji';





function App() {
  return (
    
    <div className="App">

      <header className="App-header">        
        <JinguLogo></JinguLogo>
        <NameText></NameText>        
      </header>

      <div className='emogydiv'>
        <Emoji></Emoji>
      </div>  

    </div>
  );
}

export default App;
