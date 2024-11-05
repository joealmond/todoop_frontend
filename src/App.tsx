import { useEffect, useState } from 'react'
import { API_URL } from './api_config';
import './App.css'

interface ApiResponse {
  title: string;
  description: string;
};

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[])
  

  return (
    <>
        {data 
        ? 
        <div>
          <h4>{data.title}</h4>
          <p>{data.description}</p> 
        </div>
        : 
        <p>Loading data...</p>}
    </>
  )
}

export default App
