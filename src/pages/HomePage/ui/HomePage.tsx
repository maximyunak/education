import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </div>
  );
};
