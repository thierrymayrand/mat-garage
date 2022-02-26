import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./App.css"
import Articles from './components/Articles';
import articlesProvider from './store/articlesProvider';
import ArticleDetail from './components/ArticleDetail';

function App() {
  return (
    <Router className="body">

      <Navbar />
      <articlesProvider>


        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/article/:articleId">
          <ArticleDetail />
        </Route>
      </articlesProvider>
    </Router>
  );
}

export default App;
