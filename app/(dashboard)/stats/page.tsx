import Charts from "@/components/Charts";
import StatsContainer from "@/components/StatsContainer";
import { getChartsDataAction, getStatsAction } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function StatsPage() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });
  queryClient.prefetchQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataAction(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
      <Charts />
    </HydrationBoundary>
  );
}

export default StatsPage;
