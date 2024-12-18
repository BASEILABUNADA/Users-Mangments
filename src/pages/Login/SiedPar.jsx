import { NavLink } from "react-router-dom";
const SiedPar = () => {

  return (
    <div >
          <NavLink style={{margin:20}} to="/users">User List</NavLink>
          <NavLink style={{margin:20}} to="/users/profile" >profile</NavLink>
    </div>
  );
};

export default SiedPar;