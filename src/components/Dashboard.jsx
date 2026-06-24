import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Users from './Users'
import Settings from './Settings'
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Dashboard({ onLogout }) {
  const [activePage, setActivePage] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(true)
  const [userCount, setUserCount] = useState(3)

  const [revenueData, setRevenueData] = useState([
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 },
  ])

  const [userData, setUserData] = useState([
    { name: 'Admin', value: 150 },
    { name: 'Manager', value: 300 },
    { name: 'User', value: 800 },
  ])

  const COLORS = ['#EF4444', '#3B82F6', '#22C55E']

  const bgColor = darkMode? 'bg-gray-900' : 'bg-gray-100'
  const cardColor = darkMode? 'bg-gray-800' : 'bg-white'
  const textColor = darkMode? 'text-white' : 'text-gray-900'
  const textSecondary = darkMode? 'text-gray-400' : 'text-gray-600'

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      <Sidebar onLogout={onLogout} setActivePage={setActivePage} activePage={activePage} darkMode={darkMode} />

      <div className="ml-64 w-full">
        {activePage === 'dashboard' && (
          <div className={`p-8 ${textColor}`}>
            <h1 className="text-4xl font-bold">Welcome to Go Wheel! 🛞</h1>
            <p className={`${textSecondary} mt-2`}>Ride the future. Drive the freedom.</p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className={`${cardColor} p-6 rounded-xl shadow-lg`}>
                <h3 className={textSecondary}>Total Users</h3>
                <p className="text-3xl font-bold text-green-500 mt-2">{userCount}</p>
              </div>
              <div className={`${cardColor} p-6 rounded-xl shadow-lg`}>
                <h3 className={textSecondary}>Revenue</h3>
                <p className="text-3xl font-bold text-green-500 mt-2">$45,200</p>
              </div>
              <div className={`${cardColor} p-6 rounded-xl shadow-lg`}>
                <h3 className={textSecondary}>Orders</h3>
                <p className="text-3xl font-bold text-green-500 mt-2">320</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className={`${cardColor} p-6 rounded-xl shadow-lg`}>
                <h3 className="text-xl font-bold mb-4">Monthly Revenue</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={revenueData}>
                    <XAxis dataKey="month" stroke={darkMode? '#9CA3AF' : '#4B5563'} />
                    <YAxis stroke={darkMode? '#9CA3AF' : '#4B5563'} />
                    <Tooltip contentStyle={{ backgroundColor: darkMode? '#1F2937' : '#FFFFFF', border: 'none', color: darkMode? '#FFF' : '#000' }} />
                    <Line type="monotone" dataKey="revenue" stroke="#22C55E" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className={`${cardColor} p-6 rounded-xl shadow-lg`}>
                <h3 className="text-xl font-bold mb-4">User Roles</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={userData} dataKey="value" outerRadius={80} label>
                      {userData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: darkMode? '#1F2937' : '#FFFFFF', border: 'none' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activePage === 'users' && <Users darkMode={darkMode} setUserCount={setUserCount} />}
        {activePage === 'settings' && <Settings darkMode={darkMode} setDarkMode={setDarkMode} />}
      </div>
    </div>
  )
}

export default Dashboard