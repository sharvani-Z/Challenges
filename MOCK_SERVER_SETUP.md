# Mock Server Setup Guide

## What You Have Now

You now have a complete **JSON mock server setup** with fake API calls! Here's what was created:

### Files Created:

1. **`db.json`** - The mock database with fake challenges data
2. **`src/services/ChallengeAPI.ts`** - API service with all fetch functions
3. **Updated `package.json`** - Added new npm scripts
4. **Updated `DashboardTemplate`** - Now fetches data from API

---

## How to Run

### Option 1: Run Both Server and App (Recommended)

```bash
npm run dev-with-server
```

This will start:

- ✅ JSON Mock Server on `http://localhost:3000`
- ✅ Vite Dev Server on `http://localhost:5177` (or next available port)

### Option 2: Run Separately

**Terminal 1 - Start JSON Server:**

```bash
npm run server
```

Server runs on: `http://localhost:3000`

**Terminal 2 - Start Vite Dev Server:**

```bash
npm run dev
```

App runs on: `http://localhost:5177` (or next available port)

---

## API Endpoints Available

Your mock server automatically creates these endpoints from `db.json`:

### GET Requests

- `GET http://localhost:3000/challenges` - Get all challenges
- `GET http://localhost:3000/challenges/1` - Get challenge by ID

### POST Request

- `POST http://localhost:3000/challenges` - Create new challenge

### PATCH Request

- `PATCH http://localhost:3000/challenges/1` - Update existing challenge

### DELETE Request

- `DELETE http://localhost:3000/challenges/1` - Delete challenge

---

## How API Service Works

The `ChallengeAPI` service in `src/services/ChallengeAPI.ts` has these methods:

```typescript
// Get all challenges
await ChallengeAPI.getAll();

// Get single challenge by ID
await ChallengeAPI.getById("1");

// Create new challenge
await ChallengeAPI.create({ title: "New task", status: "Pending" });

// Update challenge
await ChallengeAPI.update("1", { status: "Completed" });

// Delete challenge
await ChallengeAPI.delete("1");

// Quick status update
await ChallengeAPI.updateStatus("1", "Completed");
```

---

## What Changed in the App

### Before (Hardcoded Data):

```typescript
const [challenges, setChallenges] = useState<Challenge[]>([
  { id: "1", title: "Build auth", status: "Pending" },
  { id: "2", title: "Dashboard UI", status: "Completed" },
]);
```

### After (API Calls):

```typescript
// Fetch from API when component loads
useEffect(() => {
  const fetchChallenges = async () => {
    const data = await ChallengeAPI.getAll();
    setChallenges(data);
  };
  fetchChallenges();
}, []);

// When adding a challenge, save to API first
const handleAddChallenge = async (newChallenge) => {
  const createdChallenge = await ChallengeAPI.create(newChallenge);
  if (createdChallenge) {
    setChallenges((prev) => [...prev, createdChallenge]);
  }
};
```

---

## Mock Data (`db.json`)

Current sample data:

```json
{
  "challenges": [
    {
      "id": "1",
      "title": "Build authentication flow",
      "status": "Pending"
    },
    {
      "id": "2",
      "title": "Finalize dashboard UI",
      "status": "Completed"
    }
    // ... more challenges
  ]
}
```

You can **edit `db.json`** directly to change the mock data!

---

## Testing the API

You can test the API endpoints using:

### cURL (Command Line):

```bash
# Get all challenges
curl http://localhost:3000/challenges

# Create new challenge
curl -X POST http://localhost:3000/challenges \
  -H "Content-Type: application/json" \
  -d '{"title":"New Challenge","status":"Pending"}'

# Update challenge
curl -X PATCH http://localhost:3000/challenges/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"Completed"}'
```

### Browser:

Just visit `http://localhost:3000/challenges` to see all data as JSON

### Postman or Thunder Client:

Use these tools to test POST, PATCH, DELETE requests visually

---

## What Happens When You:

### Add a New Challenge

1. User fills form and clicks "Create challenge"
2. App calls `ChallengeAPI.create()`
3. Sends POST to `http://localhost:3000/challenges`
4. JSON Server adds to `db.json` (persisted!)
5. App updates state and shows new challenge

### Search for Challenges

1. User types in search box
2. App filters existing challenges locally (no API call)
3. Shows matching results

---

## Next Steps (Optional)

You can extend this by:

- Adding delete button to remove challenges
- Adding "mark complete" button
- Adding edit functionality
- Adding authentication
- Replacing with real API backend

---

## Troubleshooting

**Port already in use?**

- Change port in script: `json-server --watch db.json --port 3001`

**API calls not working?**

- Check if server is running: `http://localhost:3000`
- Check browser console for errors
- Ensure `db.json` is valid JSON

**Data not persisting?**

- JSON Server saves to `db.json` automatically
- Check file permissions
- Restart server if needed

---

## Summary

✅ Mock server running on port 3000  
✅ API service ready to use  
✅ All challenges stored in db.json  
✅ App fetches real data from API  
✅ New challenges saved to database

Enjoy your mock API! 🚀
