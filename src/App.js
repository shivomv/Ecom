import './App.css';
import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Containers
const DefaultLayout = React.lazy(() => import('./Layout/Defaultlayout'))


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense feedback={<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}>
          <Routes>
            <Route index element={<DefaultLayout />} />
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
