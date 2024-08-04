import Skeleton from "react-loading-skeleton";

export const ProjectSkeleton = function () {
  return Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className="group relative max-w-[600px] cursor-pointer xl:ml-40"
    >
      <div className="overflow-hidden">
        <Skeleton className="h-[300px] xl:h-[500px]" />
      </div>
      <div className="absolute -bottom-16 -right-2 w-[90%] bg-black px-6 py-6 md:-right-[150px] md:py-14 xl:-right-[400px] xl:bottom-20 xl:w-full">
        <Skeleton width={150} height={20} />
        <Skeleton width="60%" height={30} className="my-2 md:my-8" />
        <Skeleton width={120} height={20} />
      </div>
    </div>
  ));
};
