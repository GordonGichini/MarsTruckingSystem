import {HomePage, SignInSide, SignUpSide, ErrorPage, Dashboard} from "./pages";
import { Trips } from "./features";
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
        <Route path="/login" element={<SignInSide/>} />
        <Route path="/signup" element={<SignUpSide/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/Dispatches" element={<Trips/>} />
      </Routes>
      </ScopedCssBaseline>
    </div>
  );
}

export default App;

