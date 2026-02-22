import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card" onClick={() => navigate("/login/user")}>
        <h2>Login as User</h2>
        <p>Find & apply for jobs</p>
      </div>

      <div className="auth-card admin" onClick={() => navigate("/login/admin")}>
        <h2>Login as Admin</h2>
        <p>Post & manage jobs</p>
      </div>
    </div>
  );
}

export default Login;
