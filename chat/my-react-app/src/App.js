import logo from './logo.svg';
import './App.css';
import ChatApp from './ChatApp';


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>React Chat Application</h1>
          <ChatApp /> {/* ChatApp 컴포넌트를 사용 */}
        </header>
    </div>
  );
}

export default App;
