export default function PfootPage() {
    return (

        <div class="py-4 grid lg:grid-cols-4 gap-4  sm:gap-8 md:grid-cols-2 sm:grid-cols-1  px-8 py-16 bg-gray-700 text-white"  >

            <div class="px-2">
                <p class = "my-2">Get our latest news and updates</p>
                <p class="font-bold my-2">Enter your Email:</p>
                <input placeholder="Sign up with your Email" class = " my-4 border border-black px-8 py-2 rounded-lg text-black"></input> <br></br>
                <button class = "bg-blue-800 text-white px-10 py-2 rounded-lg">Subscribe</button>
            </div>

            <div>
                <ul>
                    <li><a href = "#">Find Jobs</a></li>
                    <li><a href = "#">Recruiter Resources</a></li>
                    <li><a href = "#">Latest Africa News</a></li>

                </ul>

            </div>
            

            <div>
            <ul>
                <li><a href = "#">FAQ</a></li>
                <li><a href = "#">About</a></li>
                <li><a href = "#">Contact Us</a></li>
                <li><a href = "#">Services</a></li>

            </ul>
            </div>

            <div>

                AfricaSkillz Office -- Integrate Google Maps

            </div>



        </div>

    )
}

// Work on Responsiveness in this Component
