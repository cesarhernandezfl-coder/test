import { useQuery } from "@tanstack/react-query";

export interface Crisis {
  id: number;
  name: string;
  type: string;
  location: string;
  status: "active" | "resolved" | "monitoring";
  severity: "low" | "medium" | "high" | "critical";
}

export default function CrisisAlert() {
  const { data: activeCrisis } = useQuery<Crisis>({
    queryKey: ["/api/crisis/active"],
  });

  if (!activeCrisis) return null;

  return (
    <div className="bg-danger-light text-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div>
          <span className="font-semibold mr-2">Active Crisis:</span>
          <span>{activeCrisis.name} - {activeCrisis.location}</span>
        </div>
      </div>
      <button className="text-white bg-danger-DEFAULT hover:bg-opacity-80 font-medium px-4 py-1 rounded text-sm">
        View Details
      </button>
    </div>
  );
}
