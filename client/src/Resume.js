function Resume() {
    return (
        <>
            <div
                style={{
                    "overflow-y": "auto",
                    height: "25rem",
                }}
            >
                <h1> Kevin Flores </h1>
                <p>
                    <i>Email</i>: cafemanager97@gmail.com
                </p>
                <p>
                    <i>GitHub</i>: https://github.com/CafeManager
                </p>
                <p>
                    <i>LinkedIn</i>:
                    https://www.linkedin.com/in/kevin-flores-57a699175/
                </p>
                <h1> Education </h1>
                <hr></hr>
                <p>
                    Springboard Software Engineering Certificate
                    <br /> November 2022 - February 2024
                </p>
                <p>
                    California State University Los Angeles, Bachelor of Science
                    in Computer Science
                    <br />
                    August 2015 - August 2020
                </p>
                <h1> Technical Skills </h1>
                <hr></hr>
                <p>
                    <b>Languages</b>: Java, CSS, HTML, JavaScript, PHP, MySQL,
                    Python Software and OS: Windows, Visual Studio Code, Git,
                    Linux with Ubuntu, Azure, GitHub, GitLab, Node.JS
                    <br></br>
                    <b>Frameworks</b>: React, ASP.NET, Express, Flask Databases:
                    MySQL, MongoDB, PostgreSQL
                </p>
                <h1> Professional Experience</h1>
                <hr></hr>
                <p>
                    <i>QTC Medical Systems Analyst | August 2020 - Present</i>
                </p>
                <ul>
                    <li>
                        Worked in a team to provide updates in surveys for
                        external customers
                    </li>
                    <li>
                        Collaborated with colleagues to deliver updates in a
                        timely manner
                    </li>
                    <li>
                        Documented new technologies that would be used by the
                        team
                    </li>
                </ul>

                <p>
                    {" "}
                    <i>
                        {" "}
                        Endertech Web Developer Intern | July 2019 - July 2020{" "}
                    </i>
                </p>
                <p>
                    <ul>
                        {" "}
                        <li>
                            Learned how the company utilizes Symfony, Doctrine,
                            MySQL, and React within projects
                        </li>
                        <li>
                            Researched different UI libraries which included
                            Victory.JS and Material-UI
                        </li>
                    </ul>
                </p>
                <h1>Project Experience</h1>
                <hr></hr>
                <p>
                    <i>
                        Sharcipe | Solo Developer | August 2023 - September 2023
                    </i>
                </p>

                <p>
                    <ul>
                        <li>
                            Created a render-hosted flask-based website under
                            springboard mentorship
                        </li>
                        <li>
                            Used Spoonacular API to create a recipe repository
                        </li>
                        <li>
                            Drew database schemas to account for recipe
                            modifications and user profiles
                        </li>
                    </ul>
                </p>
                <p>
                    <i>
                        {" "}
                        Workout Generator | Solo Developer | December 2023 -
                        January 2024
                    </i>{" "}
                </p>

                <p>
                    <ul>
                        <li>
                            Used API Ninjas to retrieve exercises to create
                            workouts for users
                        </li>
                        <li>Created a responsive desktop UI</li>
                        <li>
                            Sought out feedback from would-be customers to
                            tailor a proper UX experience
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
}

export default Resume;
