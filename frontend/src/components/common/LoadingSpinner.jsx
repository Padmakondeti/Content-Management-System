import { CircularProgress, Box } from "@mui/material";

function LoadingSpinner() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ py: 5 }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner;