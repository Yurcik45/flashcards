import { registrationUser } from "../redux/actions/user";
import { useDispatch } from "react-redux";
import AuthForm from "../Components/AuthForm/AuthForm";

const Register = ({ registerData, notificationHandler, type }) => {
  const dispatch = useDispatch();
  const registerUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    registerData[name] = value;
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
    const regResult = {
      login: registerData.login,
      password: registerData.password,
    };
    dispatch(registrationUser(regResult));
  };
  return (
    <AuthForm
      type={type}
      inputData={registerUserInput}
      action={registerUserAction}
    />
  );
};

export default Register;
