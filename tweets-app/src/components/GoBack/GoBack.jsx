import { useNavigate } from "react-router-dom";

export const GoBack = () => {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="Button Go-Ba-Bt">
      Back to Home
    </button>
  );
};
