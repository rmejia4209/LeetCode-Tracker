import Link from "next/link"

function NavBar() {
  return (
    <nav className="navbar bg-primary">
      <div className="flex-1">
        <Link href='/' className="btn btn-ghost text-xl">LeetCode Tracker</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/problems'>Grind 169 Problems</Link></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default NavBar