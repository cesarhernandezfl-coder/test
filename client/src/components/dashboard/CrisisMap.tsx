import { useQuery } from "@tanstack/react-query";

interface MapData {
  affectedArea: string;
  population: string;
  riskLevel: "low" | "medium" | "high";
  weather: string;
}

export default function CrisisMap() {
  const { data: mapData } = useQuery<MapData>({
    queryKey: ["/api/crisis/map"],
  });

  return (
    <div className="bg-white rounded-lg shadow lg:col-span-2">
      <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
        <h2 className="font-semibold text-neutral-700">Crisis Map</h2>
        <div className="flex items-center">
          <button className="text-neutral-500 hover:text-neutral-700 mr-2">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>
          <button className="text-neutral-500 hover:text-neutral-700">
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
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="relative h-80 bg-neutral-100 rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Satellite map of wildfire area"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4))" }}
          ></div>

          {/* Map overlay elements */}
          <div className="absolute top-3 left-3 bg-white bg-opacity-90 rounded-md p-2 text-sm shadow-md">
            <div className="flex items-center mb-1">
              <span className="w-2 h-2 rounded-full bg-danger-DEFAULT mr-1"></span>
              <span className="font-medium text-danger-DEFAULT">Active Fire</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="w-2 h-2 rounded-full bg-orange-400 mr-1"></span>
              <span>Evacuation Zone</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
              <span>Resource Location</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span>Safe Zone</span>
            </div>
          </div>

          {/* Markers on the map (simplified representation) */}
          <div className="absolute top-1/4 left-1/3 h-5 w-5 bg-danger-DEFAULT rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-1/4 left-1/3 h-4 w-4 bg-danger-DEFAULT rounded-full"></div>

          <div className="absolute top-1/2 left-2/3 h-4 w-4 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 h-4 w-4 bg-blue-500 rounded-full"></div>

          <div className="absolute bottom-1/3 left-1/4 bg-orange-400 bg-opacity-40 h-24 w-36 rounded-lg border border-orange-500"></div>
          <div className="absolute bottom-1/3 right-1/3 bg-green-500 bg-opacity-30 h-16 w-28 rounded-lg border border-green-600"></div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-neutral-100 p-3 rounded">
            <p className="text-neutral-500 mb-1">Affected Area</p>
            <p className="font-semibold">{mapData?.affectedArea || "Loading..."}</p>
          </div>
          <div className="bg-neutral-100 p-3 rounded">
            <p className="text-neutral-500 mb-1">Population</p>
            <p className="font-semibold">{mapData?.population || "Loading..."}</p>
          </div>
          <div className="bg-neutral-100 p-3 rounded">
            <p className="text-neutral-500 mb-1">Risk Level</p>
            <p className={`font-semibold ${
              mapData?.riskLevel === "high" ? "text-danger-DEFAULT" : 
              mapData?.riskLevel === "medium" ? "text-alert-DEFAULT" : 
              "text-success-DEFAULT"
            }`}>
              {mapData?.riskLevel ? mapData.riskLevel.charAt(0).toUpperCase() + mapData.riskLevel.slice(1) : "Loading..."}
            </p>
          </div>
          <div className="bg-neutral-100 p-3 rounded">
            <p className="text-neutral-500 mb-1">Weather</p>
            <p className="font-semibold">{mapData?.weather || "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
