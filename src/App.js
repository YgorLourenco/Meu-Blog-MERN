import {BrowserRouter as Router, Route} from 'react-router-dom' // Criar rotas para as páginas
// Pages
import Home from './pages/Home'
import About from './pages/About'
import ArticlesList from './pages/ArticlesList'
import Article from './pages/Article'

// Components
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/articles-list' component={ArticlesList} />
        <Route exact path='/article' component={Article} />
      </div>
    </Router>
  );
}

export default App;
