import "./topbar.css";
import { Search, Home, Person, Chat, Notifications} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  let navigate = useNavigate(); 
  const routeLogin = () =>{ 
    navigate("/");
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        {/* <span className="logo">Fka Social Media</span> */}
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
           {/* <span className="topbarLink">Home Page</span> */}
        </div>
        <div className="topbarIcons">
        <div className="topbarIconItem">
          <a href="/home" className="btn">
            <Home />
            </a>
          </div>
          &nbsp; 
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">10</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">8</span>
          </div>
          &nbsp; &nbsp;
          <a href="/profile">
        <img src="/assets/person/7.jpeg" alt="" className="topbarImg"/>
          </a>
        
        </div>
        <button className="btn" onClick={routeLogin}> Logout</button>
      </div>
    </div>
  );
}
