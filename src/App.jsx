import { lazy, Suspense } from 'react';
import { Banner } from './components/Banner';
import { Counter } from './components/Counter';
import { Header, Layout } from 'components/Layout';
// import { Timer } from 'components/Timer/Timer';
import { Skills } from 'components/Skills/Skills';
import { skillsList } from 'config';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { UsersList } from 'components/Users';
import { Navigate, Route, Routes } from 'react-router';
import UsersPage from 'pages/UsersPage/UsersPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserDataThunk } from 'redux/user/user.thunk';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SinglePostPage = lazy(() => import('pages/SinglePostPage/SinglePostPage'));
const TasksPage = lazy(() => import('pages/TasksPage/TasksPage'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const JoinPage = lazy(() => import('./pages/JoinPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataThunk());
  }, []);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>HomePage...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/tasks" element={<TasksPage />}>
              <Route index element={<p>Choose task please</p>} />
              <Route path="skills" element={<Skills name="skills" list={skillsList} />} />
              <Route path="banner" element={<Banner />} />
              <Route path="counter" element={<Counter />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
    //
    //
    //   <Counter defaultValue={5465} test="Hello" bool={false} />
    //   <Banner />
    //   {/* <UsersList /> */}
    //   {/* <Skills name="skills" list={skillsList} /> */}
    //
    // </Layout>
  );
};
