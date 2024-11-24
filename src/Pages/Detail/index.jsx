import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DisplayCard, Pagination } from '../../Components';
import axios from 'axios';

const Detail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchKey = searchParams.get('search');
  const page = searchParams.get('page');
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState(null);
  const [pageSelector, setPage] = useState(page);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.searchspring.net/api/search/search.json', {
          params: {
            siteId: 'scmq7n',
            q: searchKey,
            resultsFormat: 'native',
            page: page
          }
        });
        setData(response.data.results); // results array is hydrated
        setPageData(response.data.pagination);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchKey) {
      fetchData();
    }
  }, [searchKey, page]);

  return (
    <>
      <h1>Detail Page</h1> {/*change font*/}
      <Pagination/>
      <div className='details-page'>
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
