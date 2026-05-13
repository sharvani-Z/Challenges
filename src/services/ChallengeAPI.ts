import axios, { AxiosInstance, AxiosError } from "axios";
import { Challenge } from "../components/types";

// Create axios instance with base configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 5 seconds timeout
});

// Error handler utility
const handleError = (error: AxiosError | unknown, action: string) => {
  if (axios.isAxiosError(error)) {
    console.error(`${action} failed:`, error.response?.status, error.message);
  } else {
    console.error(`${action} failed:`, error);
  }
  return null;
};

export const ChallengeAPI = {
  // ====== GET REQUESTS ======

  // Get all challenges (async/await)
  async getAll(): Promise<Challenge[]> {
    try {
      const response = await axiosInstance.get<Challenge[]>("/challenges");
      return response.data;
    } catch (error) {
      handleError(error, "Get all challenges");
      return [];
    }
  },

  // Get all challenges (using promises)
  getAllWithPromises(): Promise<Challenge[]> {
    return axiosInstance
      .get<Challenge[]>("/challenges")
      .then((response) => response.data)
      .catch((error) => {
        handleError(error, "Get all challenges (Promise)");
        return [];
      });
  },

  // Get a single challenge by ID (async/await)
  async getById(id: string): Promise<Challenge | null> {
    try {
      const response = await axiosInstance.get<Challenge>(`/challenges/${id}`);
      return response.data;
    } catch (error) {
      handleError(error, `Get challenge ${id}`);
      return null;
    }
  },

  // Get a single challenge by ID (using promises)
  getByIdWithPromises(id: string): Promise<Challenge | null> {
    return axiosInstance
      .get<Challenge>(`/challenges/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        handleError(error, `Get challenge ${id} (Promise)`);
        return null;
      });
  },

  // ====== POST REQUESTS (CREATE) ======

  // Create a new challenge (async/await)
  async create(challenge: Omit<Challenge, "id">): Promise<Challenge | null> {
    try {
      const response = await axiosInstance.post<Challenge>(
        "/challenges",
        challenge,
      );
      return response.data;
    } catch (error) {
      handleError(error, "Create challenge");
      return null;
    }
  },

  // Create a new challenge (using promises)
  createWithPromises(
    challenge: Omit<Challenge, "id">,
  ): Promise<Challenge | null> {
    return axiosInstance
      .post<Challenge>("/challenges", challenge)
      .then((response) => response.data)
      .catch((error) => {
        handleError(error, "Create challenge (Promise)");
        return null;
      });
  },

  // ====== PATCH REQUESTS (UPDATE) ======

  // Update an existing challenge (async/await)
  async update(
    id: string | number,
    challenge: Partial<Challenge>,
  ): Promise<Challenge | null> {
    try {
      const response = await axiosInstance.patch<Challenge>(
        `/challenges/${id}`,
        challenge,
      );
      return response.data;
    } catch (error) {
      handleError(error, `Update challenge ${id}`);
      return null;
    }
  },

  // Update an existing challenge (using promises)
  updateWithPromises(
    id: string | number,
    challenge: Partial<Challenge>,
  ): Promise<Challenge | null> {
    return axiosInstance
      .patch<Challenge>(`/challenges/${id}`, challenge)
      .then((response) => response.data)
      .catch((error) => {
        handleError(error, `Update challenge ${id} (Promise)`);
        return null;
      });
  },

  // ====== DELETE REQUESTS ======

  // Delete a challenge (async/await)
  async delete(id: string | number): Promise<boolean> {
    try {
      await axiosInstance.delete(`/challenges/${id}`);
      return true;
    } catch (error) {
      handleError(error, `Delete challenge ${id}`);
      return false;
    }
  },

  // Delete a challenge (using promises)
  deleteWithPromises(id: string | number): Promise<boolean> {
    return axiosInstance
      .delete(`/challenges/${id}`)
      .then(() => true)
      .catch((error) => {
        handleError(error, `Delete challenge ${id} (Promise)`);
        return false;
      });
  },

  // ====== CONVENIENCE METHODS ======

  // Update challenge status (async/await)
  async updateStatus(
    id: string | number,
    status: "Completed" | "Pending",
  ): Promise<Challenge | null> {
    return this.update(id, { status });
  },

  // Update challenge status (using promises)
  updateStatusWithPromises(
    id: string | number,
    status: "Completed" | "Pending",
  ): Promise<Challenge | null> {
    return this.updateWithPromises(id, { status });
  },

  // Bulk operations example: Get all and filter
  async getAllCompleted(): Promise<Challenge[]> {
    try {
      const challenges = await this.getAll();
      return challenges.filter((c) => c.status === "Completed");
    } catch (error) {
      handleError(error, "Get all completed");
      return [];
    }
  },

  // Bulk operations with promises
  getAllCompletedWithPromises(): Promise<Challenge[]> {
    return this.getAllWithPromises()
      .then((challenges) => challenges.filter((c) => c.status === "Completed"))
      .catch((error) => {
        handleError(error, "Get all completed (Promise)");
        return [];
      });
  },

  // Get axios instance for custom requests
  getAxiosInstance(): AxiosInstance {
    return axiosInstance;
  },
};
