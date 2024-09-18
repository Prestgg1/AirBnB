"use client"
import axios from "axios";
import HouseCard from "./HouseCard";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Link from "next/link";
function fetchTopHouses() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/homes?limit=6`).then(res => res.data)
}

const queryClient = new QueryClient();

function TopHouseContent() {
    const { data, isLoading, error } = useQuery('TopHouses', fetchTopHouses)
    if(isLoading) return <div>Gözle...</div>
    if(error) return <div>Data Gelmedi</div>
    return (
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4  w-full">
            {data?.map((house: any, index: number) => (
                <Link href={`/homes/${house.id}`} key={index}>
                    <HouseCard datas={house} key={index} />
                </Link>
            ))}
        </div>
    )
}

export default function TopHouse() {
    return (
        <QueryClientProvider client={queryClient}>
            <TopHouseContent />
        </QueryClientProvider>
    )
}
