import { NavLogo } from "./NavLogo";


export default function NavBar() {
  return (
    <nav className="w-full h-20 bg-slate-50  border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <NavLogo />
      </div>
    </nav>
  );
}
