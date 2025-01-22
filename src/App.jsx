import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./auth/SignIn.jsx";
import SignUp from "./auth/SignUp.jsx";
import Nav from "./components/Nav.jsx";

import MovieManagement from "./pages/MovieManagement.jsx";
import TheatreManagement from "./pages/TheatreManagement.jsx";
import Global from "./components/globalController/Global.jsx";
import Tickets from "./pages/Tickets.jsx";


import Report from "./pages/Report.jsx";
import ClassManagement from "./pages/ClassManagement.jsx";
import SeatBlockingManagement from "./pages/SeatBlockingManagement.jsx";
import SeatingRowManagement from "./pages/SeatingRowManagement.jsx";
import VerifyOtp from "./auth/VerifyOtp.jsx";
import ResendOtp from "./auth/ResendOtp.jsx";
import ForgotPassword from "./auth/ForgotPassword.jsx";
import RecoverPassword from "./auth/RecoverPassword.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/otp" element={<VerifyOtp />} />
      <Route path="/resend-otp" element={<ResendOtp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<RecoverPassword />} />

      <Route element={<Nav />}>
      
        <Route path="/class" element={<ClassManagement />} />
        <Route path="/movie-management" element={<MovieManagement />} />
        <Route path="/row-management" element={<SeatingRowManagement />} />
        <Route path="/seat-blocking" element={<SeatBlockingManagement />} />
        <Route path="/theatre-management" element={<TheatreManagement />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/report" element={<Report />} />
      
      </Route>

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Route>
  )
);

const App = () => {
  return (
    <Global>
      <RouterProvider router={router} />
    </Global>
  );
};

export default App;
