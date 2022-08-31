import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import Error from '../components/Error';

export default function Home() {
  const count = 25;
  const [res, setRes] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/posts?count=${count}`);
        const data = await response.json();
        setRes(data);
      } catch (error) {
        setErr(error);
        return error;
      }
    };

    fetchData();
  }, [count]);

  if (!res) return <Loading />;

  if (err) return <Error />;

  return (
    <>
      <div className={styles.main}>
        <Nav go_home={false} />

        {res.map((obj) => {
          return (
            <Card
              key={obj.id}
              link={obj.picture || '/images/no-image.jpg'}
              copyright={obj.copyright}
              title={obj.title}
              time={obj.date}
              desc={obj.explanation}
            />
          );
        })}
      </div>
    </>
  );
}
