import { useState } from "react";
import "../App.css";
const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rows, setRows] = useState<
    Array<{
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }>
  >([]);

  const storedata = () => {
    setRows([...rows, { firstName, lastName, email, password }]);
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Sign Up</h1>
        <div className="first-name">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="last-name">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="email">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit">
          <button onClick={storedata}>Submit</button>
        </div>
      </div>
      <div className="table">
        <div className="table-header">
          <div className="table-row">
            <div className="table-cell">First Name</div>
            <div className="table-cell">Last Name</div>
            <div className="table-cell">Email</div>
            <div className="table-cell">Password</div>
          </div>
        </div>

        <div className="table-body">
          {rows.map((row, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{row.firstName}</div>
              <div className="table-cell">{row.lastName}</div>
              <div className="table-cell">{row.email}</div>
              <div className="table-cell">{row.password}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
