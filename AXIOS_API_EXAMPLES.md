# Axios API Examples - ChallengeAPI

Your API now uses **Axios** with both **async/await** and **Promise** patterns. The mock server runs on `http://localhost:3000`.

---

## Installation & Setup

Axios is already installed. The API is configured in `src/services/ChallengeAPI.ts` with:

- Base URL: `http://localhost:3000`
- Default headers: `Content-Type: application/json`
- Timeout: 5 seconds

---

## Usage Examples

### ✅ 1. GET ALL CHALLENGES

#### Using Async/Await:

```typescript
import { ChallengeAPI } from "services/ChallengeAPI";

async function fetchAllChallenges() {
  const challenges = await ChallengeAPI.getAll();
  console.log(challenges);
  // Output: [{ id: 1, title: "react", status: "Completed" }, ...]
}

fetchAllChallenges();
```

#### Using Promises:

```typescript
ChallengeAPI.getAllWithPromises()
  .then((challenges) => {
    console.log("Challenges:", challenges);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Using .finally():

```typescript
ChallengeAPI.getAllWithPromises()
  .then((challenges) => console.log(challenges))
  .catch((error) => console.error(error))
  .finally(() => console.log("Request completed"));
```

---

### ✅ 2. GET SINGLE CHALLENGE BY ID

#### Using Async/Await:

```typescript
async function getChallenge() {
  const challenge = await ChallengeAPI.getById(1);
  if (challenge) {
    console.log(challenge.title);
  }
}

getChallenge();
```

#### Using Promises:

```typescript
ChallengeAPI.getByIdWithPromises(1)
  .then((challenge) => {
    if (challenge) {
      console.log("Found:", challenge.title);
    }
  })
  .catch((error) => console.error(error));
```

---

### ✅ 3. CREATE NEW CHALLENGE (POST)

#### Using Async/Await:

```typescript
async function addChallenge() {
  const newChallenge = await ChallengeAPI.create({
    title: "Learn TypeScript",
    status: "Pending",
  });

  if (newChallenge) {
    console.log("Created:", newChallenge.id);
  }
}

addChallenge();
```

#### Using Promises:

```typescript
ChallengeAPI.createWithPromises({
  title: "Learn TypeScript",
  status: "Pending",
})
  .then((newChallenge) => {
    if (newChallenge) {
      console.log("Challenge ID:", newChallenge.id);
    }
  })
  .catch((error) => console.error("Failed to create:", error));
```

---

### ✅ 4. UPDATE CHALLENGE (PATCH)

#### Using Async/Await:

```typescript
async function updateChallenge() {
  const updated = await ChallengeAPI.update(1, {
    title: "Learn TypeScript Advanced",
    status: "Completed",
  });

  if (updated) {
    console.log("Updated:", updated);
  }
}

updateChallenge();
```

#### Using Promises:

```typescript
ChallengeAPI.updateWithPromises(1, { status: "Completed" })
  .then((updated) => console.log("Updated:", updated))
  .catch((error) => console.error(error));
```

---

### ✅ 5. UPDATE STATUS ONLY (Convenience Method)

#### Using Async/Await:

```typescript
async function toggleStatus() {
  const updated = await ChallengeAPI.updateStatus(1, "Completed");
  console.log(updated);
}

toggleStatus();
```

#### Using Promises:

```typescript
ChallengeAPI.updateStatusWithPromises(1, "Pending").then((updated) =>
  console.log(updated),
);
```

---

### ✅ 6. DELETE CHALLENGE (DELETE)

#### Using Async/Await:

```typescript
async function removeChallenge() {
  const success = await ChallengeAPI.delete(1);

  if (success) {
    console.log("Deleted successfully");
  } else {
    console.log("Failed to delete");
  }
}

removeChallenge();
```

#### Using Promises:

```typescript
ChallengeAPI.deleteWithPromises(1)
  .then((success) => {
    if (success) {
      console.log("Deleted");
    }
  })
  .catch((error) => console.error(error));
```

---

### ✅ 7. GET ALL COMPLETED CHALLENGES

#### Using Async/Await:

```typescript
async function getCompletedTasks() {
  const completed = await ChallengeAPI.getAllCompleted();
  console.log("Completed tasks:", completed);
}

getCompletedTasks();
```

#### Using Promises:

```typescript
ChallengeAPI.getAllCompletedWithPromises().then((completed) =>
  console.log("Completed:", completed),
);
```

---

## Advanced: Combining Multiple Requests

### Sequential Requests (Async/Await):

```typescript
async function workflow() {
  try {
    // Step 1: Create challenge
    const newChallenge = await ChallengeAPI.create({
      title: "New Task",
      status: "Pending",
    });

    if (!newChallenge) throw new Error("Failed to create");

    // Step 2: Update status
    const updated = await ChallengeAPI.updateStatus(
      newChallenge.id,
      "Completed",
    );
    console.log("Workflow complete:", updated);
  } catch (error) {
    console.error("Workflow error:", error);
  }
}

workflow();
```

### Parallel Requests (Promise.all):

```typescript
async function parallelFetch() {
  try {
    const [allChallenges, completed] = await Promise.all([
      ChallengeAPI.getAll(),
      ChallengeAPI.getAllCompleted(),
    ]);

    console.log("Total:", allChallenges.length);
    console.log("Completed:", completed.length);
  } catch (error) {
    console.error("Error:", error);
  }
}

parallelFetch();
```

### Chaining Promises:

```typescript
ChallengeAPI.getAllWithPromises()
  .then((challenges) => {
    console.log(`Found ${challenges.length} challenges`);
    return challenges[0]?.id;
  })
  .then((id) => {
    if (id) return ChallengeAPI.getByIdWithPromises(id);
    throw new Error("No challenges found");
  })
  .then((challenge) => console.log("First challenge:", challenge))
  .catch((error) => console.error(error));
```

---

## Error Handling

The API includes built-in error handling. Here's how to handle errors:

### With Async/Await:

```typescript
async function safeFetch() {
  try {
    const challenges = await ChallengeAPI.getAll();
    console.log(challenges);
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}
```

### With Promises:

```typescript
ChallengeAPI.getAllWithPromises()
  .then((challenges) => console.log(challenges))
  .catch((error) => {
    console.error("Error fetching challenges:", error);
  });
```

### With Custom Axios Instance:

```typescript
const axios = ChallengeAPI.getAxiosInstance();

axios.interceptors.response.use(
  (response) => {
    console.log("Response:", response.status);
    return response;
  },
  (error) => {
    console.error("Axios error:", error.response?.status);
    return Promise.reject(error);
  },
);
```

---

## Testing the API

### Terminal 1: Start JSON Server

```bash
npm run server
```

### Terminal 2: Use curl to test

#### GET all:

```bash
curl http://localhost:3000/challenges
```

#### POST create:

```bash
curl -X POST http://localhost:3000/challenges \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Learn Axios\",\"status\":\"Pending\"}"
```

#### PATCH update:

```bash
curl -X PATCH http://localhost:3000/challenges/1 \
  -H "Content-Type: application/json" \
  -d "{\"status\":\"Completed\"}"
```

#### DELETE:

```bash
curl -X DELETE http://localhost:3000/challenges/1
```

---

## Key Differences: Async/Await vs Promises

| Aspect              | Async/Await           | Promises           |
| ------------------- | --------------------- | ------------------ |
| **Readability**     | Looks like sync code  | Callback chains    |
| **Error handling**  | try/catch             | .catch()           |
| **Control flow**    | Sequential by default | Chain with .then() |
| **Parallel ops**    | Promise.all()         | Promise.all()      |
| **Browser support** | Modern browsers       | All browsers       |

---

## Summary

✅ All HTTP methods: GET, POST, PATCH, DELETE  
✅ Both async/await and promise patterns  
✅ Built-in error handling  
✅ Connected to mock server  
✅ TypeScript support with proper typing

Start using: `npm run dev-with-server` and test in your app! 🚀
