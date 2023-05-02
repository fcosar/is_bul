import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AddJob from './pages/addJob';
import JobList from './pages/jobList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;