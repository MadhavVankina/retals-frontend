const Header = () => {
  return (
    <div className="w-full border-b border-black/20 shadow bg-white p-4">
      <Logo />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-lg text-red-700 font-bold">Rental Wheels</p>
      {/* logo here */}
    </div>
  );
};

export default Header;
