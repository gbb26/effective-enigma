/* eslint-disable react/prop-types */
function Navigation({ number }) {
  return (
    <div className="nav">
      <div className={number === 1 ? "rect-visited" : "rect"}></div>
      <div className={number === 2 ? "rect-visited" : "rect"}></div>
    </div>
  );
}
export default Navigation;
