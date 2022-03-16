import "./Register.sass";
import { NavLink } from "react-router-dom";
import BackHome from "../../Components/BackHome/BackHome";

const Register = ({ registerData, notificationHandler }) => {
  const registerUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    registerData[name] = value;
    // console.log("auth data", registerData);
  };
  const registerUserAction = () => {
    if (!registerData.login && !registerData.password)
      return notificationHandler(
        "Please enter your login and password!",
        "danger"
      );
    if (!registerData.login)
      return notificationHandler("Please enter your login!", "danger");
    if (registerData.login.length < 2)
      return notificationHandler("Your login is too short", "warning");
    if (!registerData.password)
      return notificationHandler("Please enter your password!", "danger");
    if (registerData.password.length < 2)
      return notificationHandler("Your password is too short", "warning");

    if (!registerData.password_confirm)
      return notificationHandler("Please confirm your password!", "danger");
    if (registerData.password !== registerData.password_confirm)
      return notificationHandler("Fail to compare pesswords", "danger");
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
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-5">
                      Please create login and password!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <input
                        onChange={registerUserInput}
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
                        onChange={registerUserInput}
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
                    <div className="form-outline form-white mb-4">
                      <input
                        onChange={registerUserInput}
                        name="password_confirm"
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="******"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Confirm password
                      </label>
                    </div>
                    <button
                      onClick={registerUserAction}
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Sign up
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
                      Do you have an account?{" "}
                      <NavLink to="/auth" className="text-white-50 fw-bold">
                        Log in
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

export default Register;
