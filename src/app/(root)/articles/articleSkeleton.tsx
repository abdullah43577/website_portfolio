import Skeleton from "react-loading-skeleton";

export const ArticleSkeleton = function () {
  return Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="group relative flex cursor-pointer flex-col items-center justify-center xl:max-h-[500px] xl:flex-row"
    >
      <div className="w-full overflow-hidden xl:h-[430px] xl:w-auto">
        <Skeleton width={400} height={390} />
      </div>
      <div className="w-full bg-black p-10 lg:p-20 xl:h-[430px] xl:min-h-[430px] xl:w-[614px]">
        <Skeleton width={100} height={20} />
        <Skeleton width={480} height={40} style={{ margin: "16px 0" }} />
        <Skeleton width={120} height={20} />
      </div>
    </div>
  ));
};
