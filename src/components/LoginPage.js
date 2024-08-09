
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const [isJobSeeker, setIsJobSeeker] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Here you would add your authentication logic
//     // If login is successful, navigate to JobList page
//     navigate('/jobs');
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         <div className="tabs">
//           <button
//             className={isJobSeeker ? 'active' : ''}
//             onClick={() => setIsJobSeeker(true)}
//           >
//             Job Seeker Login
//           </button>
//           <button
//             className={!isJobSeeker ? 'active' : ''}
//             onClick={() => setIsJobSeeker(false)}
//           >
//             Company Login
//           </button>
//         </div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Login</button>
//         <p>
//           Don't have an account? <a href="/signup">Sign up here</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Ensure you have a CSS file for styling

function LoginPage() {
  const [isJobSeeker, setIsJobSeeker] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isJobSeeker) {
      // Handle job seeker login logic
      navigate('/jobs');
    } else {
      // Handle company login logic
      if (email === 'techcorp@gmail.com' && password === 'tech1234') {
        navigate('/techcorp-dashboard');
      } else if (email === 'innovate@gmail.com' && password === 'innovate123') {
        navigate('/innovate-dashboard');
      } else if (email === 'creativemind@gmail.com' && password === 'creative123') {
        navigate('/creativemind-dashboard');
      } else if (email === 'cryptex@gmail.com' && password === 'cryptex123') {
        navigate('/cryptex-dashboard');
      } else if (email === 'cloudteam@gmail.com' && password === 'cloud123') {
        navigate('/cloudteam-dashboard');
      } else if (email === 'devshand@gmail.com' && password === 'devs123') {
        navigate('/devshand-dashboard');
      } else if (email === 'nextgen@gmail.com' && password === 'nextgen123') {
        navigate('/nextgen-dashboard');
      } else if (email === 'teamcode@gmail.com' && password === 'teamcode123') {
        navigate('/teamcode-dashboard');
      } else {
        alert('Invalid email or password');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div className="tabs">
          <button
            className={isJobSeeker ? 'active' : ''}
            onClick={() => setIsJobSeeker(true)}
          >
            Job Seeker Login
          </button>
          <button
            className={!isJobSeeker ? 'active' : ''}
            onClick={() => setIsJobSeeker(false)}
          >
            Company Login
          </button>
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
