import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { getSinglePostService } from 'services/posts.service';

const SinglePostPage = () => {
  const { postId } = useParams();
  const [postData, setPostdata] = useState(null);
  const [submitQuery, setSubmitQuery] = useState('');

  const isFirstRender = useRef(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!submitQuery) {
      return alert('Введіть дані');
    }
    getSinglePostService(postId).then(data => {
      console.log('запит');
    });
  }, [submitQuery]);

  useEffect(() => {
    getSinglePostService(postId).then(data => {
      setPostdata(data);
    });
  }, []);

  return (
    <section ref={sectionRef}>
      <button type="button" onClick={() => setSubmitQuery('')}>
        click me
      </button>
      {postData && (
        <>
          <img style={{ maxWidth: '100%' }} src={postData.image} />
          <h2>{postData.title}</h2>
          <p>{postData.content}</p>
        </>
      )}
    </section>
  );
};

export default SinglePostPage;
