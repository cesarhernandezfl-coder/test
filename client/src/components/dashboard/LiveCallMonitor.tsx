import { useQuery } from "@tanstack/react-query";

interface LiveCall {
  id: string;
  callType: string;
  priority: number;
  location: string;
  city?: string;
  receivedAt: string;
  status: 'received' | 'dispatched' | 'en_route' | 'on_scene' | 'resolved';
  responseTime?: number;
}

interface LiveCallMonitorProps {
  searchFilter?: string;
}

export default function LiveCallMonitor({ searchFilter = "" }: LiveCallMonitorProps) {
  const { data: liveCalls } = useQuery<LiveCall[]>({
    queryKey: ["/api/calls/live", searchFilter],
    queryFn: () => {
      const params = searchFilter ? `?city=${encodeURIComponent(searchFilter)}` : '';
      return fetch(`/api/calls/live${params}`).then(res => res.json());
    },
    refetchInterval: 5000, // Refresh every 5 seconds
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'received':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'dispatched':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'en_route':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'on_scene':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCallTypeIcon = (callType: string) => {
    switch (callType.toLowerCase()) {
      case 'fire':
        return (
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
        );
      case 'medical':
        return (
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L3 7v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7l-7-5zM10 9c-.6 0-1 .4-1 1v1H8c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1h1c.6 0 1-.4 1-1s-.4-1-1-1h-1v-1c0-.6-.4-1-1-1z"/>
          </svg>
        );
      case 'police':
        return (
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-neutral-700">Live 911 Calls</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-neutral-500">Live</span>
        </div>
      </div>
      
      {liveCalls && liveCalls.length > 0 ? (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {liveCalls.map((call) => (
            <div key={call.id} className="border border-neutral-200 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  {getCallTypeIcon(call.callType)}
                  <span className="font-medium text-neutral-700 capitalize">
                    {call.callType}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    call.priority <= 2 ? 'bg-red-100 text-red-800 border-red-200' :
                    call.priority <= 3 ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                    'bg-green-100 text-green-800 border-green-200'
                  }`}>
                    P{call.priority}
                  </span>
                  {call.city && (
                    <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                      {call.city}
                    </span>
                  )}
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(call.status)}`}>
                  {call.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              
              <p className="text-sm text-neutral-600 mb-2">{call.location}</p>
              
              <div className="flex justify-between items-center text-xs text-neutral-500">
                <span>Received: {new Date(call.receivedAt).toLocaleTimeString()}</span>
                {call.responseTime && (
                  <span className="font-medium">
                    Response: {call.responseTime.toFixed(1)}m
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-neutral-200 rounded-lg p-3 animate-pulse">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-neutral-200 rounded"></div>
                  <div className="h-4 bg-neutral-200 rounded w-16"></div>
                  <div className="h-4 bg-neutral-200 rounded w-8"></div>
                </div>
                <div className="h-4 bg-neutral-200 rounded w-12"></div>
              </div>
              <div className="h-3 bg-neutral-200 rounded w-3/4 mb-2"></div>
              <div className="flex justify-between">
                <div className="h-3 bg-neutral-200 rounded w-24"></div>
                <div className="h-3 bg-neutral-200 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 p-3 bg-neutral-50 rounded">
        <p className="text-xs text-neutral-600">
          Updates every 5 seconds • Showing active and recent calls
        </p>
      </div>
    </div>
  );
}