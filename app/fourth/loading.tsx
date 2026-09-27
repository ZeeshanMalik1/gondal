import { PageLoading } from "@/components/ui/PageLoading";

/** Streams while any /fourth/* page resolves. Brand tokens come from the layout. */
export default function Loading() {
  return <PageLoading label="Loading fourth" />;
}
