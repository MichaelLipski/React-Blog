import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import PhotosListPage from './pages/PhotosListPage';
import PhotoPage from './pages/PhotoPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route path="/photos-list" component={PhotosListPage} />
              <Route path="/photo/:name" component={PhotoPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
