import ReactPaginate from "react-paginate";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ProjectsPagination {
  pageCount: number;
  currentPage: number;
  onPageChange: (selected: { selected: number }) => void;
}

export const ProjectPagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: ProjectsPagination) => {
  return (
    <ReactPaginate
      previousLabel={
        <div className="flex size-[51px] items-center justify-center rounded-[8px] border-[0.5px] border-black">
          <ChevronLeftIcon />
        </div>
      }
      nextLabel={
        <div className="flex size-[51px] items-center justify-center rounded-[8px] border-[0.5px] border-black">
          <ChevronRightIcon />
        </div>
      }
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="flex gap-2 items-center justify-center mx-auto mt-8 max-w-[621px]"
      pageClassName="border-[0.5px] border-black rounded-[8px] size-[51px] flex items-center justify-center"
      // pageLinkClassName="text-dark-400"
      activeClassName="bg-black text-white size-[51px] flex items-center justify-center"
      activeLinkClassName="text-white"
      previousClassName="px-3 py-1 rounded hover:bg-blue-50"
      nextClassName="px-3 py-1 rounded hover:bg-blue-50"
      // previousLinkClassName="text-dark-400"
      // nextLinkClassName="text-dark-400"
      disabledClassName="opacity-50 cursor-not-allowed"
      forcePage={currentPage}
    />
  );
};
