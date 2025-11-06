import { useQuery } from "@tanstack/react-query";

interface ResponseTimeData {
  city: string;
  fireAvg: number;
  medicalAvg: number;
  policeAvg: number;
  overall: number;
}

interface ResponseTimeAnalyticsProps {
  searchFilter?: string;
}

export default function ResponseTimeAnalytics({ searchFilter = "" }: ResponseTimeAnalyticsProps) {
  const { data: responseData } = useQuery<ResponseTimeData[]>({
    queryKey: ["/api/response-times/comparison"],
  });

  // Filter data based on search filter
  const filteredData = responseData?.filter(city => 
    city.city.toLowerCase().includes(searchFilter.toLowerCase())
  ) || [];

  return (
    <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
      <h2 className="text-lg font-semibold mb-4 text-neutral-700">
        City Response Time Comparison
      </h2>
      
      {filteredData.length > 0 ? (
        <div className="space-y-4">
          {filteredData.map((city, index) => (
            <div key={city.city} className="border-b border-neutral-100 pb-4 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-neutral-700">{city.city}</h3>
                <span className="text-sm font-semibold text-primary">
                  {city.overall.toFixed(1)} min avg
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {/* Fire Response */}
                <div className="bg-red-50 p-3 rounded">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-red-600 font-medium">Fire</span>
                    <span className="text-sm font-semibold text-red-700">
                      {city.fireAvg.toFixed(1)}m
                    </span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${Math.min((city.fireAvg / 15) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Medical Response */}
                <div className="bg-blue-50 p-3 rounded">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-blue-600 font-medium">Medical</span>
                    <span className="text-sm font-semibold text-blue-700">
                      {city.medicalAvg.toFixed(1)}m
                    </span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${Math.min((city.medicalAvg / 15) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Police Response */}
                <div className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-600 font-medium">Police</span>
                    <span className="text-sm font-semibold text-gray-700">
                      {city.policeAvg.toFixed(1)}m
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-500 h-2 rounded-full"
                      style={{ width: `${Math.min((city.policeAvg / 15) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : responseData && searchFilter ? (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-neutral-900">No cities found</h3>
          <p className="mt-1 text-sm text-neutral-500">
            No cities match "{searchFilter}". Try a different search term.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-b border-neutral-100 pb-4 last:border-b-0">
              <div className="animate-pulse">
                <div className="h-4 bg-neutral-200 rounded w-1/3 mb-2"></div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 bg-neutral-100 rounded"></div>
                  <div className="h-16 bg-neutral-100 rounded"></div>
                  <div className="h-16 bg-neutral-100 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 p-3 bg-neutral-50 rounded">
        <p className="text-xs text-neutral-600">
          Target response times: Fire: 6 min | Medical: 8 min | Police: 10 min
        </p>
      </div>
    </div>
  );
}