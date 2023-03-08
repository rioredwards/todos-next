import { useRef } from "react";
import classes from "@/styles/ProfileForm.module.css";

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // (optional) add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="newPassword">New Password</label>
        <input type="password" id="newPassword" ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="oldPassword">Old Password</label>
        <input type="password" id="oldPassword" ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
