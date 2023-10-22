import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Hello home</h1>
      <div className="button" onClick={() => navigate("/login")}>
        Logout
      </div>
    </div>
  );
};

export default Home;
