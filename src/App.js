//import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import CreateWork from './components/CreateWork';
import WorkList from './components/WorkList';
import Nav from './components/Nav';
import EditWork from './components/EditWork';
import StudentView from './components/StudentView';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="Container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create-work" element={<CreateWork />} />
          <Route path="/work-list" element={<WorkList />} />
          <Route path="/edit-work/:id" element={<EditWork />} />
          <Route path="/student-view" element={<StudentView />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
