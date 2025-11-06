import { useQuery } from "@tanstack/react-query";

interface Insight {
  id: number;
  title: string;
  time: string;
  content: string;
  type: "prediction" | "analysis" | "recommendation";
  actionRequired?: boolean;
}

export default function AIInsights() {
  const { data: insights } = useQuery<Insight[]>({
    queryKey: ["/api/insights"],
  });

  return (
    <div className="bg-white rounded-lg shadow lg:col-span-2">
      <div className="p-4 border-b border-neutral-200">
        <h2 className="font-semibold text-neutral-700">AI-Generated Insights</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {insights?.filter(i => i.type === "prediction").slice(0, 2).map((insight) => (
            <div key={insight.id} className="bg-neutral-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">{insight.title}</h3>
                <span className="text-xs text-neutral-500">{insight.time}</span>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{insight.content}</p>
              <div className="h-32 bg-white rounded border border-neutral-200 p-2 flex items-center justify-center">
                {insight.type === "prediction" && (
                  <div className="w-full h-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-danger-DEFAULT bg-opacity-30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-danger-DEFAULT bg-opacity-50 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-danger-DEFAULT rounded-full"></div>
                    {/* Direction arrow */}
                    <div className="absolute top-1/3 right-1/3 transform rotate-45">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8 text-danger-DEFAULT" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 10l7-7m0 0l7 7m-7-7v18" 
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {insights?.filter(i => i.type === "recommendation" && i.actionRequired).slice(0, 1).map((insight) => (
          <div key={insight.id} className="bg-neutral-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">{insight.title}</h3>
              <span className="text-xs text-neutral-500">{insight.time}</span>
            </div>
            <div className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-primary mt-0.5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                />
              </svg>
              <div className="text-sm text-neutral-600">
                <p className="mb-2">{insight.content}</p>
                <ol className="list-decimal ml-5 mb-3 space-y-1">
                  <li>Evacuate residential areas in the northeast sector within the next 2 hours</li>
                  <li>Reallocate 4 fire units from south sector to establish containment line along Ridge Road</li>
                  <li>Request additional aerial support for precision water drops in hard-to-reach terrain</li>
                  <li>Deploy medical units at intersection of Highway 26 and County Road 14</li>
                </ol>
                <div className="flex">
                  <button className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-3 py-1 rounded mr-2">
                    Implement Recommendations
                  </button>
                  <button className="text-primary text-sm font-medium px-3 py-1 rounded border border-primary">
                    Modify Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
