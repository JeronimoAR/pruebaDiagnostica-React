import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './views/Home.jsx'
import NotFound from './views/NotFound.jsx'

//Descomentar y comentar para obtener los libros predeterminados
// import books from "./assets/books.json"

import Verify from './views/Verify.jsx'
import Popular from './views/Popular.jsx'
import Search from './views/Search.jsx'
import Manage from "./views/Manage.jsx"
import Recent from './views/Recent.jsx'
import CreateBook from './views/CreateBook.jsx'
import EditBook from './views/EditBook.jsx'

function App() {
  useEffect(() => {
    // localStorage.setItem("books", JSON.stringify(books))
    const online = localStorage.getItem("online")

    if (online == null) {
      localStorage.setItem("online", false)
    }

  })

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/verify", element: <Verify /> },
    { path: "/manage", element: <Manage /> },
    { path: "/manage/editBook/:isbn", element: <EditBook /> },
    { path: "/manage/create", element: <CreateBook /> },
    { path: "/popular", element: <Popular /> },
    { path: "/recent", element: <Recent /> },
    { path: "/search", element: <Search /> },
    { path: "/*", element: <NotFound /> }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
