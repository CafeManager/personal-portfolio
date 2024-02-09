function PersonalProjects() {
    return (
        <>
            <span className="fs-3" style={{ color: "var(--secondary)" }}>
                Workout Generator
            </span>
            <sub>
                <a
                    href="https://cafe-workout-generator.netlify.app/"
                    style={{ textDecoration: "none", color: "var(--third)" }}
                >
                    Link
                </a>
            </sub>
            <hr></hr>
            <p>
                This project used react for the frontend and express with
                PostgreSQL for database and api setup. It basically requests
                exercises from the API Ninjas database and then makes sure to
                return the types of exercises you ask for. Pagination not
                included out of concern for api rate limits.
            </p>
            <span
                className="fs-3"
                style={{ color: "var(--secondary)" }}
                href="https://sharecipe-w6f9.onrender.com/"
            >
                Sharecipe
            </span>
            <sub>
                <a
                    href="https://sharecipe-w6f9.onrender.com/"
                    style={{ textDecoration: "none", color: "var(--third)" }}
                >
                    Link
                </a>
            </sub>
            <hr></hr>
            <p>
                This project use flask for the frontend and flask-sqlalchemy for
                the database. The premise of the website is to be able to make
                custom recipes who's bases would be started from recipes within
                Spoonacular API. Recipe changes are tracked so that a registered
                user can see the history of a recipe and make decisions on what
                iteration they liked best.
            </p>
        </>
    );
}

export default PersonalProjects;
