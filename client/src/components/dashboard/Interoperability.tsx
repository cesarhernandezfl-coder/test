import { useQuery } from "@tanstack/react-query";

interface DataExchangeStatus {
  id: number;
  source: string;
  target: string;
  status: "active" | "failed" | "degraded";
  performance: number;
}

export default function Interoperability() {
  const { data: exchanges } = useQuery<DataExchangeStatus[]>({
    queryKey: ["/api/systems/exchanges"],
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
        <h2 className="font-semibold text-neutral-700">System Interoperability</h2>
        <button className="text-primary-dark hover:text-primary text-sm font-medium">
          Configure
        </button>
      </div>
      <div className="p-4">
        <div className="bg-neutral-50 p-4 rounded-lg mb-4">
          <h3 className="text-sm font-medium mb-3">Data Exchange Status</h3>
          <div className="grid grid-cols-2 gap-4">
            {exchanges ? (
              exchanges.map((exchange) => (
                <div key={exchange.id}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{exchange.source} → {exchange.target}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      exchange.status === "active" 
                        ? "bg-success-DEFAULT bg-opacity-10 text-success-DEFAULT" 
                        : "bg-danger-DEFAULT bg-opacity-10 text-danger-DEFAULT"
                    }`}>
                      {exchange.status === "active" ? "Active" : "Failed"}
                    </span>
                  </div>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${exchange.status === "active" ? "bg-success-DEFAULT" : "bg-danger-DEFAULT"}`} 
                      style={{ width: `${exchange.performance}%` }}>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div>
                  <div className="h-5 bg-neutral-100 rounded w-3/4 mb-1"></div>
                  <div className="h-2 bg-neutral-100 rounded w-full"></div>
                </div>
                <div>
                  <div className="h-5 bg-neutral-100 rounded w-3/4 mb-1"></div>
                  <div className="h-2 bg-neutral-100 rounded w-full"></div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="bg-neutral-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">AI Systems Communication</h3>
            <span className="text-xs font-medium px-2 py-0.5 bg-success-DEFAULT bg-opacity-10 text-success-DEFAULT rounded-full">
              87% Success Rate
            </span>
          </div>
          
          <div className="relative h-60 bg-white p-3 rounded border border-neutral-200 overflow-hidden">
            {/* Simple network visualization */}
            <div className="h-full w-full relative">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-white text-xs font-medium">
                Command Center
              </div>
              
              {/* Connected nodes */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-success-DEFAULT flex items-center justify-center text-white text-xs">
                Predictive
              </div>
              <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-success-DEFAULT flex items-center justify-center text-white text-xs">
                Resource
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-alert-DEFAULT flex items-center justify-center text-white text-xs">
                Router
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-danger-DEFAULT flex items-center justify-center text-white text-xs">
                Assessment
              </div>
              
              {/* Connection lines */}
              <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Center to Predictive */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#107c10" strokeWidth="2" />
                {/* Center to Resource */}
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#107c10" strokeWidth="2" />
                {/* Center to Router */}
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#d83b01" strokeWidth="2" strokeDasharray="4" />
                {/* Center to Assessment */}
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#a4262c" strokeWidth="2" strokeDasharray="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
