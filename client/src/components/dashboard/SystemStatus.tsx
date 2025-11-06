import { useQuery } from "@tanstack/react-query";

export interface AISystem {
  id: number;
  name: string;
  status: "operational" | "degraded" | "offline" | "maintenance";
  description: string;
  lastUpdate: string;
}

export default function SystemStatus() {
  const { data: systems } = useQuery<AISystem[]>({
    queryKey: ["/api/systems"],
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-success-DEFAULT";
      case "degraded":
        return "bg-alert-DEFAULT";
      case "offline":
        return "bg-danger-DEFAULT";
      case "maintenance":
        return "bg-neutral-500";
      default:
        return "bg-neutral-300";
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-success-DEFAULT bg-opacity-10 text-success-DEFAULT";
      case "degraded":
        return "bg-alert-DEFAULT bg-opacity-10 text-alert-DEFAULT";
      case "offline":
        return "bg-danger-DEFAULT bg-opacity-10 text-danger-DEFAULT";
      case "maintenance":
        return "bg-neutral-500 bg-opacity-10 text-neutral-500";
      default:
        return "bg-neutral-300 bg-opacity-10 text-neutral-300";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-neutral-200">
        <h2 className="font-semibold text-neutral-700">AI Systems Status</h2>
      </div>
      
      {systems ? (
        systems.map((system) => (
          <div key={system.id} className="p-4 border-b border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full ${getStatusColor(system.status)} mr-2`}></span>
                <h3 className="font-medium">{system.name}</h3>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusBgColor(system.status)}`}>
                {getStatusText(system.status)}
              </span>
            </div>
            <p className="text-sm text-neutral-500 mb-2">{system.description}</p>
            <div className="flex items-center text-xs">
              <span className="text-neutral-500">Last update: {system.lastUpdate}</span>
              <span className="mx-2 text-neutral-300">|</span>
              <span className="text-primary cursor-pointer">View details</span>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="p-4 border-b border-neutral-200">
            <div className="h-6 bg-neutral-100 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-neutral-100 rounded w-full mb-2"></div>
            <div className="h-3 bg-neutral-100 rounded w-1/2"></div>
          </div>
          <div className="p-4 border-b border-neutral-200">
            <div className="h-6 bg-neutral-100 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-neutral-100 rounded w-full mb-2"></div>
            <div className="h-3 bg-neutral-100 rounded w-1/2"></div>
          </div>
        </>
      )}
      
      <div className="px-4 py-3 bg-neutral-50 rounded-b-lg">
        <button className="w-full py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded">
          View All Systems
        </button>
      </div>
    </div>
  );
}
