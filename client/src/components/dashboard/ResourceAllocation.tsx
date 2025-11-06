import { useQuery } from "@tanstack/react-query";

interface ResourceUnit {
  id: number;
  type: string;
  priority: "priority" | "normal";
  current: number;
  recommended: number | "Sufficient";
}

interface ResourceDistribution {
  id: number;
  name: string;
  percentage: number;
  color: string;
}

export default function ResourceAllocation() {
  const { data: units } = useQuery<ResourceUnit[]>({
    queryKey: ["/api/resources/units"],
  });

  const { data: distribution } = useQuery<ResourceDistribution[]>({
    queryKey: ["/api/resources/distribution"],
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
        <h2 className="font-semibold text-neutral-700">Resource Allocation</h2>
        <div className="flex">
          <button className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-3 py-1 rounded">
            Allocate Resources
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-neutral-50 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">AI-Recommended Allocation</h3>
            <span className="text-xs text-neutral-500">Updated 5m ago</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {units ? (
              units.map((unit) => (
                <div key={unit.id} className="bg-white p-3 rounded border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{unit.type}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      unit.priority === "priority" 
                        ? "bg-alert-DEFAULT bg-opacity-10 text-alert-DEFAULT" 
                        : "bg-neutral-500 bg-opacity-10 text-neutral-500"
                    }`}>
                      {unit.priority === "priority" ? "Priority" : "Normal"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Current</span>
                    <span className="text-sm font-medium">{unit.current}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Recommended</span>
                    <span className={`text-sm font-medium ${
                      unit.recommended === "Sufficient" 
                        ? "text-success-DEFAULT" 
                        : typeof unit.recommended === "number" && unit.recommended > 0 
                          ? "text-alert-DEFAULT" 
                          : ""
                    }`}>
                      {unit.recommended === "Sufficient" ? "Sufficient" : `+${unit.recommended}`}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="bg-white p-3 rounded border border-neutral-200">
                  <div className="h-5 bg-neutral-100 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-neutral-100 rounded w-full mb-1"></div>
                  <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
                </div>
                <div className="bg-white p-3 rounded border border-neutral-200">
                  <div className="h-5 bg-neutral-100 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-neutral-100 rounded w-full mb-1"></div>
                  <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
                </div>
                <div className="bg-white p-3 rounded border border-neutral-200">
                  <div className="h-5 bg-neutral-100 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-neutral-100 rounded w-full mb-1"></div>
                  <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="bg-neutral-50 p-4 rounded-lg mb-4">
          <h3 className="text-sm font-medium mb-3">Resource Distribution</h3>
          <div className="bg-white p-3 rounded border border-neutral-200">
            {distribution ? (
              distribution.map((item) => (
                <div key={item.id} className="flex items-center mb-2 last:mb-0">
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                  <div className="text-sm flex-grow">{item.name}</div>
                  <div className="text-sm font-medium">{item.percentage}%</div>
                </div>
              ))
            ) : (
              <>
                <div className="h-4 bg-neutral-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-neutral-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-neutral-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-neutral-100 rounded w-full"></div>
              </>
            )}
          </div>
        </div>
        
        <div className="p-4 bg-alert-DEFAULT bg-opacity-10 rounded-lg">
          <div className="flex items-start">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-alert-DEFAULT mt-0.5 mr-2" 
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
            <div>
              <h3 className="font-medium text-alert-DEFAULT mb-1">Resource Alert</h3>
              <p className="text-sm text-neutral-600">AI analysis suggests additional fire containment resources needed in the North sector. Reallocate from South sector?</p>
              <div className="mt-2 flex">
                <button className="bg-alert-DEFAULT hover:bg-opacity-90 text-white text-sm font-medium px-3 py-1 rounded mr-2">
                  Approve Reallocation
                </button>
                <button className="bg-white text-alert-DEFAULT text-sm font-medium px-3 py-1 rounded border border-alert-DEFAULT">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
