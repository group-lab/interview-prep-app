import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Home,
  Error,

} from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
