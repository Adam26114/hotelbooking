import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Room from "./container/Room";
import RootLayout from "./layouts/RootLayout";
import Checkout from "./container/Checkout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Landing />} />
            <Route path="/rooms/:roomId" element={<Room />} />
            <Route path="/checkout" element={<Checkout />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
