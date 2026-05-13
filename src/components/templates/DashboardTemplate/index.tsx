import { useEffect, useMemo, useState } from "react";
import Navbar from "components/organisms/Navbar/index";
import Sidebar from "components/organisms/Sidebar/index";
import ChallengeList from "components/organisms/ChallengeList/index";
import AddChallengeForm from "components/organisms/AddChallengeForm/index";
import SearchBar from "components/molecules/SearchBar/index";
import { Challenge } from "../../types";
import { ChallengeAPI } from "services/ChallengeAPI";
import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";

function DashboardTemplate() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      setLoading(true);
      const data = await ChallengeAPI.getAll();
      setChallenges(data);
      setLoading(false);
    };

    void fetchChallenges();
  }, []);

  const handleAddChallenge = async (newChallenge: Omit<Challenge, "id">) => {
    const createdChallenge = await ChallengeAPI.create(newChallenge);

    if (createdChallenge) {
      setChallenges((prev) => [...prev, createdChallenge]);
      return;
    }

    console.warn("Challenge API failed, adding challenge only locally.");
    setChallenges((prev) => [
      ...prev,
      {
        ...newChallenge,
        id: Date.now().toString(),
      },
    ]);
  };

  const handleToggleStatus = async (challenge: Challenge) => {
    const nextStatus = challenge.status === "Pending" ? "Completed" : "Pending";
    const updated = await ChallengeAPI.updateStatus(challenge.id, nextStatus);

    setChallenges((prev) =>
      prev.map((item) =>
        item.id === challenge.id ? { ...item, status: nextStatus } : item,
      ),
    );

    if (updated) {
      return;
    }
  };

  const filteredChallenges = useMemo(
    () =>
      challenges.filter((challenge) =>
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [challenges, searchQuery],
  );

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Navbar />
      <Box>
        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
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
                onToggleStatus={handleToggleStatus}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, bgcolor: "background.paper" }}>
            <AddChallengeForm onAddChallenge={handleAddChallenge} />
          </Paper>
        </Grid>
      </Grid>
      <Sidebar />
    </Box>
  );
}

export default DashboardTemplate;
