import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./App.css"
import Articles from './components/Articles';
import articlesProvider from './store/articlesProvider';
import ArticleDetail from './components/ArticleDetail';
import Ebook from './components/Ebook';
import Youtube from './components/Youtube';
import Admin from './components/Admin';
import PlaylistDetail from './components/PlaylistDetail';
import EbookDetail from './components/EbookDetail';

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


        <Route path="/article/:articleId">
          <ArticleDetail />
        </Route>

        <Route path="/articles" exact>
          <Articles />
        </Route>



        <Route path="/ebook" exact >
          <Ebook />
        </Route>

        <Route path="/ebook/:ebookId" exact >
          <EbookDetail />
        </Route>


        <Route path="/youtube" exact>
          <Youtube />
        </Route>

        <Route path="/youtube/:playlistId">
          <PlaylistDetail />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>


      </articlesProvider>

    </Router >

  );
}

export default App;
