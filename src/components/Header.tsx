const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-white">
      <nav className="flex items-center justify-between max-w-3xl px-4 py-2">
        <a href="#" className="text-2xl font-bold text-gray-800 hover:text-gray-900 transform hover:scale-105 transition-all duration-200">Its Me</a>
        <div className="flex items-center space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200">Who am I?</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200">What have I learned?</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200">What have I done?</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200">How to contact me?</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;