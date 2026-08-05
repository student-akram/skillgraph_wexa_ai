# 🚀 SkillGraph 

A Full Stack Career Roadmap & Mentor Recommendation Platform powered by **CognoDB Graph Database**.

SkillGraph helps users identify the skills required for their target role, discover missing skills, generate a learning roadmap using graph traversal, and find mentors who already possess those skills.

---

# 🌐 Live Demo

### Frontend (Vercel)

https://skillgraph-wexa-ai-vnl8-b6nnm402k-shaikakrams-projects.vercel.app/

### Backend API (Render)

https://skillgraph-wexa-ai-1.onrender.com/

### GitHub Repository

https://github.com/student-akram/skillgraph_wexa_ai

---

# 📌 Problem Statement

Many developers know the career role they want to pursue (Frontend Developer, Backend Developer, AI Engineer, etc.), but often struggle to answer questions like:

- Which skills am I missing?
- In what order should I learn those skills?
- Who can guide me as a mentor?

Traditional relational databases can store this information, but querying complex relationships requires multiple JOIN operations, making it difficult to scale.

SkillGraph solves this problem using a **Graph Database**.

---

# 🎯 Why Graph Database?

The core of this application is **relationships**, not just data.

Example:

```
Python
   ↓
Machine Learning
   ↓
Deep Learning
   ↓
LLMs
   ↓
AI Agents
```

Graph databases naturally represent these prerequisite chains and allow efficient traversal without complex SQL joins.

---

# 🏗 Graph Data Model

## Nodes

- Person
- Skill
- Role

## Relationships

```
(Person)
    │
HAS_SKILL
    ▼
(Skill)

(Role)
    │
REQUIRES_SKILL
    ▼
(Skill)

(Skill)
    │
PREREQUISITE_FOR
    ▼
(Skill)
```

---

# 🔄 Application Workflow

```
User

↓

Select Target Role

↓

Select Current Skills

↓

Backend (Express.js)

↓

CognoDB Graph Database

↓

Cypher Queries

↓

Missing Skills
Learning Roadmap
Mentor Recommendation

↓

Display Results
```

---

# ✨ Features

- View Available Roles
- View Available Skills
- Skill Gap Analysis
- Learning Roadmap Generation
- Mentor Recommendation
- Graph Traversal using Cypher
- CognoDB Integration
- Responsive User Interface

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Axios
- CSS3
- Lucide React

## Backend

- Node.js
- Express.js
- Neo4j JavaScript Driver

## Database

- CognoDB
- Cypher Query Language

---

# 📂 Project Structure

```
skillgraph/

├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── queries/
│   ├── scripts/
│   ├── utils/
│   └── package.json
│
├── docs/
│   └── screenshots/
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/student-akram/skillgraph_wexa_ai.git
```

---

## Backend Setup

```bash
cd server

npm install

npm run seed

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
COGNODB_URI=

COGNODB_USERNAME=cognodb

COGNODB_PASSWORD=

PORT=5000
```

---

# 🌱 Seed Database

Populate the database with sample data.

```bash
npm run seed
```

The seed script creates:

- Roles
- Skills
- Mentors
- Skill Relationships
- Role Relationships

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/roles` | Get all roles |
| GET | `/api/skills` | Get all skills |
| POST | `/api/skill-gap` | Find missing skills |
| POST | `/api/mentors` | Get mentor recommendations |
| GET | `/api/roadmap/:skill` | Generate learning roadmap |

---

# 🔍 Main Cypher Queries

## Required Skills

```cypher
MATCH (r:Role {id:$roleId})-[:REQUIRES_SKILL]->(s)
RETURN s
```

---

## Mentor Recommendation

```cypher
MATCH (p:Person)-[:HAS_SKILL]->(s)
RETURN p
```

---

## Learning Roadmap

```cypher
MATCH path =
(start:Skill)-[:PREREQUISITE_FOR*]->(target:Skill {name:$skill})
RETURN path
```

---

# 📸 Screenshots

## Home Page

```
docs/screenshots/home.jpeg
```

---
## AvailableRoles
```
docs/screenshots/availableRoles.jpeg
```
---



---

## Learning Roadmap

```
docs/screenshots/missingSkills.jpeg
```

---

## Mentor Recommendation

```
docs/screenshots/RecommendedMentor.jpeg
```

---

# 🚀 Future Improvements

- Admin Dashboard
- Authentication & Authorization
- Add/Edit/Delete Roles
- Add/Edit/Delete Skills
- Add/Edit/Delete Mentors
- Upload Mentor Profiles
- AI-Based Mentor Ranking
- Personalized Learning Paths
- Progress Tracking
- Resume Skill Matching

---

# 💡 Why This Project?

SkillGraph demonstrates how graph databases efficiently model highly connected data.

Instead of relying on multiple SQL JOIN operations, graph traversal enables efficient exploration of relationships between skills, mentors, and career roles, making it an ideal solution for career recommendation systems.

---

# 👨‍💻 Author

**Shaik Akram**

GitHub:

https://github.com/student-akram

---

# 📄 License

This project is developed for the **Wexa AI CognoDB Assignment** and is intended for educational and demonstration purposes.