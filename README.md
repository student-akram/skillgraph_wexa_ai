# 🚀 SkillGraph 

A Full Stack Career Roadmap & Mentor Recommendation Platform powered by **CognoDB Graph Database**.

SkillGraph helps developers identify the skills required for their target job role, discover missing skills, generate a learning roadmap using graph traversal, and find mentors who already possess those skills.

---

# 📌 Problem Statement

Many developers know the role they want (Frontend Developer, AI Engineer, Backend Developer, etc.) but don't know:

- Which skills they are missing
- What order they should learn those skills
- Who can mentor them

Traditional relational databases can store this information, but answering questions involving relationships becomes increasingly complex as the data grows.

This project solves that problem using a **Graph Database**.

---

# 🎯 Why Graph Database?

The interesting part of this application is not the data itself.

It is the **relationships** between:

- People
- Skills
- Roles

Example:

Python
↓
Machine Learning
↓
Deep Learning
↓
LLMs
↓
AI Agents

These prerequisite chains are naturally represented as graphs.

A graph database makes relationship traversal much simpler than SQL joins.

---

# 🏗 Graph Data Model

## Nodes

- Person
- Skill
- Role

## Relationships

Person
--HAS_SKILL-->
Skill

Role
--REQUIRES_SKILL-->
Skill

Skill
--PREREQUISITE_FOR-->
Skill

---

# ✨ Features

✅ View Available Roles

✅ View Available Skills

✅ Skill Gap Analysis

✅ Learning Roadmap

✅ Mentor Recommendation

✅ Graph Traversal using Cypher

✅ CognoDB Integration

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Axios
- CSS
- Lucide React

## Backend

- Node.js
- Express.js
- Neo4j Driver

## Database

- CognoDB
- Cypher Query Language

---

# 📂 Project Structure

```
skillgraph/
│
├── client/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── queries/
│   ├── services/
│   ├── scripts/
│   └── utils/
│
├── docs/
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone <https://github.com/student-akram/skillgraph_wexa_ai>
```

---

## Backend

```bash
cd server

npm install

npm run seed

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the server folder.

```
COGNODB_URI=

COGNODB_USERNAME=cognodb

COGNODB_PASSWORD=

PORT=5000
```

---

# 🌱 Seed Data

The project includes a seed script that creates:

- Roles
- Skills
- Mentors
- Skill Relationships
- Role Relationships

Run

```bash
npm run seed
```

to populate the database.

---

# 📡 API Endpoints

## Roles

```
GET /api/roles
```

---

## Skills

```
GET /api/skills
```

---

## Skill Gap

```
POST /api/skill-gap
```

---

## Mentors

```
POST /api/mentors
```

---

## Learning Roadmap

```
GET /api/roadmap/:skill
```

---

# 🔍 Main Cypher Queries

## Find Required Skills

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
MATCH path=(start:Skill)-[:PREREQUISITE_FOR*]->(target:Skill{name:$skill})
RETURN path
```

---

# 📸 Screenshots

## Home Page

(Add Screenshot)

---

## Skill Gap Analysis

(Add Screenshot)

---

## Mentor Recommendation

(Add Screenshot)

---

## Learning Roadmap

(Add Screenshot)

---

# 🚀 Future Improvements

- Admin Dashboard
- Authentication
- CRUD for Skills
- CRUD for Roles
- CRUD for Mentors
- AI Powered Mentor Ranking
- Personalized Learning Paths

---

# 💡 Why This Project?

This project demonstrates how graph databases can efficiently model and query highly connected data.

Instead of relying on multiple SQL joins, graph traversal enables efficient exploration of relationships between skills, mentors, and career roles, making it an ideal solution for career recommendation systems.

---

# 👨‍💻 Author

**Shaik Akram**

GitHub:
https://github.com/student-akram