import { useState, createContext, useContext, useEffect } from "react";
import { get } from "../services";
import getLinkToPay from "../helpers/preference";

const DataContext = createContext();

function DataProvider({ children }) {
  const [modal, setModal] = useState({ action: "login", isOpen: false });
  const [chosenPlan, setChosenPlan] = useState({});
  const [plans, setPlans] = useState([]);
  const [registers, setRegisters] = useState([]);
  const [isGetting, setIsGetting] = useState(true);
  const [members, setMembers] = useState([]);
  const [backup, setBackup] = useState({
    members: []
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        // get plans
        const plans = await get("plans");
        setPlans(plans);
        const user = await get("users/info/profile");
        const plan = plans[0];

        const link = !user.plan[0] ? await getLinkToPay(plan, user) : "";

        setChosenPlan({ ...plan, link });

        setIsGetting(false);
      }catch(e) {
        console.error(e);

        setIsGetting(false);
      }
    }

    fetch();
  }, []);

  const searchMember = (param) => {
    const result = backup.members.filter((member) => (`${member.name} ${member.last_name}`).toLowerCase().includes(param.toLowerCase()));
    setMembers(result);
  }

  const updateMember = (oldMember, newMember) => {
    const membersToUpdate = members;
    const index = membersToUpdate.indexOf(oldMember);
    membersToUpdate[index] = newMember;
    setMembers(membersToUpdate);
    setBackup((prev) => ({...prev, membersToUpdate}));
  }

  return (
    <DataContext.Provider
      value={{
        plans,
        registers,
        isGetting,
        error,
        modal,
        chosenPlan,
        members,
        backup,
        setBackup,
        setMembers,
        setChosenPlan,
        setModal,
        setError,
        setIsGetting,
        setRegisters,
        searchMember,
        updateMember
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
