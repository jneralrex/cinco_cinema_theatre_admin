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

import MovieManagement from "./pages/MovieManagement";
import TheatreManagement from "./pages/TheatreManagement";
import Global from "./components/globalController/Global";
import Tickets from "./pages/Tickets";


import Report from "./pages/Report";
import ClassManagement from "./pages/ClassManagement";
import SeatBlockingManagement from "./pages/SeatBlockingManagement";
import SeatingRowManagement from "./pages/SeatingRowManagement";
import VerifyOtp from "./auth/VerifyOtp";
import ResendOtp from "./auth/ResendOtp";
import ForgotPassword from "./auth/ForgotPassword";
import RecoverPassword from "./auth/RecoverPassword";

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
