import { useDispatch } from "react-redux";
import AuthForm from "../Components/AuthForm/AuthForm";
import { authUser } from "../redux/actions/user";

const Auth = ({ authData, notificationHandler, type }) => {
  const dispatch = useDispatch();
  const authUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    authData[name] = value;
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
    const logResult = {
      login: authData.login,
      password: authData.password,
    };
    dispatch(authUser(logResult));
  };
  return (
    <AuthForm type={type} inputData={authUserInput} action={authUserAction} />
  );
};

export default Auth;
