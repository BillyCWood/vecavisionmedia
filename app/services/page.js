import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/free-regular-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../ui/card';
import Button from '../ui/button';
import Link from 'next/link';


config.autoAddCss = false


export default function Services(){
    return (
        <main className="pt-10 pb-10 text-center">
            <div className="flex flex-col border-b mb-6 pb-6 border-vvm-teal items-center">
                <h2 className='font-bold text-2xl mb-4'>Recurring Content Plan</h2>
                <p className='mb-4'>Levarage a curated monthly marketing plan, tailored to your brand, to consistently engage your audience and drive result.</p>
                <Link href={"/contact"}><Button text="Schedule a Chat" /></Link>
            </div>
            <div className="border-b mb-6 pb-6 border-vvm-blue">
                <h2 className='font-bold text-2xl'>Videography</h2>
                
                <FontAwesomeIcon icon="fa-solid fa-clapperboard" style={{color: "#63E6BE",}} />
                <div className='grid sm:grid-rows-4 sm:grid-cols-3 sm:gap-6 xl:grid-rows-3 xl:grid-cols-4 xl:gap-6 place-items-center mt-10 sm:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3 m-auto'>
                    <div className='group' id='fullset'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512"><path fill='#000' d="M448 32l-86.1 0-1 1-127 127 92.1 0 1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128l0-64c0-15.1-5.3-29.1-14-40l-104 104L512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM64 32C28.7 32 0 60.7 0 96l0 64 6.1 0 1-1 127-127L64 32zM512 192L0 192 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224z"/></svg>}
                            text="Full set production" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="End-to-end video creation, from pre-production planning to on-set shooting and detailed post-production editing"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100"/>
                    </div>

                    
                    <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 640 512"><path fill='#000' d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l10.4 62.4c-23.3 10.8-42.9 28.4-56 50.3c-14.6-9-31.8-14.1-50.2-14.1c-53 0-96 43-96 96c0 35.5 19.3 66.6 48 83.2c.8 31.8 13.2 60.7 33.1 82.7l-56 39.2c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM208 144c13.8 0 26.7 4.4 37.1 11.9c-1.2 4.1-2.2 8.3-3 12.6c-37.9 14.6-67.2 46.6-77.8 86.4C151.8 243.1 144 226.5 144 208c0-35.3 28.7-64 64-64zm69.4 276c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm74.5-116.1c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"/></svg>}
                        text="Film in all environments" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        

                    <div className='group' id='promotional'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512"><path fill='#000' d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>}
                            text="Promotional" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Promote products with visually compelling videos that sell the feeling of having your product"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100"/>
                    </div>
                    
                    <div className='group' id='hype'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512"><path fill='#000' d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/></svg>}
                            text="Hype" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="High-energy videos designed to build excitement around events, launches, or product / services"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100"/>
                    </div>

                    <div className='group' id='industrytrend'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 576 512"><path fill='#000' d="M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z"/></svg>}
                            text="Industry Trend" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Highlight the latest trends in your industry, keeping your audience informed and engaged"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='service'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512"><path fill='#000' d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"/></svg>}
                            text="Service" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Showcase the features and feeling of experiencing what you offer"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='corporate'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 384 512"><path fill='#000' d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>} 
                            text="Corporate" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Professional videos tailored for corporate communications, including internal messaging, reports, or presentations"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='interview'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512"><path fill='#000' d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>}
                            text="Interview" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                            <Card text="Build one on one connections with your audience through interviews capturing insights, testimonials, or expert opinions"
                                bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='educational'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 640 512"><path fill='#000' d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z"/></svg>}
                            text="Educational" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Videos designed to teach or explain specific topics, concepts, or skills"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='informative'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512"><path fill='#000' d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"/></svg>} 
                            text="Informative" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Clear and concise videos that provide valuable information, helping your audience make informed decisions"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='training'>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512"><path fill='#000' d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7L197.2 112.6c-3.4 8-5.2 16.5-5.2 25.2l0 77-144 84L48 280c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56 0 32 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 144 0 0 32.7L133.5 468c-3.5 3-5.5 7.4-5.5 12l0 16c0 8.8 7.2 16 16 16l96 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64 96 0c8.8 0 16-7.2 16-16l0-16c0-4.6-2-9-5.5-12L320 416.7l0-32.7 144 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24 0-32 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 18.8-144-84 0-77c0-8.7-1.8-17.2-5.2-25.2L270.7 9.7z"/></svg>} 
                            text="Training and Onboarding" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Efficient and engaging videos to train employees or onboard new clients, ensuring a smooth transition"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='everything'>
                        <Card text="Everything in bewtween!" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Versatile video solutions for any need that doesn’t fit into a traditional category, bringing your unique ideas to life"
                            bgcolor="bg-[#1d4ed8]" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>
                </div>
            </div> 

            <div className="border-b mb-6 pb-6 border-vvm-pink">
                <h2 className='font-bold text-2xl mb-4'>Add-Ons</h2>
                <p>Maximize the impact of your project with these valuable add-ons and more</p>
                <div className='grid grid-rows-2 grid-cols-5 gap-6 place-items-center mt-10 2xl:w-1/3 m-auto'>
                    
                    <div className='group' id='contract'>
                        <Card text="RCP Contract" bgcolor="bg-[#fff]" textcolor="text-[#000]"  customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="A tailored solution to streamline ongoing content creation and marketing strategies on a monthly basis"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='VoI'>
                        <Card text="Voice Over Integration" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Professional voice overs seamlessly added to enhance your video"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>
                    
                    <div className='group' id='grabs'>
                        <Card text="Video Photo Grabs" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="High-quality photo stills extracted from your video footage for additional social media or promotional use"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='thumbnail'>
                        <Card text="Captivating Thumbnails" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Custom-designed thumbnails that grab attention and drive engagement"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='socialmedia-teasers'>
                        <Card text="Pre-Post Story Teasers" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text=" Social Media story teasers released just before your main video post to build excitement"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='edits'>
                        <Card text="Varient Edits" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="additional edit(s) created from the original footage for more value and purposes"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='boomerangs'>
                        <Card text="Story Promos/Boomerangs" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Engaging story promos and eye-catching boomerangs created from your footage to boost your social media presence"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='managedpostings'>
                        <Card text="Managed Content Posting" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="We handle all the posting for you, ensuring your content goes live on time without the extra hassle"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='bts'>
                        <Card text="Behing the Scenes" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Behind-the-scenes footage for promoting our project or showcasing our process as we collaberate"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>

                    <div className='group' id='teasers'>
                        <Card text="Teaser Posts" bgcolor="bg-[#fff]" textcolor="text-[#000]" customstyles="group-hover:invisible group-hover:h-0 duration-100" />
                        <Card text="Eye-catching social media teaser videos to generate buzz before the main release"
                            bgcolor="bg-vvm-pink" textcolor="text-[#fff]" customstyles="h-0 invisible overflow-y-hidden group-hover:h-40 group-hover:visible duration-100" />
                    </div>
                    
                </div>
            </div>
            
            <div className='pt-10 flex flex-col items-center'>
                <p className='mb-8'>Pricing is based on the project. Want to know how much your project will cost?</p>
                <Link href={"/contact"}><Button text="Request an Estimate" /></Link>
            </div>
        </main>
    );
}