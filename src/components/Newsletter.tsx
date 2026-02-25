export default function Newsletter() {
    return (
        <section className="bg-black py-5 border-b-2 border-zinc-900">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 w-full text-center md:text-left">
                    <h3 className="text-white font-black text-[13px] leading-[1.3] uppercase tracking-wider">
                        JOIN OUR MAILING LIST FOR EXCLUSIVE <br className="hidden md:block" />
                        NEWS OFFERS AND MORE.
                    </h3>
                </div>

                <form className="flex w-full md:max-w-md h-10">
                    <input
                        type="email"
                        placeholder="Email Address*"
                        className="flex-1 bg-black border border-[#333] border-r-0 px-4 text-white text-[11px] font-medium placeholder:text-[#888] focus:border-red-600 outline-none transition-colors"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#ff0000] text-white px-8 font-black uppercase text-[11px] tracking-wider hover:bg-red-700 transition-colors whitespace-nowrap"
                    >
                        SUBSCRIBE!
                    </button>
                </form>
            </div>
        </section>
    );
}
