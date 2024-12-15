import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import styles from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Register</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Введіть ваше ім'я"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Введіть ваш email"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Введіть ваш пароль"
          />
        </div>

        {authError && <p className={styles.error}>{authError}</p>}

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
