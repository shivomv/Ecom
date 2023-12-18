import React, { Suspense } from 'react';
import routes from '../routes';
import { Container } from 'react-bootstrap';
import { Route, Routes, Navigate } from 'react-router-dom';

const MainBodyComponent = () => {
  return (
    <>
      <Container fluid>
        <Container>
          <Suspense fallback="Loading...">
            <Routes>
              {routes.map((route, idx) => {
                if (route.element) {
                  return (
                    <Route
                      key={route.name || idx} // Use route.name or idx as the key
                      path={route.path}
                      name={route.name}
                      element={<route.element />}
                      exact={route.exact}
                    />
                  );
                } else {
                  // Handle the case where route.element is falsy
                  // You might want to render a fallback component or redirect to an error page
                  return <Route key={idx} path="/" element={<Navigate to="/Home" replace />} />;
                }
              })}
            </Routes>
          </Suspense>
        </Container>
      </Container>
    </>
  );
};

export default MainBodyComponent;
