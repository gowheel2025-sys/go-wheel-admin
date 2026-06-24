function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin() // Login button dabla ki Dashboard ughadel
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Admin Login
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-300 text-sm">Username</label>
            <input 
              type="text" 
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter username"
              required
            />
          </div>
          
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input 
              type="password"
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter password"
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold p-3 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login