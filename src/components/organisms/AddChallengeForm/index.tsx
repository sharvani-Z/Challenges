import { useState, type ChangeEvent } from "react";
import Button from "components/atoms/Button/index";
import { Box, TextField, Typography } from "@mui/material";
import { Challenge } from "../../types";

type AddChallengeFormProps = {
  onAddChallenge?: (challenge: Omit<Challenge, "id">) => void;
};

function AddChallengeForm({ onAddChallenge }: AddChallengeFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (title.trim()) {
      onAddChallenge?.({
        title: title.trim(),
        status: "Pending",
      });
      setTitle("");
    }
  };

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h6" color="text.primary">
        Add a new challenge
      </Typography>
      <TextField
        label="Challenge title"
        placeholder="Design a new task section"
        value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
        fullWidth
      />
      <Button
        label={title ? "Create challenge" : "Enter title"}
        variant="primary"
        onClick={handleSubmit}
      />
    </Box>
  );
}

export default AddChallengeForm;
