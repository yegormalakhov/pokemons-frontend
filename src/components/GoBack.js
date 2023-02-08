import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="btn-primary btn"
      variant="outlined"
      onClick={() => navigate(-1)}
    >
      Go Back
    </Button>
  );
};

export default GoBack;
