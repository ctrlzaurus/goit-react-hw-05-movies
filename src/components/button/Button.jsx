import { useNavigate, useLocation } from 'react-router-dom';
import d from './button.module.css';

const Button = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBackBtnClick = () => {
    const prevPageLoacation = location.state;
    navigate(prevPageLoacation);
  };

  return (
    <button onClick={handleGoBackBtnClick} className={d.btn}>
      Go back
    </button>
  );
};

export default Button;