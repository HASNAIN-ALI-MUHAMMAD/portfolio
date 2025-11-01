const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="mb-8 text-4xl font-bold text-gray-800 hover:text-gray-900 transform hover:scale-105 transition-all duration-200">How to contact me?</h2>
      <div className="flex justify-center space-x-8">
        <a href="mailto:your-email@example.com" className="text-lg text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200">Email</a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200">GitHub</a>
        <a href="https://x.com/your-username" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200">X.com</a>
      </div>
    </div>
  );
};

export default Contact;
