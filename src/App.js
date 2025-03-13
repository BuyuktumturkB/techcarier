import logo from './logo.svg';
import './App.css';
import Appbar from './Components/Appbar/Appbar';
import Dashboard from './Screens/Dashboard/Dashboard';
import LoginScreen from './Screens/LoginScreen.js/LoginScreen';
import DashboardStack from './stacks/DashboardStack';

function App() {
  return (
   <DashboardStack/>
  );
}

export default App;
