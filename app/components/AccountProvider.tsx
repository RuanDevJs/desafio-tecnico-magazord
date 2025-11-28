"use client"
import { PropsWithChildren, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { IData } from "../types/accounts";

import API from "../services/api";
import useAccount from "../store/useAccount"

async function fetchAccount(username: string) {
  return await (await API.get<IData>(`/users/${username}`)).data;
}

export default function AccountProvider({ children }: PropsWithChildren) {
  const setAccount = useAccount((store) => store.actions.setAccount);
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-account"],
    queryFn: async () => await fetchAccount("RuanDevJs"),
  });

  useEffect(() => {
    if (data !== undefined) setAccount(data);
  }, [data, setAccount]);

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <div>
      {children}
    </div>
  )
}
