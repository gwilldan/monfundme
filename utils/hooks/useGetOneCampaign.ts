"use client";
import { config } from "@/web3/config";
import monfund_ABI from "@/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { useEffect } from "react";
import { useReadContract, useBlockNumber } from "wagmi";
import { Campaign } from "@/types";

const useGetOneCampaign = (id: string) => {
	const { data: blockNumber } = useBlockNumber({ watch: true });
	const {
		data: campaign,
		refetch,
		isPending,
	} = useReadContract({
		abi: monfund_ABI,
		address: monfund_CA,
		functionName: "getCampaignById",
		args: [id],
		config: config,
	});

	useEffect(() => {
		if (Number(blockNumber) % 5 === 0) refetch();
	}, [blockNumber]);

	return { campaign: campaign as Campaign, isPending, refetch };
};

export default useGetOneCampaign;
