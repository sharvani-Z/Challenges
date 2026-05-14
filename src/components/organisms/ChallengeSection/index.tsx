import { useMemo, useState } from "react";
import ChallengeList from "components/organisms/ChallengeList/index";
import SearchBar from "components/molecules/SearchBar/index";
import { Challenge } from "../../../types";
import { ChallengeAPI } from "services/ChallengeAPI";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";

type ChallengeSectionProps = {
  challenges: Challenge[];
  onToggleStatus: (challenge: Challenge) => void;
  loading: boolean;
};

function ChallengeSection({
  challenges,
  onToggleStatus,
  loading,
}: Readonly<ChallengeSectionProps>) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChallenges = useMemo(
    () =>
      challenges.filter((challenge) =>
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [challenges, searchQuery],
  );

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <Paper sx={{ p: 3, bgcolor: "background.paper" }}>
        <Typography variant="h6" gutterBottom>
          Active Challenges ({loading ? "..." : filteredChallenges.length})
        </Typography>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <ChallengeList
            challenges={filteredChallenges}
            onToggleStatus={onToggleStatus}
          />
        )}
      </Paper>
    </Box>
  );
}

export default ChallengeSection;
