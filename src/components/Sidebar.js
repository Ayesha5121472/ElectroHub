function Sidebar() {
  return (
    <div className="sidebar p-4" style={{ width: "250px" }}>
      <h4>Admin Panel</h4>
      <ul className="list-unstyled mt-4">
        <li>📊 Dashboard</li>
        <li>📦 Products</li>
        <li>🛒 Orders</li>
        <li>👤 Users</li>
      </ul>
    </div>
  );
}

export default Sidebar;
