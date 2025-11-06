import { useQuery } from "@tanstack/react-query";

interface Guide {
  id: number;
  title: string;
  description: string;
  icon: "integration" | "configuration" | "protocol";
}

interface Update {
  id: number;
  time: string;
  content: string;
}

export default function Documentation() {
  const { data: guides } = useQuery<Guide[]>({
    queryKey: ["/api/documentation/guides"],
  });

  const { data: updates } = useQuery<Update[]>({
    queryKey: ["/api/documentation/updates"],
  });

  const renderIcon = (type: string) => {
    switch (type) {
      case "integration":
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-primary mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
        );
      case "configuration":
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-primary mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
            />
          </svg>
        );
      case "protocol":
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-primary mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" 
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-neutral-200">
        <h2 className="font-semibold text-neutral-700">Documentation & Guides</h2>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full px-4 py-2 pr-10 border border-neutral-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <div className="absolute right-3 top-2.5 text-neutral-400">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Quick Guides</h3>
          <div className="space-y-3">
            {guides ? (
              guides.map((guide) => (
                <a 
                  key={guide.id}
                  href="#" 
                  className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100"
                >
                  {renderIcon(guide.icon)}
                  <div>
                    <h4 className="text-sm font-medium">{guide.title}</h4>
                    <p className="text-xs text-neutral-500">{guide.description}</p>
                  </div>
                </a>
              ))
            ) : (
              <>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="h-5 bg-neutral-100 rounded w-3/4 mb-1"></div>
                  <div className="h-3 bg-neutral-100 rounded w-1/2"></div>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="h-5 bg-neutral-100 rounded w-3/4 mb-1"></div>
                  <div className="h-3 bg-neutral-100 rounded w-1/2"></div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Latest Updates</h3>
          <div className="bg-neutral-50 p-3 rounded-lg">
            {updates ? (
              updates.map((update) => (
                <div key={update.id} className="flex items-start mb-3 last:mb-0">
                  <div className="bg-primary bg-opacity-10 p-1.5 rounded flex-shrink-0 mr-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">{update.time}</p>
                    <p className="text-sm">{update.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="mb-3">
                  <div className="h-4 bg-neutral-100 rounded w-1/4 mb-1"></div>
                  <div className="h-5 bg-neutral-100 rounded w-full"></div>
                </div>
                <div>
                  <div className="h-4 bg-neutral-100 rounded w-1/4 mb-1"></div>
                  <div className="h-5 bg-neutral-100 rounded w-full"></div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Support</h3>
          <div className="bg-primary bg-opacity-5 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-primary mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" 
                />
              </svg>
              <h4 className="font-medium">Need help?</h4>
            </div>
            <p className="text-sm text-neutral-600 mb-3">
              Technical support is available 24/7 for crisis response systems.
            </p>
            <button className="w-full py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded text-sm">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
