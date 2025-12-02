import { Link} from "react-router";
import "./Navbar.Module.css"
export default function NavbarPage() {
  return ( 
<>
<div className="nav">
  <div className="container bg-linear-to-br via-purple-950 to-black">
    <div className="btn" ><Link to="/">Home</Link></div>
    <div className="btn"><Link to="/Skills">Skills</Link></div>
    <div className="btn"><Link to="/Projects">Projects</Link></div>
    <div className="btn"><Link to="/Contact">Contact</Link></div>
    <svg
      className="outline"
      overflow="visible"
      width="400"
      height="60"
      viewBox="0 0 400 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        pathLength="100"
        x="0"
        y="0"
        width="400"
        height="60"
        fill="transparent"
        stroke-width="5"
      ></rect>
    </svg>
  </div>
</div>
</>
  );
}

