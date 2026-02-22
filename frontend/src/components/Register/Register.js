import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card" onClick={() => navigate("/register/user")}>
        <h2>Register as User</h2>
        <p>Apply for jobs</p>
      </div>

      
    </div>
  );
}

export default Register;
