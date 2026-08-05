import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/home.css";

import {
  Brain,
  GraduationCap,
  UserCheck,
} from "lucide-react";

function Home() {
  const [roles, setRoles] = useState([]);
  const [skills, setSkills] = useState([]);

  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [result, setResult] = useState(null);
  const [roadmap, setRoadmap] = useState([]);
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    loadRoles();
    loadSkills();
  }, []);

  async function loadRoles() {
    try {
      const res = await api.get("/roles");
      setRoles(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadSkills() {
    try {
      const res = await api.get("/skills");
      setSkills(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSkillChange(skillName) {
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(
        selectedSkills.filter((skill) => skill !== skillName)
      );
    } else {
      setSelectedSkills([...selectedSkills, skillName]);
    }
  }

  async function analyzeSkillGap() {
    if (!selectedRole) {
      alert("Please select a target role.");
      return;
    }

    if (selectedSkills.length === 0) {
      alert("Please select at least one skill.");
      return;
    }

    try {
      const gapResponse = await api.post("/skill-gap", {
        roleId: selectedRole,
        skills: selectedSkills,
      });

      setResult(gapResponse.data);

      const mentorResponse = await api.post("/mentors", {
        skills: gapResponse.data.missingSkills,
      });

      setMentors(mentorResponse.data);

      if (gapResponse.data.missingSkills.length > 0) {
        const lastSkill =
          gapResponse.data.missingSkills[
            gapResponse.data.missingSkills.length - 1
          ];

        const roadmapResponse = await api.get(
          `/roadmap/${encodeURIComponent(lastSkill)}`
        );

        setRoadmap(roadmapResponse.data);
      } else {
        setRoadmap([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">

      {/* Hero */}

      <div className="hero">
        <h1>SkillGraph AI</h1>

        <p>
          Discover your learning roadmap using Graph Database Technology
        </p>
      </div>

      {/* Form */}

      <div className="form">

        <h3>Select Target Role</h3>

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Choose Role</option>

          {roles.map((role) => (
            <option
              key={role.id}
              value={role.id}
            >
              {role.name}
            </option>
          ))}
        </select>

        <h3>Select Your Current Skills</h3>

        <div className="skills">

          {skills.map((skill) => (

            <label
              className="skill"
              key={skill.id}
            >

              <input
                type="checkbox"
                checked={selectedSkills.includes(skill.name)}
                onChange={() => handleSkillChange(skill.name)}
              />

              {skill.name}

            </label>

          ))}

        </div>

        <button
          className="analyze-btn"
          onClick={analyzeSkillGap}
        >
          Analyze Career Path
        </button>

      </div>

      {/* Results */}

      {result && (

        <div className="results">

          {/* Missing Skills */}

          <h2>
            <Brain size={26} />
            {" "}Missing Skills
          </h2>

          <div className="skill-roadmap">

            {result.missingSkills.length > 0 ? (

              result.missingSkills.map((skill, index) => (

                <div
                  key={skill}
                  className="skill-path-item"
                >

                  <div className="info-card">

                    <h3>{skill}</h3>

                  </div>

                  {index !== result.missingSkills.length - 1 && (

                    <div className="path-arrow">

                      →

                    </div>

                  )}

                </div>

              ))

            ) : (

              <div className="info-card">

                <h3>🎉 Congratulations!</h3>

                <p>You already have all required skills.</p>

              </div>

            )}

          </div>

          {/* Learning Roadmap */}

          {roadmap.length > 0 && (

            <>

              <h2>

                <GraduationCap size={26} />

                {" "}Learning Roadmap

              </h2>

              <div className="roadmap">

                {roadmap.map((step, index) => (

                  <div
                    key={index}
                    className="roadmap-step"
                  >

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >

                      <strong>{step.from}</strong>

                      <span
                        style={{
                          fontSize: "28px",
                          color: "#2563eb",
                        }}
                      >
                        →
                      </span>

                      <strong>{step.to}</strong>

                    </div>

                  </div>

                ))}

              </div>

            </>

          )}

          {/* Mentors */}

          {mentors.length > 0 && (

            <>

              <h2>

                <UserCheck size={26} />

                {" "}Recommended Mentors

              </h2>

              <div className="mentor-container">

                {mentors.map((mentor) => (

                  <div
                    key={mentor.id}
                    className="mentor-card"
                  >

                    <div className="avatar">

                      {mentor.name.charAt(0).toUpperCase()}

                    </div>

                    <div className="mentor-details">

                      <h3>{mentor.name}</h3>

                      <p>{mentor.bio}</p>

                      <p>{mentor.email}</p>

                      <p>

                        <strong>Experience:</strong>{" "}

                        {mentor.experience} Years

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </>

          )}

        </div>

      )}

    </div>
  );
}

export default Home;