import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="btn-primary btn"
      variant="outlined"
      onClick={() => navigate("/")}
    >
      Start page
    </Button>
  );
};

export default GoBack;
