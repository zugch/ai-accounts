import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppList from './components/AppList';
import AppFaqComponent from './components/AppFaqComponent';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppList/>}/>
                <Route path="/app/:uid" element={<AppFaqComponent/>}/>
            </Routes>
        </Router>
    );
}

export default App;