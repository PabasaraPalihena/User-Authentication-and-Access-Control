const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h1>
        <center>Welcome Name</center>
      </h1>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
