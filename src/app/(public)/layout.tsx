
export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto">
                    <Categories />
                    {children}
                </div>

            </main>

            <Footer />
        </div>
    );
}