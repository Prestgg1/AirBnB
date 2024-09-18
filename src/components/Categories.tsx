"use client"
import Link from "next/link";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { useState } from "react";
import { Button } from "./ui/button";

function fetchCategories() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`).then(res => res.data)
}

function CategoryContent() {
    const { error, data, isLoading } = useQuery('fetchCategories', fetchCategories)
    if(error) return <div>Data Gelmedi</div>
    
    return (
        <div className="flex bg-white p-4 items-center gap-5 justify-center text-black flex-wrap">
            {isLoading ? <div>Loading...</div> : data?.map((category: any) => (
                <Link href={`/categories/${category.slug}`} key={category.id}>
                    <Button className="bg-red-500 font-bold">
                    {category.name}
                    </Button>
                </Link>
            ))}
        </div>
    )
}

export default function Categories() {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <CategoryContent />
        </QueryClientProvider>
    )
}