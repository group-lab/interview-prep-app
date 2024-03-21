import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Landing,
  AllQuestions,
  Question,
  Topics,
  Contribute,
  Login,
  Signup,
  Dashboard,
  About,
  Favourites,
  Settings,
  Help,
  Error,
} from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Landing />} /> */}
          <Route path="/landing" element={<Landing />} /> {/*I have added Landing like this so i can work from in on the Landing page of the Nav */}
          <Route path="/questions" element={<AllQuestions />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />     
          <Route path="/about" element={<About />} />     
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
