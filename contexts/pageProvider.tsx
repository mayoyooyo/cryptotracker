import { createContext, ReactNode, useContext, useState } from "react";

type pageType = {
  currentPage: number;
  setCurrentPage: (curentPage: number) => void;
};

type Props = {
  children: ReactNode;
};

const PageContext = createContext<pageType>({} as pageType);

export const PageProviderWrapper = ({ children }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export function usePageContext() {
  return useContext(PageContext);
}
