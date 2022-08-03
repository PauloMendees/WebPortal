import { useState } from "react";
import { DolarData } from "../../../../service/dolar/types";

export default function useDolarTable() {
  const [actualPage, setActualPage] = useState<number>(1);

  function getPageData(data: any[], filter: string) {
    if (data) {
      if (actualPage === 1) {
        return data
          .filter(
            (item) =>
              item.id.includes(filter) ||
              item.value.toString().includes(filter) ||
              item.moment.includes(filter)
          )
          .slice(actualPage, 10);
      } else {
        return data
          .filter(
            (item) =>
              item.id.includes(filter) ||
              item.value.toString().includes(filter) ||
              item.moment.includes(filter)
          )
          .slice((actualPage - 1) * 10, actualPage * 10);
      }
    } else {
      return;
    }
  }

  function pageAdd(data: any[]) {
    if ((actualPage + 1) * 10 < data.length) {
      setActualPage(actualPage + 1);
    }
  }

  function pageSubtract() {
    if (actualPage !== 1) {
      setActualPage(actualPage - 1);
    }
  }

  return { getPageData, pageAdd, pageSubtract };
}
