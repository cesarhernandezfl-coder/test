import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CrisisAlert from "@/components/dashboard/CrisisAlert";
import StatCard from "@/components/dashboard/StatCard";
import ResponseTimeAnalytics from "@/components/dashboard/ResponseTimeAnalytics";
import LiveCallMonitor from "@/components/dashboard/LiveCallMonitor";
import CrisisMap from "@/components/dashboard/CrisisMap";

interface DashboardStats {
  responseMetrics: {
    avgResponseTime: string;
    totalCalls: number;
    citiesTracked: number;
  };
  performanceRanking: {
    topCity: string;
    topTime: string;
    improvement: string;
  };
  callBreakdown: {
    fire: number;
    medical: number;
    police: number;
    other: number;
  };
  cityComparison: {
    bestPerforming: string;
    needsImprovement: string;
    averageTime: string;
    targetTime: string;
  };
}

export default function Dashboard() {
  const [searchCity, setSearchCity] = useState("");
  
  const { data: stats } = useQuery<DashboardStats>({
    queryKey: ["/api/dashboard/stats", searchCity],
    queryFn: () => {
      const params = searchCity ? `?city=${encodeURIComponent(searchCity)}` : '';
      return fetch(`/api/dashboard/stats${params}`).then(res => res.json());
    },
  });

  return (
    <>
      <CrisisAlert />
      
      <div className="p-6">
        {/* City Search Bar */}
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by city name (e.g., Austin, Seattle, New York)..."
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
              </div>
              {searchCity && (
                <button
                  onClick={() => setSearchCity("")}
                  className="px-4 py-2 text-sm text-neutral-600 hover:text-primary border border-neutral-300 rounded-lg hover:border-primary transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            {searchCity && (
              <div className="mt-2 text-sm text-neutral-600">
                Filtering metrics for: <span className="font-medium text-primary">{searchCity}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Crisis Response Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Average Response Time"
            value={stats?.responseMetrics.avgResponseTime || "Loading..."}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            iconBgColor="bg-primary-light"
            iconColor="text-primary"
          >
            <div className="flex items-center text-sm">
              <span className="text-success-DEFAULT font-medium">
                {stats ? `${stats.responseMetrics.totalCalls} Total Calls` : "Loading..."}
              </span>
              <span className="text-neutral-500 mx-2">|</span>
              <span className="text-primary">
                {stats ? `${stats.responseMetrics.citiesTracked} Cities` : ""}
              </span>
            </div>
            <div className="mt-2 bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-success-DEFAULT h-2 rounded-full" 
                style={{ width: "75%" }}
              ></div>
            </div>
          </StatCard>

          <StatCard
            title="Top Performing City"
            value={stats?.performanceRanking.topCity || "Loading..."}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            }
            iconBgColor="bg-success-light"
            iconColor="text-success-DEFAULT"
          >
            <div className="text-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-neutral-500">Best Time:</span>
                <span className="font-semibold text-success-DEFAULT">
                  {stats?.performanceRanking.topTime || "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Improvement:</span>
                <span className="font-semibold text-primary">
                  {stats?.performanceRanking.improvement || "-"}
                </span>
              </div>
            </div>
          </StatCard>

          <StatCard
            title="Call Distribution"
            value={stats ? `${stats.callBreakdown.fire + stats.callBreakdown.medical + stats.callBreakdown.police + stats.callBreakdown.other}` : "Loading..."}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
            }
            iconBgColor="bg-alert-light"
            iconColor="text-alert-DEFAULT"
          >
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-red-50 rounded p-2 text-center">
                <p className="text-red-600 text-xs">Fire</p>
                <p className="font-semibold text-red-700">{stats?.callBreakdown.fire || "-"}</p>
              </div>
              <div className="bg-blue-50 rounded p-2 text-center">
                <p className="text-blue-600 text-xs">Medical</p>
                <p className="font-semibold text-blue-700">{stats?.callBreakdown.medical || "-"}</p>
              </div>
              <div className="bg-gray-50 rounded p-2 text-center">
                <p className="text-gray-600 text-xs">Police</p>
                <p className="font-semibold text-gray-700">{stats?.callBreakdown.police || "-"}</p>
              </div>
              <div className="bg-green-50 rounded p-2 text-center">
                <p className="text-green-600 text-xs">Other</p>
                <p className="font-semibold text-green-700">{stats?.callBreakdown.other || "-"}</p>
              </div>
            </div>
          </StatCard>

          <StatCard
            title="City Comparison"
            value={stats?.cityComparison.averageTime || "Loading..."}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            }
            iconBgColor="bg-primary"
            iconColor="text-white"
          >
            <div className="text-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Best:</span>
                <span className="font-semibold text-success-DEFAULT">
                  {stats?.cityComparison.bestPerforming || "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Needs Work:</span>
                <span className="font-semibold text-alert-DEFAULT">
                  {stats?.cityComparison.needsImprovement || "-"}
                </span>
              </div>
              <div className="mt-2 bg-neutral-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </StatCard>
        </div>

        {/* Response Analytics and Live Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <ResponseTimeAnalytics searchFilter={searchCity} />
          <LiveCallMonitor searchFilter={searchCity} />
        </div>

        {/* Map and Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CrisisMap />
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 text-neutral-700">
              Performance Trends
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-green-700 font-medium">Response Times Improving</span>
                <span className="text-green-600 text-sm">↗ +12% this month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <span className="text-blue-700 font-medium">Medical Calls Priority</span>
                <span className="text-blue-600 text-sm">65% of total calls</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                <span className="text-yellow-700 font-medium">Peak Hours</span>
                <span className="text-yellow-600 text-sm">2 PM - 6 PM daily</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                <span className="text-red-700 font-medium">Areas for Improvement</span>
                <span className="text-red-600 text-sm">Downtown district</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
