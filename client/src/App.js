import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PersonalProjects from "./PersonalProjects";
import FreelanceProjects from "./FreelanceProjects";
import Resume from "./Resume";

function App() {
    return (
        <BrowserRouter>
            <div className="App h-100">
                <div className="container h-100 d-flex align-items-center">
                    <div className="mx-auto container-sizing ">
                        <div className="mr-auto ms-5 my-5">
                            <div className="row">
                                <div className="col">
                                    <div className="text-start">
                                        <Routes>
                                            <Route
                                                path=""
                                                element={<Home />}
                                            ></Route>
                                            <Route
                                                path="/resume"
                                                element={<Resume />}
                                            ></Route>

                                            <Route
                                                path="/personal-projects"
                                                element={<PersonalProjects />}
                                            ></Route>
                                            <Route
                                                path="/freelance-projects"
                                                element={<FreelanceProjects />}
                                            ></Route>
                                        </Routes>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex h-100">
                                        <div className="text-start ms-3">
                                            <Link
                                                className="fs-5 mt-3 d-block"
                                                to=""
                                                style={{
                                                    color: "var(--third)",
                                                }}
                                            >
                                                Kevin Flores
                                            </Link>
                                            <br></br>
                                            <Link
                                                className="fs-5 pt-3 d-block"
                                                style={{
                                                    color: "var(--third)",
                                                }}
                                                to="/personal-projects"
                                            >
                                                Personal Projects
                                            </Link>
                                            <br></br>
                                            <Link
                                                className="fs-5 pt-3 d-block"
                                                style={{
                                                    color: "var(--third)",
                                                }}
                                                to="/freelance-projects"
                                            >
                                                Freelance Projects
                                            </Link>
                                            <br></br>
                                            <Link
                                                className="fs-5 pt-3 d-block"
                                                style={{
                                                    color: "var(--third)",
                                                }}
                                                to="/resume"
                                            >
                                                Resume
                                            </Link>

                                            {/* <h1> Projects</h1>
                                            <p> Workout Generator </p>
                                            <p> Sharecipe </p>
                                            <p> Portfolio Site </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
