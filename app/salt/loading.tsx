import { PageLoading } from "@/components/ui/PageLoading";

/** Streams while any /salt/* page resolves. Brand tokens come from the layout. */
export default function Loading() {
  return <PageLoading label="Loading salt" />;
}
