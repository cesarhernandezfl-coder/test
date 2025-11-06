import { useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();
  
  const getPageTitle = () => {
    switch (location) {
      case "/":
        return "Dashboard";
      case "/analytics":
        return "Analytics";
      case "/reports":
        return "Reports";
      case "/communication":
        return "Communication";
      case "/ai-systems":
        return "AI Systems";
      case "/resource-allocation":
        return "Resource Allocation";
      case "/documentation":
        return "Documentation";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="bg-white border-b border-neutral-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-neutral-700">{getPageTitle()}</h1>
        <div className="ml-4 flex items-center bg-neutral-100 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-success-DEFAULT mr-2"></span>
          <span className="text-sm text-neutral-600">Systems Operational</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 relative">
          <button className="text-neutral-600 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-danger-DEFAULT"></span>
          </button>
        </div>
        <div className="mr-4">
          <button className="text-neutral-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <div className="mr-3 text-right">
            <p className="text-sm font-medium">User Smith</p>
            <p className="text-xs text-neutral-500">Emergency Manager</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
            US
          </button>
        </div>
      </div>
    </header>
  );
}
