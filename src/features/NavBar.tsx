export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-retro-yellow md:fixed z-50 w-full">
      <p>
        Benjy
      </p>

      <ul className="flex gap-2">
        <li>About</li>
        <li>Work</li>
      </ul>
    </nav>
  )
}