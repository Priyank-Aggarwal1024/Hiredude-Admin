import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Application from "./pages/Application";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CommonLayout from "./components/CommonLayout";
import CreateJob from "./pages/CreateJob";
import JobDetailPage from "./pages/JobDetailPage";

function App() {
  return (
    <>
      <div className="hiredude min-h-screen w-screen max-w-screen">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route
                path="/"
                element={
                  <CommonLayout>
                    <Outlet />
                  </CommonLayout>
                }
              >
                <Route index element={<Application />} />
                <Route path="create-job" element={<CreateJob />} />
                <Route path="job/:jobId/:filter" element={<JobDetailPage />} />
              </Route>

              <Route path="/hired-candidates" element={<CommonLayout />} />
              <Route path="/companies" element={<CommonLayout />} />
              <Route path="/master-database" element={<CommonLayout />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
