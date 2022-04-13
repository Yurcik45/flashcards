import "./AuthForm.sass";
import BackHome from "../BackHome/BackHome";
import { NavLink } from "react-router-dom";

const AuthForm = ({ type, inputData, action }) => {
  const condition = type === "register";
  return (
    <div className="Auth">
      <BackHome />
      <section className="vh-50 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-1 md-5 mt-md-4 pb-5 card-body-child">
                    <h2 className="fw-bold mb-1 text-uppercase">
                      {condition ? "Register" : "Login"}
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please
                      {condition ? "create" : "enter your"}
                      and password!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <input
                        onChange={inputData}
                        name="login"
                        className="form-control form-control-lg"
                        placeholder="login"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Login
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        onChange={inputData}
                        name="password"
                        type="password"
                        className="form-control form-control-lg"
                        className="form-control form-control-lg"
                        placeholder="******"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>
                    {condition && (
                      <div className="form-outline form-white mb-4">
                        <input
                          onChange={inputData}
                          name="password_confirm"
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="******"
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Confirm password
                        </label>
                      </div>
                    )}
                    <button
                      onClick={action}
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      {condition ? "Sign up" : "Login"}
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      {condition
                        ? `Do you have an account? `
                        : `Don't have an account? `}
                      <NavLink
                        to={`/${condition ? "auth" : "register"}`}
                        className="text-white-50 fw-bold"
                      >
                        {condition ? "Log in" : "Sign up"}
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
