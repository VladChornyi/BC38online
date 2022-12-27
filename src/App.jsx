import { Banner } from './components/Banner';
import { Counter } from './components/Counter';
import { Header, Layout } from 'components/Layout';
// import { Skills } from 'components/Skills/Skills';
// import { skillsList } from 'config';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { UsersList } from 'components/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Counter defaultValue={5465} test="Hello" bool={false} />
      <Banner />

      {/* <UsersList /> */}
      {/* <Skills name="skills" list={skillsList} /> */}
      <br />
      {/* <LoginForm /> */}
    </Layout>
  );
};
