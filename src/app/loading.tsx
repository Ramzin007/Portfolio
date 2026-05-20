import { Skeleton } from "@/components/shared/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-28 sm:px-6 lg:px-8">
      <Skeleton className="h-14 w-72" />
      <Skeleton className="h-32 w-full max-w-3xl" />
      <div className="grid gap-5 md:grid-cols-3">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </main>
  );
}
