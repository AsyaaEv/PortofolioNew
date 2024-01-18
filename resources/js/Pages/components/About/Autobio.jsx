import { IdentificationBadge } from "@phosphor-icons/react";
import React from "react";

export default function Autobio() {
    return (
        <div className="w-full h-auto border-2 mt-4 px-2">
            <div className="w-full h-auto border-2">
                <div className="flex gap-2 items-center dark:text-white">
                    <IdentificationBadge weight="bold" className="text-2xl" />
                    <div className="font-medium">Auto Biografi</div>
                </div>
                <div className="w-full h-auto dark:text-white">
                    <div className="text-sm opacity-60">Auto biografi saya, YUK KEPOIN!</div>
                </div>
            </div>
            <div className="w-full h-auto border-2 mt-4">
                <div>
                    
                </div>
            </div>
        </div>
    )
}