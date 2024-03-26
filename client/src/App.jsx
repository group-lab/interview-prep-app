import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Landing,
  IntervewQuestions,
  Question,
  Topics,
  ContributeQuestion,
  Login,
  Signup,
  Dashboard,
  Favourites,
  Settings,
  About,
  Help,
  Error,
} from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />          
          <Route path="/questions" element={<IntervewQuestions />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contribute" element={<ContributeQuestion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />     
          <Route path="/dashboard/favourites" element={<Favourites />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />     
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
