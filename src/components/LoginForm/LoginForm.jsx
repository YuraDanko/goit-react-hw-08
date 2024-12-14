import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(logIn({ email, password }));
    form.reset();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>LogIn</h2>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Введіть ваш email"
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Введіть ваш пароль"
          />
        </label>
        {authError && <p className={styles.error}>{authError}</p>}
        <button type="submit" className={styles.button}>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
