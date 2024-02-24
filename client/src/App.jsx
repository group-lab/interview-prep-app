import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Landing,
  Home,
  Error,

} from './pages';

// import {Navigation} from './components/Navigation/Navigation'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="/Landing" element={<Landing />} /> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
