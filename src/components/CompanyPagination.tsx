import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface CompanyPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  totalItems: number;
}

export function CompanyPagination({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  totalItems,
}: CompanyPaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsisStart = currentPage > 3;
    const showEllipsisEnd = currentPage < totalPages - 2;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (showEllipsisStart) {
        pages.push("ellipsis-start");
      }
      
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (showEllipsisEnd) {
        pages.push("ellipsis-end");
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="relative px-2 py-2">
      {/* Results and Rows per page - Single horizontal line */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="whitespace-nowrap">
            Showing {startItem} to {endItem} of {totalItems} results
          </span>
          <div className="h-4 w-px bg-border"></div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Rows per page:</span>
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => onPageSizeChange(Number(value))}
            >
              <SelectTrigger className="h-8 w-[70px] text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

      {/* Pagination Controls - Centered */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                className={cn(
                  "h-8 px-3 text-sm",
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer hover:bg-muted"
                )}
              />
            </PaginationItem>

            {getPageNumbers().map((page, index) => (
              <PaginationItem key={index}>
                {typeof page === "number" ? (
                  <PaginationLink
                    onClick={() => onPageChange(page)}
                    isActive={currentPage === page}
                    className={cn(
                      "h-8 w-8 text-sm cursor-pointer",
                      currentPage === page
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                        : "hover:bg-muted"
                    )}
                  >
                    {page}
                  </PaginationLink>
                ) : (
                  <PaginationEllipsis className="h-8 w-8 text-sm" />
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                className={cn(
                  "h-8 px-3 text-sm",
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer hover:bg-muted"
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
