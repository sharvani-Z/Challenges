import ChallengeItem from "components/molecules/ChallengeItem/index";
import { Challenge } from "../../types";
import { Box, Typography } from "@mui/material";

type ChallengeListProps = {
  challenges: Challenge[];
  onToggleStatus?: (challenge: Challenge) => void;
};

function ChallengeList({ challenges, onToggleStatus }: ChallengeListProps) {
  if (challenges.length === 0) {
    return (
      <Typography color="text.secondary" sx={{ m: 0 }}>
        No challenges yet. Add a task to get started.
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      {challenges.map((challenge) => (
        <ChallengeItem
          key={challenge.id}
          challenge={challenge}
          onAction={() => onToggleStatus?.(challenge)}
        />
      ))}
    </Box>
  );
}

export default ChallengeList;
