import { Button } from 'components/Button';
import GoBack from 'components/GoBack/GoBack';
import { Header } from 'components/Layout';
import { useFirstRender } from 'hooks/useFirstRender';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const [params, setParams] = useSearchParams();
  // const savedQuery = params.get('query');
  const [query, setQuery] = useState(null);
  const location = useLocation();
  const [isFirstRender, setSecondRender] = useFirstRender();
  const [imgsURL, setImgsURL] = useLocalStorage('images', []);

  // const [imgsURL, setImgsURL] = useState([]);

  // useEffect(() => {
  //    const data = localStorage.getItem('images');
  //    if (data) {
  //      setImgsURL(JSON.parse(data))
  //    }
  // },[])

  const allParams = [...params].reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setParams({ ...allParams, query });
    setImgsURL(prevImgsURL => [...prevImgsURL, query]);
  };

  useEffect(() => {
    if (!isFirstRender) {
      return console.log('Запит');
    }
    setSecondRender();
  }, [query]);

  return (
    <>
      <Header title="Home page" />
      <GoBack />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="find something" onChange={handleChange} value={query} />
        <Button type="submit">Search</Button>
      </form>
    </>
  );
}
