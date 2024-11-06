import { useEffect, useState } from 'react'
import { API_URL } from './api_config';
import './App.css'

interface ApiResponse {
  title: string;
  completed: boolean;
};

function App() {
  const [data, setData] = useState<ApiResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result:ApiResponse[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[])
  

  return (
    <>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.title}> 
              <span>{item.title}</span>
              <span> - Completed:{item.completed.toString()}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  )
}

export default App
