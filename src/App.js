import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackItem from './components/FeedbackItem';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  //app level state or global state
  // const [feedback, setFeedback] = useState(FeedbackData)
 

return (
  <FeedbackProvider>
      <Router>
        <Header />   
        <div className="container">
          <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              {/* since feedack is the state, whenever it chnages, it updates in the feedback stats  */}
              <FeedbackList  />
            </>
          }>
          
          </Route>

          <Route path='/about' element={<About />}/> 
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
