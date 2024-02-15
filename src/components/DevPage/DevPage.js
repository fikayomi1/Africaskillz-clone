import { useState } from "react";
import Cat1 from "../assets/catone.jpg";
import Cat2 from "../assets/cattwo.jpg";
import Cat3 from "../assets/catthree.jpg";

var num = 0;



export default function DevPage() {
    const links = [
        {
            imgUrl: "#",
            imgSrc: Cat1
        },
        {
            imgUrl: "#",
            imgSrc: Cat2
        }, {
            imgUrl: "#",
            imgSrc: Cat3
        }
    ]


    const [num, setNum] = useState(0);

    function handlePrevButton() {
        setNum(((prev) => (prev - 1 + links.length) % links.length))
    }

    function handleNextButton() {
        setNum(((prev) => (prev + 1) % links.length))
    }





    return (
        <div class="text-center">
            <p>Development Agencies in Nigeria</p>


            <div class=" lg:grid grid-cols-3 justify-around px-5 py-5">

                <div class="py-5 grid place-items-center">
                    <button onClick={handlePrevButton}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />

                        </svg>
                    </button>
                </div>

                <div class="py-5 grid place-items-center">
                    {
                        <a href={links[num].imgUrl}><img max-width = "150px" height = "150px" src={links[num].imgSrc}></img></a>

                    }
                </div>
                <div class=" py-5 grid place-items-center">
                    <button onClick={handleNextButton}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>

            </div>

        </div >)
}