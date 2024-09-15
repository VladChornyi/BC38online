import { ConfettiContainer, EasterEgg } from 'components/Service';
import { PropTypes } from 'prop-types';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar/Sidebar';

export const Layout = () => {
  return (
    <>
      <div className="d-flex h-100">
        <Sidebar />

        <main className="tab-content p-5 h-100" style={{ minHeight: '100vh', width: 'calc(100% - 300px)' }}>
          <div className="tab-pane fade show active">
            <Outlet />
          </div>
        </main>

        <ConfettiContainer />
      </div>
    </>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
