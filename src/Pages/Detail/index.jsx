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
  const [pageData, setPageData] = useState('no');

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
      {data.length !== 0 ? (
        <>
          <h1>Detail Page</h1>
          <Pagination pageData={pageData} />
          <div className='details-page'>
            {data.map((item) => (
              <DisplayCard
                key={item.id}
                name={item.name}
                price={item.price}
                msrp={item.msrp}
                image={item.thumbnailImageUrl}
              />
            ))}
          </div>
        </>
      ) : (
        pageData !== 'no' ? (
          <div>No Results</div>
        ) : (
          <div>Loading...</div>
        )
      )}
    </>
  );
};

export default Detail;
