
export default function Navigation() {
    return (
        <nav className="flex justify-between bg-white px-10 py-5">
            <div className="Logo color-black text-lg ">
                <p>AfricaSkillz</p>
            </div>

            <div>
                <ul className="flex justify-between px-15">
                    <li className="px-2"><a href = "#">Home</a></li>                    
                    <li className="px-2"><a href = "#">Career</a></li>
                    <li className="px-2"><a href = "#">Jobs</a></li>
                    <li className="px-2"><a href = "#">Graduate Jobs</a></li>
                    <li className="px-2"><a href = "#">Jobs By Location</a></li>
                    <li className="px-2"><a href = "#">Jobs By Location</a></li>
                    <li className="px-2"><a href = "#">Jobs By Departments</a></li>
                    <li className="px-2"><a href = "#">Register</a></li>
                    <li className="px-2"><a href = "#">Login</a></li>
                </ul>

            </div>

        </nav>

    )
}