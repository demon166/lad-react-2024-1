import { FC } from "react";
import { createArray } from "@/tools";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { currentPage, setCurrentPage, last, pages, first } = props;

  if (pages === 1) {
    return null;
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={clsx("page-link", { disable: currentPage === first })}
            href=""
            onClick={(event) => {
              event.preventDefault();
              setCurrentPage((prevState) => {
                if (prevState === first) {
                  return first;
                } else {
                  return prevState - 1;
                }
              });
            }}
          >
            Previous
          </a>
        </li>
        {createArray(pages).map((page) => (
          <li className="page-item" key={"key_" + page}>
            <a
              className={clsx("page-link", { active: currentPage === page })}
              href=""
              onClick={(event) => {
                event.preventDefault();
                setCurrentPage(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className={clsx("page-link", { disable: currentPage === last })}
            href=""
            onClick={(event) => {
              event.preventDefault();
              setCurrentPage((prevState) => {
                if (prevState === last) {
                  return last;
                } else {
                  return prevState + 1;
                }
              });
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
