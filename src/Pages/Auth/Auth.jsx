import "./Auth.sass";
import { NavLink } from "react-router-dom";
import BackHome from "../../Components/BackHome/BackHome";

const Auth = ({ authData, notificationHandler }) => {
  const authUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    authData[name] = value;
    // console.log("auth data", authData);
  };
  const authUserAction = () => {
    if (!authData.login && !authData.password)
      return notificationHandler(
        "Please enter your login and password!",
        "danger"
      );
    if (!authData.login)
      return notificationHandler("Please enter your login!", "danger");
    if (authData.login.length < 2)
      return notificationHandler("Your login is too short", "warning");
    if (!authData.password)
      return notificationHandler("Please enter your password!", "danger");
    if (authData.password.length < 2)
      return notificationHandler("Your password is too short", "warning");
    notificationHandler("Wait a second, pleace :)", "info");
    //action to back
  };
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
                  <div className="mb-1 md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <input
                        onChange={authUserInput}
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
                        onChange={authUserInput}
                        name="password"
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="******"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>
                    {/* <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50">
                        Forgot password?
                      </a>
                    </p> */}
                    <button
                      onClick={authUserAction}
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
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
                      Don't have an account?{" "}
                      <NavLink to="/register" className="text-white-50 fw-bold">
                        Sign Up
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

export default Auth;
