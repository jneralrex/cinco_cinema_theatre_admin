import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Nav from "./components/Nav";
import DashBoard from "./pages/DashBoard";
import MovieManagement from "./pages/MovieManagement";
import TheatreManagement from "./pages/TheatreManagement";
import Global from "./components/globalController/Global";
import GeneralSettings from "./pages/GeneralSettings";
import Report from "./pages/Report";
import ClassManagement from "./Pages/ClassManagement.jsx";
import SeatBlockingManagement from "./Pages/SeatBlockingManagement.jsx";
import SeatingRowManagement from "./Pages/SeatingRowManagement.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route element={<Nav />}>
        <Route path="/dashboard" element={<DashBoard />} />
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
