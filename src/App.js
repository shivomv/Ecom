import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// Containers
const DefaultLayout = React.lazy(() => import('./Layout/Defaultlayout'))


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense feedback={"Loading..."}>
          <Routes>
            <Route index element={<DefaultLayout />} />
            <Route path="login/" element={<>Login Page Here</>} />
            <Route path="register/" element={<>Resister</>} />
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
