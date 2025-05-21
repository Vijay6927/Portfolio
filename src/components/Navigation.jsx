
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto py-4 flex justify-end space-x-6 md:text-2xl font-semibold text-white">
        <a href="#home" className="hover:text-purple-700 transition">Home</a>
        <a href="#projects" className="hover:text-purple-700 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-700 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
