import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Landing,
  Dashboard,
  Favourites,
  AllQuestions,
  Settings,
  Help,
  Error,
} from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="/questions" element={<AllQuestions />} />
          <Route path="/dashboard" element={<Dashboard />} />         
          <Route path="/dashboard/favourites" element={<Favourites />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
