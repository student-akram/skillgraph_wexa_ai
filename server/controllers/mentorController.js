import { findMentors } from "../services/mentorService.js";

export const getMentors = async (req, res) => {

    try {

        const { skills } = req.body;

        const mentors = await findMentors(skills);

        res.status(200).json(mentors);

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}