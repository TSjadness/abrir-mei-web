import Image from "next/image";
import logo from "../../images/logo-mei.png";

export function NavLogo() {
  return (
    <p className=" text-2xl">
      <Image src={logo} alt="logo-abrir-mei" className="w-52" />
    </p>
  );
}