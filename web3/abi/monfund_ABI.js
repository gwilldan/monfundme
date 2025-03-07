const monfund_ABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "ReentrancyGuardReentrantCall",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes12",
				name: "campaignId",
				type: "bytes12",
			},
		],
		name: "CampaignClosed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes12",
				name: "id",
				type: "bytes12",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountCollected",
				type: "uint256",
			},
		],
		name: "CampaignCompleted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes12",
				name: "campaignId",
				type: "bytes12",
			},
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "string",
				name: "title",
				type: "string",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "target",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "deadline",
				type: "uint256",
			},
		],
		name: "CampaignCreated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes12",
				name: "campaignId",
				type: "bytes12",
			},
			{
				indexed: true,
				internalType: "address",
				name: "donator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "DonationReceived",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "bytes12",
				name: "",
				type: "bytes12",
			},
		],
		name: "activeCampaigns",
		outputs: [
			{
				internalType: "bytes12",
				name: "_id",
				type: "bytes12",
			},
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "string",
				name: "title",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "target",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "amountCollected",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "image",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes12",
				name: "_id",
				type: "bytes12",
			},
		],
		name: "closeCampaign",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes12",
				name: "",
				type: "bytes12",
			},
		],
		name: "completedCampaigns",
		outputs: [
			{
				internalType: "bytes12",
				name: "_id",
				type: "bytes12",
			},
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "string",
				name: "title",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "target",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "amountCollected",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "image",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "contractOwner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address",
			},
			{
				internalType: "string",
				name: "_name",
				type: "string",
			},
			{
				internalType: "string",
				name: "_title",
				type: "string",
			},
			{
				internalType: "string",
				name: "_description",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_target",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_deadline",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "_image",
				type: "string",
			},
		],
		name: "createCampaign",
		outputs: [
			{
				internalType: "bytes12",
				name: "",
				type: "bytes12",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes12",
				name: "_id",
				type: "bytes12",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "donateWithMON",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "offset",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "limit",
				type: "uint256",
			},
		],
		name: "getActiveCampaigns",
		outputs: [
			{
				components: [
					{
						internalType: "bytes12",
						name: "_id",
						type: "bytes12",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "string",
						name: "title",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "target",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "amountCollected",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "image",
						type: "string",
					},
					{
						internalType: "address[]",
						name: "donators",
						type: "address[]",
					},
					{
						internalType: "uint256[]",
						name: "donations",
						type: "uint256[]",
					},
				],
				internalType: "struct Monfundme.Campaign[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes12",
				name: "_id",
				type: "bytes12",
			},
		],
		name: "getCampaignById",
		outputs: [
			{
				components: [
					{
						internalType: "bytes12",
						name: "_id",
						type: "bytes12",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "string",
						name: "title",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "target",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "amountCollected",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "image",
						type: "string",
					},
					{
						internalType: "address[]",
						name: "donators",
						type: "address[]",
					},
					{
						internalType: "uint256[]",
						name: "donations",
						type: "uint256[]",
					},
				],
				internalType: "struct Monfundme.Campaign",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address",
			},
		],
		name: "getCampaignsOfAddress",
		outputs: [
			{
				components: [
					{
						internalType: "bytes12",
						name: "_id",
						type: "bytes12",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "string",
						name: "title",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "target",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "amountCollected",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "image",
						type: "string",
					},
					{
						internalType: "address[]",
						name: "donators",
						type: "address[]",
					},
					{
						internalType: "uint256[]",
						name: "donations",
						type: "uint256[]",
					},
				],
				internalType: "struct Monfundme.Campaign[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "offset",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "limit",
				type: "uint256",
			},
		],
		name: "getCompletedCampaigns",
		outputs: [
			{
				components: [
					{
						internalType: "bytes12",
						name: "_id",
						type: "bytes12",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "string",
						name: "title",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "target",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "amountCollected",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "image",
						type: "string",
					},
					{
						internalType: "address[]",
						name: "donators",
						type: "address[]",
					},
					{
						internalType: "uint256[]",
						name: "donations",
						type: "uint256[]",
					},
				],
				internalType: "struct Monfundme.Campaign[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getNumberOfActiveCampaigns",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getNumberOfCompletedCampaigns",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

export default monfund_ABI;
