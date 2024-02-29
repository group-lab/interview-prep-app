import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Landing,
  Dashboard,
  Interview,
  Questions,
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/interview" element={<Interview />} />
          <Route path="/dashboard/questions" element={<Questions />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
