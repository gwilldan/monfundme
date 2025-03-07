import { Wallet } from "lucide-react";

const LoadingCard = ({ isTrending }: { isTrending: boolean }) => {
	return (
		<div
			className={` ${
				isTrending ? "h-[500px]" : "h-[300px]"
			} flex flex-col shadow-xl rounded-t-xl group border-[0.5px] border-slate-200 `}>
			<div className="h-[55%] shrink-0 relative rounded-t-xl overflow-hidden -z-10   "></div>
			<div
				className={` ${
					isTrending ? "gap-2" : "gap-1"
				} flex-1 bg-slate-100 rounded-t-xl -mt-2 pt-4 pb-3 px-4 flex flex-col `}>
				<div
					className={` ${isTrending ? "h-[60%]" : "h-[30%]"} overflow-hidden `}>
					<h2
						className={`${
							isTrending ? "text-xl leading-5" : "leading-4"
						} font-bold `}></h2>
					{isTrending && (
						<p className=" leading-[16px] flex-1 text-black/90"></p>
					)}
				</div>

				<div className=" h-[5px] w-full mt-4 bg-gray-300 relative overflow-hidden animate-pulse ">
					<div
						className={` h-full absolute bg-accent-default top-0 left-0 z-10`}
						style={{
							width: `10%`,
						}}></div>
				</div>
				<div
					className={` ${
						isTrending ? "" : "text-sm"
					} font-semibold flex items-center gap-2`}>
					<p className="flex-1"></p>
					<p></p>
				</div>

				<div className=" flex items-center gap-2 ">
					<div className=" p-2 bg-accent-default rounded-full">
						<Wallet
							className=" text-white font-bold "
							size={isTrending ? 16 : 13}
						/>
					</div>
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default LoadingCard;
