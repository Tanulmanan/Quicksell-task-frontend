import { createContext, useContext, useEffect, useState } from "react";

export const APIContext = createContext({});

export const APIContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [updatedState, setUpdatedState] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");

  const fetchData = async () => {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );

    const result = await response.json();

    setState(result);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData().then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const groupAndSortTickets = () => {
      let groupedTickets = {};

      state.tickets.forEach((ticket) => {
        const groupKey = ticket[grouping];

        if (!groupedTickets[groupKey]) {
          groupedTickets[groupKey] = [];
        }

        groupedTickets[groupKey].push(ticket);
      });

      Object.keys(groupedTickets).forEach((groupKey) => {
        groupedTickets[groupKey].sort((a, b) => {
          if (ordering === "priority") {
            return a.priority - b.priority;
          } else if (ordering === "title") {
            return a.title.localeCompare(b.title);
          }
        });
      });

      setUpdatedState(groupedTickets);
    };

    Object.keys(state).length > 0 && groupAndSortTickets();
  }, [ordering, grouping, state]);

  return (
    <APIContext.Provider
      value={{
        updatedState,
        isLoading,
        ordering,
        setGrouping,
        setOrdering,
        grouping,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPIContext = () => useContext(APIContext);
