import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () =>
{
    const dispatch = useDispatch();
    const { score } = useSelector(state => state);
    const navigate = useNavigate();

    const handleBackToSettings = () =>
    {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        navigate("/");
    }

    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>Your Score: {score}</Typography>
            <Button variant="outlined" onClick={handleBackToSettings}> Play Again </Button>
        </Box>
    );
}
export default FinalScreen;
