import optimizer from "../Images/OPTIMIZER.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={optimizer} />
      </div>
      <div className="nav-links">
        <a href="#optimizer">Features</a>
        <a href="#how">How it Works</a>
        <a href="#footer">Use Case</a>
      </div>
      <div className="nav-btn">
        <a href="#optimizer">
          <button>Try Now</button>
        </a>
      </div>
    </div>
  );
}
export default Navbar;
