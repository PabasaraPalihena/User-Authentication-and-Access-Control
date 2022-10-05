import styles from "/styles.css";
const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.home_container}>
      <h1>
        <center>Welcome Name</center>
      </h1>
      <br />
      <button className={styles.white_btn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
