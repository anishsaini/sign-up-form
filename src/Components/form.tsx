import react, { useState } from "react";

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
        <div className="first-name">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="last-name">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="email">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="submit">
          <button>Submit</button>
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
          <div className="table-row">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
