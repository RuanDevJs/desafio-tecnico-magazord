import { create } from "zustand"
import { IData } from "../types/accounts";
interface IAccount {
  state: {
    account: IData | null;
  };
  actions: {
    setAccount: (accountData: IData) => void;
  }
}

const useAccount = create<IAccount>((set) => ({
  state: {
    account: null,
    repositories: null
  },
  actions: {
    setAccount: (accountData: IData) => set((state) => ({ state: ({ ...state.state, account: accountData }) }))
  }
}))

export default useAccount;
