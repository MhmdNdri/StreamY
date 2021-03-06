import './styles/App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import StreamCreate from './components/streams/StreamCreate'
import StreamDelete from './components/streams/StreamDelete'
import StreamEdit from './components/streams/StreamEdit'
import StreamList from './components/streams/StreamList'
import StreamShow from './components/streams/StreamShow'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/update" exact component={StreamEdit} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/login" exact component={StreamCreate} />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
