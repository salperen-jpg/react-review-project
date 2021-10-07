import './App.css';
import Review from './Components/Review/Review';

function App() {
  return (
    <main>
      <div className='container'>
        <h1>Reviews</h1>
        <div className='underline'></div>
        <Review />
      </div>
    </main>
  );
}

export default App;
