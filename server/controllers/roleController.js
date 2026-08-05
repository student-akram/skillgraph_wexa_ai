import { getAllRoles } from "../services/roleService.js";

export const fetchRoles = async (req, res) => {

    try {

        const roles = await getAllRoles();

        res.status(200).json(roles);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

}