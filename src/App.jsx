// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";


function PrivateRoute({ children }) {
  const { currentUser } = useAuth();  // ✅ fixed
  return currentUser ? children : <Navigate to="/login" />;
}

function App() {
  const writeData=async () =>{
    const result =await addDoc(collection(Firestore,"cities"),{
      name:"delhi",
      pincode:760004,
      lat:123,
      long:234,
    });
    console.log("result",result)
  }
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route
            path="/login/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
