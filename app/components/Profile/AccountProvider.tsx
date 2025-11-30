"use client"
import { PropsWithChildren, useEffect } from "react";
import { useParams } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import { IData } from "@/app/types/accounts";

import API from "@/app/services/api";
import useAccount from "@/app/store/useAccount"

import LoadingProfile from "@/app/components/Loading/LoadingProfile";
import NotFound from "./NotFound";

async function fetchAccount(username: string) {
  return await (await API.get<IData>(`/users/${username}`)).data;
}

export default function AccountProvider({ children }: PropsWithChildren) {
  const params = useParams();
  const setAccount = useAccount((store) => store.actions.setAccount);

  const account = useQuery({
    queryKey: ["fetch-account", params.username],
    queryFn: async () => await fetchAccount(params.username as string),
  });

  useEffect(() => {
    if (account.data !== undefined) setAccount(account.data);
  }, [account.data, setAccount]);

  if (account.isLoading || !account.isFetched) return <LoadingProfile />

  if (account.isError) {
    return <NotFound type="profile" />
  }

  return (
    <div>
      {children}
    </div>
  )
}
