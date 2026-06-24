import { useState } from 'react'

function Settings({ darkMode, setDarkMode }) {
  const [name, setName] = useState('BHAU')
  const [email, setEmail] = useState('bhau@admin.com')

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100'
  const cardColor = darkMode ? 'bg-gray-800' : 'bg-white'
  const textColor = darkMode ? 'text-white' : 'text-gray-900'
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600'
  const inputColor = darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'

  const handleSave = () => {
    alert(`Saved!\nName: ${name}\nEmail: ${email}`)
  }

  return (
    <div className={`p-8 ${textColor} min-h-screen ${bgColor}`}>
      <h1 className="text-4xl font-bold mb-8">Settings ⚙️</h1>
      
      <div className={`${cardColor} p-6 rounded-xl mb-6 max-w-2xl shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4 text-green-500">Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label className={`block ${textSecondary} mb-2`}>Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 rounded border focus:border-green-500 outline-none ${inputColor} ${textColor}`}
            />
          </div>
          
          <div>
            <label className={`block ${textSecondary} mb-2`}>Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded border focus:border-green-500 outline-none ${inputColor} ${textColor}`}
            />
          </div>
        </div>
      </div>

      <div className={`${cardColor} p-6 rounded-xl mb-6 max-w-2xl shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4 text-green-500">Appearance</h2>
        
        <div className="flex items-center justify-between">
          <span className="text-lg">Dark Mode</span>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-8 rounded-full p-1 transition ${darkMode ? 'bg-green-500' : 'bg-gray-400'}`}
          >
            <div className={`w-6 h-6 rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : ''}`}></div>
          </button>
        </div>
        <p className={`${textSecondary} text-sm mt-2`}>
          Current: {darkMode ? 'Dark Theme Active 🌙' : 'Light Theme Active ☀️'}
        </p>
      </div>

      <button 
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold text-white"
      >
        Save Changes
      </button>
    </div>
  )
}

export default Settings