import { useState, createContext, useContext, useEffect } from "react";
import { destroy, get } from "../services";
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
    setBackup((prev) => ({...prev, members: membersToUpdate}));
  }

  const deleteMember = async (id) => {
    const newMembers = members.filter((member) => member.id !== id);
    setMembers(newMembers);
    setBackup((prev) => ({...prev, members: newMembers}));

    // delete attendance
    const toDelete = registers.filter((register) => register.user[0] === id);
    toDelete.forEach(async (register) => {
      await destroy("registers", register.id);
    });

    const newRegisters = registers.filter((register) => register.user[0] !== id);
    setRegisters(newRegisters);
  }

  const updateRegister = (oldRegister, newRegister) => {
    const registersToUpdate = registers;
    const index = registersToUpdate.indexOf(oldRegister);
    registersToUpdate[index] = newRegister;
    setRegisters(registersToUpdate);
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
        updateMember,
        deleteMember,
        updateRegister
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
