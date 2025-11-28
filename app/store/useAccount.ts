import { create } from "zustand"

interface IData {
  name: string;
  bio: string;
  company: string | null;
  location: string;
  blog: string;
}

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
    account: null
  },
  actions: {
    setAccount: (accountData: IData) => set(() => ({ state: { account: accountData } }))
  }
}))

export default useAccount;
