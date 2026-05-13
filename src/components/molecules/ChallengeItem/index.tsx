import Badge from "components/atoms/Badge/index";
import Button from "components/atoms/Button/index";
import { Challenge } from "../../types";
import { Box, Typography } from "@mui/material";

type ChallengeItemProps = {
  challenge: Challenge;
  onAction?: () => void;
};

function ChallengeItem({ challenge, onAction }: ChallengeItemProps) {
  const actionLabel =
    challenge.status === "Pending" ? "Mark Completed" : "Mark Pending";

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        p: 2,
        borderRadius: 3,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="subtitle1" sx={{ color: "text.primary" }}>
          {challenge.title}
        </Typography>
        <Badge status={challenge.status} />
      </Box>
      <Button label={actionLabel} variant="secondary" onClick={onAction} />
    </Box>
  );
}

export default ChallengeItem;
