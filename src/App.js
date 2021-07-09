import './App.css';
import logo from './logo.svg';

import Boop from './Components/Boop'

function App()
{
    return (
        <div className="App">
            <Boop y={-7.5} >
                <img class="App-logo" src={logo} alt="logo" />
            </Boop>
            <Boop y={-7.5} >
                This is a <br/> Boop example
            </Boop>
            <Boop y={-7.5} >
                <img class="App-logo" src={logo} alt="logo" />
            </Boop>
        </div>
    );
}

export default App;
