"use client";
import { getStatsAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import StatsCards, { StatsLoadingCard } from "./StatsCards";

const StatsContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCards title="pending jobs" value={data?.pending || 0} />
      <StatsCards title="interviews set" value={data?.interview || 0} />
      <StatsCards title="jobs declined" value={data?.declined || 0} />
    </div>
  );
};

export default StatsContainer;
