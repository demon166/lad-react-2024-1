import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-secondary" onClick={() => navigate(-1)}>
      Назад
    </button>
  );
};

export default ButtonBack;
