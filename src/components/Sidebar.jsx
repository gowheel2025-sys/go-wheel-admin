function Sidebar({ onLogout, setActivePage, activePage, darkMode }) {
  const sidebarColor = darkMode? 'bg-gray-800' : 'bg-white'
  const textColor = darkMode? 'text-white' : 'text-gray-900'
  const hoverColor = darkMode? 'hover:bg-gray-700' : 'hover:bg-gray-100'
  const borderColor = darkMode? 'border-gray-700' : 'border-gray-200'

  const menuItems = [
    { name: 'Dashboard', key: 'dashboard' },
    { name: 'Users', key: 'users' },
    { name: 'Settings', key: 'settings' }
  ]

  return (
    <div className={`w-64 ${sidebarColor} h-screen fixed shadow-xl ${borderColor} border-r`}>
      <div className={`p-6 border-b ${borderColor}`}>
        <img src="/logo.png" alt="Go Wheel Logo" className="w-full h-auto" />
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className={`w-full text-left px-6 py-3 ${textColor} ${hoverColor} transition ${
              activePage === item.key? 'bg-green-600 text-white' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <button
        onClick={onLogout}
        className="absolute bottom-6 left-6 right-6 bg-red-600 hover:bg-red-700 p-3 rounded-lg text-white font-bold"
      >
        Logout
      </button>
    </div>
  )
}

export default Sidebar