import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Parent from './components/Parent';
import MyList from './components/MyList';
import MyNavBar from './components/MyNavBar';
import Forms from './components/Forms';

const myStyle = {fontSize : "72px", color : "red"}

function App() {
  return (

    
    <div className="App" >
      <MyNavBar/>

     <h1 style={myStyle}>test</h1> 

     <Forms/>
      {/* <First/> */}
      {/* <Parent/> */}
       {/* <MyList/>  */}
    </div> 
  );
}

export default App;
