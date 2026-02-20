import Sidebar from "../components/Sidebar";



function AdminDashboard() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container-fluid p-4">
        <h2 className="mb-4">Dashboard Overview</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="dashboard-card bg-products text-center">
              <h5>Total Products</h5>
              <h2>25</h2>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="dashboard-card bg-orders text-center">
              <h5>Total Orders</h5>
              <h2>12</h2>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="dashboard-card bg-users text-center">
              <h5>Total Users</h5>
              <h2>40</h2>
            </div>
          </div>
        </div>

        <div className="card mt-4 p-4">
          <h4>Recent Products</h4>
          <table className="table mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>iPhone 15</td>
                <td>$999</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Gaming Laptop</td>
                <td>$1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   
  );
}

export default AdminDashboard;
