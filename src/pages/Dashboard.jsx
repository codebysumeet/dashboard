import { 
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./Dashboard.css";

const writeData = async () => {
  try {
    const result = await addDoc(collection(db, "cities"), {
      name: "delhi",
      pincode: 760004,              
    });
    console.log("Document written with ID: ", result.id);
    alert("Data added to Firestore!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

const dataLine = [
  { name: "Jan", Casamis: 30, Fadanish: 20 },
  { name: "Feb", Casamis: 40, Fadanish: 25 },
  { name: "Mar", Casamis: 50, Fadanish: 35 },
  { name: "Apr", Casamis: 70, Fadanish: 55 },
];

const dataPie = [
  { name: "Loam", value: 45 },
  { name: "Clay Sand", value: 25 },
  { name: "Silt", value: 30 },
];

const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

function Dashboard() {
  return (
    <div className="dashboard-container">
      
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2 className="sidebar-title">🌾 Agri Admin</h2>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active">Dashboard</a>
          <a href="#" className="sidebar-link">News</a>
          <a href="#" className="sidebar-link">Schemes</a>
          <a href="#" className="sidebar-link">Recommendations</a>
          <a href="#" className="sidebar-link">Settings</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        
        {/* Header */}
        <header className="dashboard-header">
          <h1 className="header-title">📊 Dashboard</h1>
          <div className="header-right">
            <span className="header-user">👤 Admin</span>
            <button className="btn-logout">Logout</button>
          </div>
        </header>

        {/* Firestore Button */}
        <div className="btn-wrapper">
          <button onClick={writeData} className="btn-firestore">
            ➕ Add City to Firestore
          </button>
        </div>

        {/* Cards */}
        <section className="dashboard-cards">
          <div className="dashboard-card blue">1,250<br /><span>Registered Users</span></div>
          <div className="dashboard-card green">780<br /><span>Supported Crops</span></div>
          <div className="dashboard-card red">3,500<br /><span>Recommendations</span></div>
          <div className="dashboard-card orange">780<br /><span>Orders</span></div>
          <div className="dashboard-card yellow">350<br /><span>Products</span></div>
          <div className="dashboard-card purple">₹3,50,000<br /><span>Revenue</span></div>
        </section>

        {/* Charts */}
        <section className="dashboard-charts">
          {/* Line Chart */}
          <div className="chart-card">
            <h2 className="chart-title">🌱 Yield Forecast Trends</h2>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={dataLine}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Casamis" stroke="#0088FE" strokeWidth={3} />
                <Line type="monotone" dataKey="Fadanish" stroke="#FF8042" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="chart-card">
            <h2 className="chart-title">🌍 Soil Type Distribution</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={dataPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;
