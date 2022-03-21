import { useDispatch } from "react-redux";
import AuthForm from "../Components/AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";
import { authUser } from "../redux/actions/user";

const Auth = ({ authData, notificationHandler, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    const logResult = {
      login: authData.login,
      password: authData.password,
    };
    dispatch(authUser(logResult, (res) => {
      const data = res.data;
      if (data.code === 'l2') return notificationHandler(data.msg, 'danger')
      if (data.code === 'l1') return notificationHandler(data.msg, 'warning')
      if (data.code === 'l0')
        localStorage.setItem('user', data.user.login);
        // localStorage.setItem('knownWords', data.user.knownWords);
        // localStorage.setItem('unknownWords', data.user.unknownWords);
        // localStorage.setItem('changedWords', data.user.changedWords);
        // localStorage.setItem('newWords', data.user.newWords);
        notificationHandler(data.msg, 'success')
        const authTimeout = setTimeout(() => {
          navigate('/')
          authTimeout.clearTimeout();
        }, 1000)
    }));
  };
  return (
    <AuthForm type={type} inputData={authUserInput} action={authUserAction} />
  );
};

export default Auth;
