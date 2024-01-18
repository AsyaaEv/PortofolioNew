import React, { useEffect, useState } from "react";
import { Navbar, Avatar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Accordion, AccordionItem } from "@nextui-org/react";
import { HouseLine, SealCheck, Sun, Moon, IdentificationCard } from "@phosphor-icons/react";

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Autobio from "./Autobio";

export default function Story() {
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
                                <a href="/" className="w-full h-[2.5rem]  rounded-[8px] flex items-center px-4 gap-2  hover:scale-[1.03] hover:drop-shadow-md transition-all  dark:text-white" >
                                    <HouseLine className="text-xl" weight="bold" />
                                    <div className="font-normal">Beranda</div>
                                </a>
                                <a href="/about" className="w-full h-[2.5rem] rounded-[8px] bg-gray-100 dark:bg-neutral-600 flex items-center px-4 gap-2  hover:scale-[1.03] hover:drop-shadow-md transition-all dark:text-white" >
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
                                    <div className="font-bold text-xl dark:text-white">Anggun Rasya Evaldo</div>
                                    <div className="font-medium dark:text-white">Pria Manis Dengan Kumis Tipis</div>
                                </div>
                            </div>
                            <div className="w-full h-auto mt-4 md:hidden flex justify-center items-center">
                                <img src="../storage/img/asya.png" className="size-50 object-cover" alt="" id="animasiGambar" />
                            </div>
                            <div className="w-full h-auto mt-4 flex justify-center items-center px-2">
                                <div className="text-center leading-6 md:text-left dark:text-white">Haii, nama saya adalah Anggun Rasya Evaldo, bisa dipanggil Anggun atau Rasya atau Asya, Bebas deh! yang penting tidak negatif yaa!. Saya anak ke 2 dari 3 bersaudara dan dikeluarga yang sederhana. Saya lahir di Jepara loh 12 Mei 2007. Saat ini hobi saya ga nentu sih kadang pengen ngoding kadang pengen moto kadang ngegame banyak deh! kamu pasti males buat baca kan? tenang, ini aku kasih yang lebih ringkas dengan klik tombol di bawah ya! HAPPY STALKING😁</div>
                            </div>
                            <div className="w-full h-auto flex justify-center items-center mt-4 md:justify-start md:mx-[2rem] ">
                                <Button className="bg-white drop-shadow-md border-[1px] font-bold dark:bg-neutral-600" >Klik</Button>
                            </div>
                            <hr className="mt-4 mx-2 border-t-1 border-slate-300" />
                            <Autobio id="autobio" />
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