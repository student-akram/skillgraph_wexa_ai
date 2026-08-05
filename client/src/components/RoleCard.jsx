function RoleCard({ role }) {

    return (

        <div
            style={{
                border: "1px solid gray",
                padding: "20px",
                margin: "15px",
                borderRadius: "10px"
            }}
        >

            <h2>{role.name}</h2>

            <p>{role.description}</p>

            <h4>{role.averageSalary}</h4>

        </div>

    );

}

export default RoleCard;