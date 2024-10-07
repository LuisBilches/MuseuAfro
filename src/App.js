import logo from './logo.svg';
import './styles/App.css';
import SideMenu from './components/SideMenu'; // Certifique-se de que o caminho esteja correto
import './styles/SideMenu.css'; // Estilos do menu

function App() {
  return (
    <div className="app-container">
      <SideMenu />
    </div>
  );
}

export default App;
