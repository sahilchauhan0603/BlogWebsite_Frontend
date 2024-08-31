import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-black py-2 border-t-2 border-t-red-400 w-full">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 border-red-500 py-1 px-4 rounded-md text-white"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2  border-red-500 py-1 px-4 rounded-md text-white"
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold ml-auto text-white">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
