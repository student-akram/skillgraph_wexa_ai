import {
  getAllSkills,
  getSkillById
} from "../services/skillService.js";

export const fetchSkills = async (req, res) => {

  try {

    const skills = await getAllSkills();

    res.status(200).json(skills);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

export const fetchSkillById = async (req, res) => {

  try {

    const skill = await getSkillById(req.params.id);

    if (!skill) {

      return res.status(404).json({
        success: false,
        message: "Skill not found"
      });

    }

    res.status(200).json(skill);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};