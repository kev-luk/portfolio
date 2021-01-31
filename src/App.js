import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Container } from 'react-bootstrap'
import Background from './components/Background'

function App() {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div style={{ maxWidth: "500px" }}>
        <BrowserRouter>
          <Background />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
