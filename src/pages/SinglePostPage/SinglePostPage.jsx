import GoBack from 'components/GoBack/GoBack';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectUsersItems } from 'redux/users/selector';
import { getSinglePostService } from 'services/posts.service';

const SinglePostPage = () => {
  const { postId } = useParams();
  const [postData, setPostdata] = useState(null);
  const [submitQuery, setSubmitQuery] = useState('');
  const usersItems = useSelector(selectUsersItems);

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
  }, [submitQuery]);

  useEffect(() => {
    getSinglePostService(postId).then(data => {
      setPostdata(data);
    });
  }, []);

  return (
    <section ref={sectionRef}>
      {/* <button type="button" onClick={() => setSubmitQuery('')}>
        click me
      </button> */}
      <GoBack />
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
