import { useState, useEffect } from 'react'

function Users({ darkMode, setUserCount }) {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('adminUsers')
    return savedUsers ? JSON.parse(savedUsers) : [
      { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'Admin' },
      { id: 2, name: 'Priya Patil', email: 'priya@example.com', role: 'Manager' },
      { id: 3, name: 'Amit Kumar', email: 'amit@example.com', role: 'User' },
    ]
  })

  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'User' })
  const [searchTerm, setSearchTerm] = useState('')
  const [editingUser, setEditingUser] = useState(null)

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100'
  const cardColor = darkMode ? 'bg-gray-800' : 'bg-white'
  const textColor = darkMode ? 'text-white' : 'text-gray-900'
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600'
  const inputColor = darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
  const tableBorder = darkMode ? 'border-gray-700' : 'border-gray-200'
  const tableHover = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'

  // Save to localStorage + update dashboard count
  useEffect(() => {
    localStorage.setItem('adminUsers', JSON.stringify(users))
    setUserCount(users.length)
  }, [users, setUserCount])

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
      setUsers([...users, { ...newUser, id: newId }])
      setNewUser({ name: '', email: '', role: 'User' })
    }
  }

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const handleEditUser = (user) => {
    setEditingUser(user)
    setNewUser(user)
  }

  const handleUpdateUser = () => {
    setUsers(users.map(user => 
      user.id === editingUser.id ? { ...newUser, id: user.id } : user
    ))
    setEditingUser(null)
    setNewUser({ name: '', email: '', role: 'User' })
  }

  const handleCancelEdit = () => {
    setEditingUser(null)
    setNewUser({ name: '', email: '', role: 'User' })
  }

  return (
    <div className={`p-8 min-h-screen ${bgColor} ${textColor}`}>
      <h1 className="text-4xl font-bold mb-8">Users Management 👥</h1>
      
      <div className={`${cardColor} p-4 rounded-xl mb-6 shadow-lg`}>
        <input 
          type="text"
          placeholder="🔍 Search by Name, Email, or Role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full p-3 rounded border focus:border-green-500 outline-none ${inputColor} ${textColor}`}
        />
      </div>

      <div className={`${cardColor} p-6 rounded-xl mb-8 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          {editingUser ? 'Edit User' : 'Add New User'}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <input 
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            className={`p-3 rounded border focus:border-green-500 outline-none ${inputColor} ${textColor}`}
          />
          <input 
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            className={`p-3 rounded border focus:border-green-500 outline-none ${inputColor} ${textColor}`}
          />
          <select 
            value={newUser.role}
            onChange={(e) => setNewUser({...newUser, role: e.target.value})}
            className={`p-3 rounded border focus:border-green-500 outline-none ${inputColor} ${textColor}`}
          >
            <option>User</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>
          {editingUser ? (
            <div className="flex gap-2">
              <button 
                onClick={handleUpdateUser}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold text-white flex-1"
              >
                Update
              </button>
              <button 
                onClick={handleCancelEdit}
                className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-bold text-white"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAddUser}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold text-white"
            >
              Add User
            </button>
          )}
        </div>
      </div>

      <div className={`${cardColor} rounded-xl overflow-hidden shadow-lg`}>
        <div className={`p-4 border-b ${tableBorder}`}>
          <p className={textSecondary}>Showing {filteredUsers.length} of {users.length} users</p>
        </div>
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
            <tr>
              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className={`border-t ${tableBorder} ${tableHover}`}>
                <td className="p-4">{user.id}</td>
                <td className="p-4 font-semibold">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    user.role === 'Admin' ? 'bg-red-500/20 text-red-500' : 
                    user.role === 'Manager' ? 'bg-blue-500/20 text-blue-500' : 
                    'bg-green-500/20 text-green-500'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditUser(user)}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredUsers.length === 0 && (
          <div className="p-8 text-center">
            <p className={textSecondary}>No users found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users