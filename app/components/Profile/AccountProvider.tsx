"use client"
import { PropsWithChildren, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { IData } from "@/app/types/accounts";

import API from "@/app/services/api";
import useAccount from "@/app/store/useAccount"
import LoadingProfile from "@/app/components/Loading/LoadingProfile";

async function fetchAccount(username: string) {
  return await (await API.get<IData>(`/users/${username}`)).data;
}

export default function AccountProvider({ children }: PropsWithChildren) {
  const setAccount = useAccount((store) => store.actions.setAccount);
  const account = useQuery({
    queryKey: ["fetch-account"],
    queryFn: async () => await fetchAccount("RuanDevJs"),
  });

  useEffect(() => {
    if (account.data !== undefined) setAccount(account.data);
  }, [account.data, setAccount]);

  if (account.isLoading || !account.isFetched) return <LoadingProfile />

  return (
    <div>
      {children}
    </div>
  )
}
