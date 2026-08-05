import { useEffect, useState } from "react";
import api from "../services/api";
import RoleCard from "../components/RoleCard";

function Roles() {

    const [roles, setRoles] = useState([]);

    useEffect(() => {

        fetchRoles();

    }, []);

    async function fetchRoles() {

        try {

            const response = await api.get("/roles");

            setRoles(response.data);

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <div>

            <h1>Available Roles</h1>

            {

                roles.map(role => (

                    <RoleCard
                        key={role.id}
                        role={role}
                    />

                ))

            }

        </div>

    );

}

export default Roles;