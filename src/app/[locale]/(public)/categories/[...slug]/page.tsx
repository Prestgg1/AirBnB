"use client"
import { useQuery, QueryClientProvider, QueryClient } from "react-query"
import axios from "axios"
import { useState } from "react"

function fetchCategory(slug: string): Promise<any> {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?slug=${slug}`).then(res => res.data)
}

function CategoryContent({ slug }: { slug: string }) {
    const { data, isLoading, error } = useQuery('category', () => fetchCategory(slug))
    if(isLoading) return <div>Gözle...</div>
    if(error) return <div>Data Gelmedi</div>    
    
    return (
        <div className="flex flex-col gap-5 justify-center items-center [&>*]:text-black">
            {data.map((category: any) => (
                <div key={category.id}>
                    <h1 className="text-2xl font-bold">{category.name}</h1>
                    <h2 className="text-lg">{category.slug}</h2>
                </div>
            ))}
        </div>
    )
}

export default function CategoryPage({ params }: { params: { slug: string[] } }) {
    const [queryClient] = useState(() => new QueryClient())
    const slug = params.slug.join('/')

    return (
        <QueryClientProvider client={queryClient}>
            <CategoryContent slug={slug} />
        </QueryClientProvider>
    )
}