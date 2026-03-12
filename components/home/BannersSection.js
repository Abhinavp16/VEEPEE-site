import Link from 'next/link';

export default function BannersSection() {
    return (
        <section className="pb-16 pt-4 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    {/* Left Banner - Dealer Banner (40%) */}
                    <Link href="/dealership" className="block w-full md:w-[40%] rounded-2xl cursor-pointer p-1 bg-gradient-to-br from-slate-200 via-blue-100 to-slate-300 shadow-sm hover:shadow-md transition-shadow">
                        <img 
                            src="/images/Banner/Dealer%20Banner.png" 
                            alt="Dealer Banner" 
                            className="w-full h-auto block rounded-[14px]" 
                         />
                    </Link>

                    {/* Right Banner - App Download Banner (60%) */}
                    <Link href="#" className="block w-full md:w-[60%] rounded-2xl cursor-pointer p-1 bg-gradient-to-br from-cyan-100 via-teal-100 to-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                        <img 
                            src="/images/Banner/appdownload%20banner.png" 
                            alt="App Download Banner" 
                            className="w-full h-auto block rounded-[14px]" 
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
