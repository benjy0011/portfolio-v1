import { navLinks } from "@/constants";
import BenjyLogo from "@/assets/Pixel_B.png";

export default function NavBar() {

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:fixed static z-50 w-full bg-retro-lightyellow">
      <a className="flex gap-0.5 items-center justify-center" href="#home">
        <img src={BenjyLogo} alt="Logo" className="w-8" />
        <p className="text-2xl text-retro-brown">enjy</p>
      </a>

      <ul className="hidden md:flex gap-7">
        {navLinks.map(({ name, id }) => (
          <li key={id}>
            <a className="text-xl hover:underline" href={`#${id}`}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}