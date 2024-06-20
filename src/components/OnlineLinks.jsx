import { Link } from "react-router-dom"

function OnlineLinks() {
    
  return (
    <div>
      <Link to="/manageBooks" >ManageBooks</Link>
      <Link to="/logOut" >Log out</Link>
    </div>
  )
}

export default OnlineLinks
