import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home.jsx'
import NotFound from './views/NotFound.jsx'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NotFound />}
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
