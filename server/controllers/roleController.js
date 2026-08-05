import {
  getAllRoles,
  getRoleById
} from "../services/roleService.js";

export const fetchRoles = async (req, res) => {

  try {

    const roles = await getAllRoles();

    res.status(200).json(roles);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

export const fetchRoleById = async (req, res) => {

  try {

    const role = await getRoleById(req.params.id);

    if (!role) {
      return res.status(404).json({
        success: false,
        message: "Role not found"
      });
    }

    res.status(200).json(role);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};