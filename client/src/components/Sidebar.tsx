import { Link, useLocation } from "wouter";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <aside
      className={`bg-white w-full md:w-64 md:min-h-screen border-r border-neutral-200 ${
        isOpen ? "block" : "hidden md:block"
      } ${
        isOpen && "fixed top-14 left-0 right-0 bottom-0 z-50 md:relative md:top-0"
      }`}
    >
      <div className="p-4 border-b border-neutral-200 flex items-center">
        <svg
          className="h-10 w-10 mr-3 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <div>
          <h1 className="text-lg font-semibold text-neutral-700">IRIS</h1>
          <p className="text-xs text-neutral-500">
            Interoperable Response & Intelligence System
          </p>
        </div>
      </div>

      <nav className="py-4">
        <div className="px-4 mb-2">
          <p className="text-xs uppercase font-semibold text-neutral-500 mb-2">
            Main Navigation
          </p>
          <ul>
            <li>
              <Link href="/">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  Dashboard
                </a>
              </Link>
            </li>
            <li>
              <Link href="/analytics">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/analytics")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Analytics
                </a>
              </Link>
            </li>
            <li>
              <Link href="/reports">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/reports")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  Reports
                </a>
              </Link>
            </li>
            <li>
              <Link href="/communication">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/communication")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  Communication
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-4 mb-2">
          <p className="text-xs uppercase font-semibold text-neutral-500 mb-2">
            System Management
          </p>
          <ul>
            <li>
              <Link href="/ai-systems">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/ai-systems")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                  AI Systems
                </a>
              </Link>
            </li>
            <li>
              <Link href="/resource-allocation">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/resource-allocation")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Resource Allocation
                </a>
              </Link>
            </li>
            <li>
              <Link href="/documentation">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/documentation")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                  Documentation
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-4">
          <p className="text-xs uppercase font-semibold text-neutral-500 mb-2">
            Account
          </p>
          <ul>
            <li>
              <Link href="/settings">
                <a
                  className={`sidebar-link flex items-center px-4 py-2 ${
                    isActive("/settings")
                      ? "bg-primary bg-opacity-10 border-l-3 border-primary text-primary font-medium"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="sidebar-link flex items-center px-4 py-2 text-neutral-600 hover:bg-neutral-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
