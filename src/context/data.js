import { useState, createContext, useContext, useEffect } from "react";
import { get, post } from "../services";
import getLinkToPay from "../helpers/preference";

const DataContext = createContext();

function DataProvider({ children }) {
  const [modal, setModal] = useState({ action: "login", isOpen: false });
  const [chosenPlan, setChosenPlan] = useState({});
  const [plans, setPlans] = useState([]);
  const [registers, setRegisters] = useState([]);
  const [isGetting, setIsGetting] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        // get plans
        const plans = await get("plans");
        setPlans(plans);
        const plan = plans[0];

        const link = await getLinkToPay(plan);

        setChosenPlan({ ...plan, link });

        // get registers
        const registers = await get("registers");
        setRegisters(registers);

        setIsGetting(false);
      }catch(e) {
        console.error(e);

        setIsGetting(false);
      }
    }

    fetch();
  }, []);

  // pending get one - update - destroy for registers and plans

  return (
    <DataContext.Provider
      value={{
        plans,
        registers,
        isGetting,
        error,
        modal,
        chosenPlan,
        setChosenPlan,
        setModal,
        setError,
        setIsGetting
      }}
    >
      { children }
    </DataContext.Provider>
  );
}

function useData() {
  return useContext(DataContext);
}

export { DataProvider, useData };
