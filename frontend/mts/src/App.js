import {HomePage, SignInSide,ErrorPage, Dashboard} from "./pages";
import {Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';


function App() {
  return (
    <div className="App">
        <ScopedCssBaseline>
        <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </ScopedCssBaseline>
    </div>
  );
}

export default App;

