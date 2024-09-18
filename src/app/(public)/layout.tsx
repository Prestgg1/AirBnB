
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
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