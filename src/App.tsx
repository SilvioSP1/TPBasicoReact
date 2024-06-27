import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Layaout from "./pages/Layaout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />,
    children: [
      {
        path: "",
        element: <CharacterList />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetail />,
      }
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

