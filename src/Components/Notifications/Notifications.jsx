import "./Notifications.sass";

const Notifications = ({ text, type }) => {
  console.log("call notif type :", type);
  let notifClass;
  switch (type) {
    case "info":
      notifClass = "btn-info";
      break;
    case "warning":
      notifClass = "btn-warning";
      break;
    case "success":
      notifClass = "btn-success";
      break;
    case "danger":
      notifClass = "btn-danger";
      break;
  }
  return <a className={`btn ${notifClass} general_notification`}>{text}</a>;
};

export default Notifications;
