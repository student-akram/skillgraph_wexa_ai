import { findSkillGap } from "../services/skillGapService.js";

export const getSkillGap = async (req, res) => {

    try {

        const { roleId, skills } = req.body;

        if (!roleId || !skills) {

            return res.status(400).json({
                success: false,
                message: "roleId and skills are required"
            });

        }

        const result = await findSkillGap(roleId, skills);

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};