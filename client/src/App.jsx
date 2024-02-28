import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Home,
  // Landing,
  Error,

} from './pages';

// import {Navigation} from './components/Navigation/Navigation'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="*" element={<Error />} />
          {/* <Route path="/Landing" element={<Landing />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
