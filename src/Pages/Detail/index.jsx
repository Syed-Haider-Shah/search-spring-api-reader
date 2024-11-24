import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DisplayCard } from '../../Components';
import axios from 'axios';

const Detail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchKey = searchParams.get('search');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.searchspring.net/api/search/search.json', {
          params: {
            siteId: 'scmq7n',
            q: searchKey,
            resultsFormat: 'native',
            page: 1
          }
        });
        setData(response.data.results); // results array is hydrated
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchKey) {
      fetchData();
    }
  }, [searchKey]);

  return (
    <>
      <h1>Detail Page</h1>
      <div className='home'>
        {data.length > 0 ? data.map((item) => (
          <DisplayCard key={item.id} name={item.name} price={item.price} msrp={item.msrp} image={item.thumbnailImageUrl} />
        )) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Detail;
