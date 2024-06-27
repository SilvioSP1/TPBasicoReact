import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Layaout from "./pages/Layaout";
import Loader from './components/Loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />,
    loader: Loader,
    children: [
      {
        path: "",
        element: <CharacterList />,
        loader: Loader
      },
      {
        path: "/character/:id",
        element: <CharacterDetail />,
        loader: Loader,
      }
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

