import { Banner } from './components/Banner';
import { Counter } from './components/Counter';
import { Header, Layout } from 'components/Layout';
// import { Timer } from 'components/Timer/Timer';
import { Skills } from 'components/Skills/Skills';
import { skillsList } from 'config';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { UsersList } from 'components/Users';

import { AuthProvider } from 'context/AuthContext';
import { Route, Routes } from 'react-router';
import HomePage from 'pages/HomePage/HomePage';
import { PostsPage } from 'pages/PostsPage/Posts';
import TasksPage from 'pages/TasksPage/TasksPage';
import SinglePostPage from 'pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/tasks" element={<TasksPage />}>
            <Route index element={<p>Choose task please</p>} />
            <Route path="skills" element={<Skills name="skills" list={skillsList} />} />
            <Route path="banner" element={<Banner />} />
            <Route path="counter" element={<Counter />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
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
