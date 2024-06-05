import React from 'react'
import Header from '../components/header'

const events = () => {
    

return (
    <>
    <Header type={0} />
    <div class="flex min-h-screen items-center gradient-background">
    <div class="relative overflow-hidden">
        <div class="absolute -inset-x-1 top-[-25.5%] z-10 h-1/2 scale-x-125 scale-y-75 2xl:scale-y-95"></div>
        <div class="absolute -inset-x-1 bottom-[-25.5%] z-10 h-1/2 scale-x-125 scale-y-75 2xl:scale-y-95"></div>

        <div class="marquee-10 sm:marquee-15 xl:marquee-30 w-full">
        <div class="grid h-96 w-[350vw] grid-cols-12 gap-1 sm:h-[40rem] sm:w-[300vw] lg:w-[200vw] 2xl:h-[60rem]">
            <img class="h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-one.webp" alt="" />
            <img class="col-span-2 h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-six.webp" alt="" />
            <img class="h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-two.webp" alt="" />
            <img class="h-full w-full object-cover object-top" src="https://tlfolio.netlify.app/images/me/show-four.webp" alt="" />
            <img class="col-span-2 h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-seven.webp" alt="" />
            <img class="h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-five.webp" alt="" />
            <img class="h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-six.webp" alt="" />
            <img class="h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-nine.webp" alt="" />
            <img class="col-span-2 h-full w-full object-cover" src="https://tlfolio.netlify.app/images/me/show-thirteen.webp" alt="" />
        </div>
        </div>
    </div>
    </div>
    </>
)
}

export default events
