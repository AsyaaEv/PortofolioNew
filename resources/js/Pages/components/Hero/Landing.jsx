import React, { useEffect, useState } from "react";
import { Navbar, Avatar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Accordion, AccordionItem } from "@nextui-org/react";
import { HouseLine, SealCheck, Code, CaretDown, TreeStructure, Calendar, Sun, Moon, IdentificationCard } from "@phosphor-icons/react";
import { SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNextui, SiPhp, SiReact, SiShadow, SiTailwindcss } from "react-icons/si";
import { PiPhosphorLogoFill } from "react-icons/pi";
import 'animate.css';
import { Info } from "@phosphor-icons/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const ToggleDarkMode = () => {
        if (darkMode == false) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);

    const NavbarActive = () => {
        if (window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', NavbarActive);

    return (
        <div className={`${darkMode && 'dark'}`}>
            <div className="w-full h-auto dark:bg-neutral-900">
                <div className="lg:w-full xl:w-[60%] xl:mx-auto transition-all">
                    <div className={`w-full h-auto md:h-screen flex flex-col -z-50   items-center md:items-start md:flex-row md:overflow-hidden transition-all dark:bg-neutral-900 `}>
                        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred="false" className={`  bg-slate-50 md:hidden h-[4.5rem] w-[90%] rounded-[10px] shadow-md -translate-y-[50px] transition-all animate__animated animate__fadeIn animate__fast  ${navbar ? 'translate-y-[20px]' : ''} dark:bg-neutral-600`}>
                            <div className="w-full h-auto flex items-center  ">
                                <div className="flex justify-center items-center gap-2">
                                    <Avatar src="../storage/img/asya.jpg" size="lg" className={`invisible transition-all md:visible md:size-20 md:translate-y-[3rem] ${navbar ? 'visible' : ''} hover:cursor-pointer`} id="avatar" />
                                    <p className="font-bold text-lg dark:text-white">Anggun Rasya</p>
                                    <SealCheck size={20} weight="fill" className="text-blue-500" />
                                </div>
                            </div>
                            <NavbarContent>
                                <Sun className={`text-2xl hover:cursor-pointer dark:text-white ${darkMode ? 'hidden' : 'block animate__animated animate__fadeIn'}`} weight="bold" onClick={ToggleDarkMode} />
                                <Moon weight="bold" className={`text-2xl hover:cursor-pointer dark:text-white ${darkMode ? 'block animate__animated animate__fadeIn' : 'hidden'}`} onClick={ToggleDarkMode} />
                            </NavbarContent>
                            <NavbarContent justify="end">
                                <NavbarItem className=" w-auto h-[1rem]">
                                    <NavbarMenuToggle
                                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                        className="md:hidden dark:text-white"
                                    />
                                </NavbarItem>
                            </NavbarContent>
                            <NavbarMenu className={`mt-[3rem] w-[90%] rounded-[10px] mx-auto shadow-md bg-slate-50 ${darkMode ? 'bg-neutral-600 border-[1px]' : 'bg-slate-50'} `} >
                                <Link href="/" className={`w-full bg-white rounded-[10px] mt-2 group hover:cursor-pointer dark:bg-neutral-600 ${darkMode ? 'bg-neutral-700' : 'bg-white'}`}>
                                    <NavbarMenuItem className="py-2 px-5">
                                        <div className={`w-full flex gap-[10px] items-center text-black ${darkMode ? 'text-white' : 'text-black'}`}>
                                            <HouseLine weight="bold" className="text-2xl" />
                                            <div className="text-lg flex items-center transition-all group-hover:translate-x-[10px] dark:text-white">Beranda</div>
                                        </div>
                                    </NavbarMenuItem>
                                </Link>
                                <Link href="/about" className={`w-full bg-white rounded-[10px] mt-2 group hover:cursor-pointer dark:bg-neutral-600 ${darkMode ? 'bg-neutral-700' : 'bg-white'}`}>
                                    <NavbarMenuItem className="py-2 px-5">
                                        <div className={`w-full flex gap-[10px] items-center text-black ${darkMode ? 'text-white' : 'text-black'}`}>
                                            <IdentificationCard weight="bold" className="text-2xl" />
                                            <div className="text-lg flex items-center transition-all group-hover:translate-x-[10px] dark:text-white">Tentang Saya</div>
                                        </div>
                                    </NavbarMenuItem>
                                </Link>
                            </NavbarMenu>
                        </Navbar>

                        <div className="animate__animated animate__fadeInLeft animate__fast hidden md:block md:w-[20rem] md:h-[70%] md:mt-[5rem] md:rounded-[10px] md:transition-all ml-4">
                            <div className="w-full h-auto flex justify-center">
                                <img src="../storage/img/bg.webp" alt="" className="w-full h-[6rem] object-cover rounded-[10px] dark:brightness-50" />
                                <div className="absolute bg-white p-2 rounded-[10px] ml-[10rem] mt-[3rem] dark:bg-neutral-600 ">
                                    <Sun className={`text-2xl hover:cursor-pointer dark:text-white ${darkMode ? 'hidden' : 'block animate__animated animate__fadeIn'}`} weight="bold" onClick={ToggleDarkMode} />
                                    <Moon weight="bold" className={`text-2xl hover:cursor-pointer dark:text-white  ${darkMode ? 'block animate__animated animate__fadeIn ' : 'hidden'}`} onClick={ToggleDarkMode} />
                                </div>
                                <div className="w-[6rem] h-[6rem] rounded-full bg-white absolute flex justify-center items-center overflow-hidden translate-y-[2rem] shadow-md dark:bg-neutral-900">
                                    <img src="../storage/img/asya.jpg" alt="" className="object-cover w-[5.5rem] h-[5.5rem] rounded-full" />
                                </div>
                            </div>
                            <div className="w-full h-auto  mt-10 flex justify-center items-center flex-col">
                                <div className="w-full h-auto flex justify-center items-center gap-2">
                                    <div className="font-bold text-xl text-center dark:text-white">Anggun Rasya</div>
                                    <SealCheck size={20} weight="fill" className="text-blue-500" />
                                </div>
                                <Link href="https://instagram.com/syaa.ev" className="text-black opacity-60 dark:text-white">@syaa.ev</Link>
                            </div>
                            <hr className="mt-4 mx-2 border-t-1 border-slate-300" />
                            <div className="w-full h-auto mt-2 flex justify-center items-center gap-2 text-black flex-col">
                                <a href="/." className="w-full h-[2.5rem] bg-gray-100 rounded-[8px] flex items-center px-4 gap-2  hover:scale-[1.03] hover:drop-shadow-md transition-all dark:bg-neutral-600 dark:text-white" >
                                    <HouseLine className="text-xl" weight="bold" />
                                    <div className="font-normal">Beranda</div>
                                </a>
                                <a href="/about" className="w-full h-[2.5rem] rounded-[8px] flex items-center px-4 gap-2  hover:scale-[1.03] hover:drop-shadow-md transition-all dark:text-white" >
                                    <IdentificationCard className="text-xl" weight="bold" />
                                    <div className="font-normal">Tentang saya</div>
                                </a>
                                <a href="#" className="w-full h-[2.5rem] rounded-[8px] flex items-center px-4 gap-2  hover:scale-[1.03] hover:drop-shadow-md transition-all dark:text-white" >
                                    <HouseLine className="text-xl" weight="bold" />
                                    <div className="font-normal">Beranda</div>
                                </a>
                            </div>
                            <hr className="mt-4 mx-2 border-t-1 border-slate-300" />
                            <div className="w-full h-auto mt-2 flex justify-center items-center dark:text-white">
                                <div className="text-md font-semibold opacity-60">@2024 ♥ by Asyaa</div>
                            </div>
                        </div>
                        <div className="w-full h-full overflow-auto md:px-8 animate__animated animate__slideInUp animate__faster">
                            <div className="w-full h-[5rem] flex items-center flex-col md:mt-[5rem] transition-all">
                                <div className="w-[90%] md:w-full h-full bg-white drop-shadow-md border-[1px] rounded-[10px] flex flex-col justify-center items-center dark:bg-neutral-600 dark:border-neutral-400">
                                    <div className="font-bold text-xl dark:text-white">Hollaa! Saya Anggun Rasya 👋</div>
                                    <div className="font-medium dark:text-white">Saya Seorang Fullstack Developer</div>
                                </div>
                            </div>
                            <div className="w-full h-auto mt-4 md:hidden flex justify-center items-center">
                                <img src="../storage/img/asya.png" className="size-50 object-cover" alt="" id="animasiGambar" />
                            </div>
                            <div className="w-full h-auto mt-4 flex justify-center items-center">
                                <div className="text-center leading-6 md:text-left dark:text-white">Saya adalah seorang full-stack developer dengan pengalaman luas dalam mengembangkan aplikasi web. Keahlian saya melibatkan integrasi teknologi front-end dan back-end untuk menciptakan solusi yang responsif dan inovatif. Saya senang bekerja dalam tim kolaboratif dan selalu mencari peluang untuk terus mengembangkan keterampilan dan pengetahuan saya dalam dunia pengembangan perangkat lunak.</div>
                            </div>
                            <hr className="mt-4 mx-2 border-t-1 border-slate-300" />
                            <div className="w-full h-auto mt-8 px-4" >
                                <div className="w-full h-auto flex flex-col">
                                    <div className="flex gap-2 items-center dark:text-white">
                                        <Code weight="bold" className="text-2xl" />
                                        <div className="font-medium">Keahlian Saya</div>
                                    </div>
                                    <div className="w-full h-auto dark:text-white">
                                        <div className="text-sm opacity-60">Bahasa Pemrograman Yang Saya Kuasai.</div>
                                    </div>
                                </div>
                                <div className="w-full h-auto mt-4 flex flex-wrap justify-center items-center" data-aos="fade-up" data-aos-once="true" data-aos-duration='1000'>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiJavascript className="text-3xl text-yellow-300  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">Javascript</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiHtml5 className="text-3xl text-orange-500  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">HTML</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiCss3 className="text-3xl text-blue-500  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">CSS</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiPhp className="text-3xl text-blue-600  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">PHP</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiReact className="text-3xl text-[#44d3d8]  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">ReactJs</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiLaravel className="text-3xl text-red-400  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">Laravel</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiMysql className="text-3xl text-blue-500  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">MySQL</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiTailwindcss className="text-3xl text-green-400  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">Tailwind</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiBootstrap className="text-3xl text-purple-500  hover:cursor-pointer" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">Bootstrap</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiGithub className="text-3xl text-black hover:cursor-pointer dark:text-white" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">GitHub</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <SiNextui className="text-3xl text-black hover:cursor-pointer dark:text-white" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">NextUI</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                    <div className="w-auto h-auto mt-5 mx-4 flex justify-center items-center flex-col group">
                                        <PiPhosphorLogoFill className="text-3xl text-black hover:cursor-pointer bg-green-400" id="icon" />
                                        <div className="w-auto h-auto px-2 py-2 bg-white absolute mb-20 rounded-[10px] flex justify-center items-center invisible group-hover:visible shadow-md">
                                            <div className="">PhosphorIcon</div>
                                            <CaretDown weight="fill" className="absolute mt-12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-8 mx-2 border-t-1 border-slate-300" />
                            <div className="w-full h-auto  mt-4 px-4">
                                <div className="w-full h-auto flex  flex-col">
                                    <div className="w-full h-auto  flex gap-2 dark:text-white">
                                        <TreeStructure className="text-2xl rotate-90" weight="bold" />
                                        <div className="font-medium">Peta Jalan</div>
                                    </div>
                                    <div className="w-full h-auto dark:text-white">
                                        <div className="text-sm opacity-60">Peta Jalan Saya Dalam Perkodingan</div>
                                    </div>
                                </div>
                                <div className="w-full h-auto mt-4 gap-4 flex-wrap" >
                                    <Accordion variant="splitted">
                                        <AccordionItem key="1" aria-label="Accordion 1" title="Tahun 2020" startContent={<Calendar className="text-2xl text-warning " weight="bold" />} data-aos='fade-right' data-aos-delay='50' data-aos-once='true'>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Bahasa Pawn</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Server Client RDP</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Mysql Database</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Membuat Server GTASa:mp Menggunakan RDP</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Expert Pawn Language</div>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="2" aria-label="Accordion 2" title="Tahun 2021" startContent={<Calendar className="text-2xl text-warning" weight="bold" />} className="" data-aos='fade-right' data-aos-delay='100' data-aos-once='true'>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari HTML</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari CSS</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Javascript</div>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="3" aria-label="Accordion 3" title="Tahun 2022" startContent={<Calendar className="text-2xl text-warning" weight="bold" />} className="" data-aos='fade-right' data-aos-delay='150' data-aos-once='true'>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Memperdalam HTML</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Memperdalam CSS</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Memperdalam Javascript</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari PHP</div>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="4" aria-label="Accordion 4" title="Tahun 2023" startContent={<Calendar className="text-2xl text-warning" weight="bold" />} className="" data-aos='fade-right' data-aos-delay='200' data-aos-once='true'>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Memperdalam PHP</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Responvie Website Vanilla CSS</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Bootstrap 5</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Laravel 10</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Tailwind CSS</div>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="5" aria-label="Accordion 5" title="Tahun 2024" startContent={<Calendar className="text-2xl text-warning" weight="bold" />} className="" data-aos='fade-right' data-aos-delay='250' data-aos-once='true'>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Memperdalam Laravel 10</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Memperdalam Bootstrap 5</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Memperdalam Tailwind CSS</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari ReactJS</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari NextUI</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari PhosphorIcon</div>
                                            </div>
                                            <div className="w-full h-auto flex gap-2 items-start dark:text-white">
                                                <Info weight="fill" className="text-xl text-blue-600" />
                                                <div className="">Mempelajari Github</div>
                                            </div>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                            <hr className="mt-4 mx-2 border-t-1 border-slate-300" />
                            <div className="w-full h-auto flex justify-center items-center my-4">
                                <div className="w-[90%] h-[90%] bg-slate-100 rounded-[10px] flex justify-center items-center py-4 dark:bg-neutral-600">
                                    <div className="dark:text-white">Made By <Link href="https://instagram.com/syaa.ev">Anggun Rasya Evaldo</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}