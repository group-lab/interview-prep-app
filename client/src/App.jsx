import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Dashboard,
  Landing,
  Error,

} from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Error />} />
          <Route path="/Landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
