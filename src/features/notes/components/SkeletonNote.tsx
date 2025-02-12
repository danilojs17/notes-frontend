import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonNote() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[30px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <div className="space-y-2 flex">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
}
