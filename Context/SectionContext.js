import { createContext } from "react";
import { useInView } from "react-intersection-observer";
export const SectionContext = createContext([]);

export const SectionProvider = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <SectionContext.Provider value={[ref, inView]}>
      {props.children}
    </SectionContext.Provider>
  );
};

