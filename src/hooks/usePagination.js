import { useEffect, useState } from "react";

export const usePagination = (list, quantityForPage) => {
  const [numberPage, setNumberPage] = useState(1);
  useEffect(() => {
    setNumberPage(1);
  }, [quantityForPage]);
  const lowerLimit = quantityForPage * (numberPage - 1);
  const upperLimit = quantityForPage * numberPage - 1;
  const totalPages = Math.ceil(list.length / quantityForPage);
  const listTemp = list.slice(lowerLimit, upperLimit + 1);

  const changePageTo = (pages) => {
    if (pages > totalPages) setNumberPage(totalPages);
    else if (pages < 1) setNumberPage(1);
    else setNumberPage(pages);
  };

  const pages = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  return { currentPage: numberPage, listTemp, pages, changePageTo };
};

export default usePagination;
