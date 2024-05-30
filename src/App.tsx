import stackline_logo from './assets/stackline_logo.svg';
import './App.css';
import jsonData from './data/stackline_frontend_assessment_data_2021.json';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import {setProductInfo} from './productInfoSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductInfo(jsonData[0]));
  }, [dispatch]);

  return (
    <div className="body">
      <Banner />
      <div className='main'>
        <LeftPane />
        <RightPane />
      </div>
    </div>
  );
}

function Banner() {
  return <div className='banner'><img className='banner-logo' src={stackline_logo} alt="Stackline logo" /></div>;
}

export default App;