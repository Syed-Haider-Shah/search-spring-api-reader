import { DisplayCard } from '../../Components';
import axios from 'axios';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import '../index.css'


const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback (async () => {
    try {
      const response = await axios.get('https://api.searchspring.net/api/search/search.json', {
        params: {
          siteId: 'scmq7n',
          q: '',
          resultsFormat: 'native',
          page: 1
        }
      });
      setData(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [])

useEffect(() => { 
  const getData = async () => { 
    await fetchData(); 
  }; 
    getData(); 
  }, [fetchData]);

  return (
    <div className='home'>
      {data.map(
        (item) => {
          return(<>
            <DisplayCard key={item.id} name={item.name} price={item.price} msrp={item.msrp} image ={item.thumbnailImageUrl}/>
            </>)
        }
      )}
    </div>
  );
}

export default Home;