import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  children?: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
  children,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-neutral-500 text-sm mb-1">{title}</p>
          <h3 className="text-2xl font-semibold text-neutral-700">{value}</h3>
        </div>
        <div
          className={`${iconBgColor} bg-opacity-10 p-3 rounded-full`}
        >
          <div className={`${iconColor} h-6 w-6`}>{icon}</div>
        </div>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}
