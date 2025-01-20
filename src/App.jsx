import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/Nav";
import MovieManagement from "./pages/MovieManagement.jsx";
import TheatreManagement from "./pages/TheatreManagement.jsx";
import Global from "./components/globalController/Global";
import GeneralSettings from "./pages/GeneralSettings.jsx";
import Report from "./pages/Report.jsx";
import ClassManagement from "./pages/ClassManagement.jsx";
import SeatBlockingManagement from "./pages/SeatBlockingManagement.jsx";
import SeatingRowManagement from "./pages/SeatingRowManagement.jsx";
import SignIn from "./auth/SignIn.jsx";
import SignUp from "./auth/SignUp.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route element={<Nav />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/class" element={<ClassManagement />} />
        <Route path="/seat-blocking" element={<SeatBlockingManagement />} />
        <Route path="/movie-management" element={<MovieManagement />} />
        <Route path="/theatre-management" element={<TheatreManagement />} />
        <Route path="/row-management" element={<SeatingRowManagement />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<GeneralSettings />} />
      </Route>
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Route>
  )
);

const App = () => {
  return (
    <Global>
      <RouterProvider router={router} />;
    </Global>
  );
};

export default App;
