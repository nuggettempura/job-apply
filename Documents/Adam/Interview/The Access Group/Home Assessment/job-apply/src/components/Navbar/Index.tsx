import navHero from "@/assets/images/navHero.jpg"

// type Props = {
//     isTopOfPage: boolean;
// }

function Navbar() {
    const flexbetween = "flex items-center justify-between";
    const secondaryButton = "py-4 px-10";
    // const navbarSetting = isTopOfPage ? "fixed" : "";
    return (
        <section>

            {/* NavHero Container */}

            <div className=" bg-gradient-to-t from-gray-800 to-gray-800 min-h-screen w-full relative">

                {/* Background Overlay */}

                <img src={navHero} alt="image" className="w-full h-full object-cover absolute mix-blend-overlay" />

                {/* Navbar section */}

                <nav className={`flex justify-center items-center h-36 w-full p-10 top-0`}>
                    <div className={`${flexbetween} mx-auto w-full text-white text-4xl font-logo font-bold`}>
                        volcanic
                    </div>
                    <div className="flex w-full items-center justify-around text-gray-100 font-poppins z-10">
                        <a href="#">JOBS</a>
                        <a href="#">ABOUT</a>
                        <a href="#">CANDIDATES</a>
                        <a href="#">CLIENTS</a>
                        <a href="#">JOIN US</a>
                        <a href="#">INSIGHTS</a>
                        <a href="#">CONTACT US</a>
                    </div>
                    <div className="flex w-1/5 items-center justify-around font-poppins z-10">
                        <button className={`bg-gray-100 ${secondaryButton}`}>Login</button>
                        <button className={`bg-orange-400 text-gray-100 ${secondaryButton}`}>Register</button>
                    </div>
                </nav>

                {/* Hero Section */}

                <div className="h-full w-full pt-36 p-10 flex flex-col justify-center items-center">
                    <h1 className="text-white text-6xl">
                        Search Jobs Here
                    </h1>
                    <span className="flex w-full h-full p-4 m-4 justify-center items-center z-10">
                        <input type="text" placeholder="keyword" className={`m-3 ${secondaryButton} w-1/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400`} />
                        <input type="text" placeholder="location" className={`m-3 ${secondaryButton} w-1/3 border border-gray-300`} />
                        <button className={`flex items-center justify-center ${secondaryButton} bg-orange-400 text-gray-100 w-1/6`}>Search Jobs</button>
                    </span>
                </div>

                {/* Hero Carousel */}
                <div className="absolute bottom-0 w-full h-36 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
                    <div className="p-10 m-10 bg-slate-100 w-full ">

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Navbar;