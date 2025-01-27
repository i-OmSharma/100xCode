export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="bg-white rounded-md shadow-md p-6">
        <div className="text-gray-700">
            {title}
            ?
        </div>
        <div className="flex justify-between p-2">
            <div className="font-bold text-2xl">
                $ {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium">
                <div className="text-blue-400">
                    {orderCount} order(s) 
                </div>
                <div>
                    <div className="text-blue-400">
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div> : null}
        </div>
    </div>
}