"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-6 md:top-10">
            <header>
                <div className="container max-w-6xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 pl-4 md:pl-8">
                            <Link href='/'>
                                <div>
                                    <h1 className="my-3 text-4xl font-bold text-left">
                                        Moises
                                        <span className="text-secondary">Pereira</span>
                                    </h1>
                                    <p className="text-sm font-medium text-white/70">
                                        Automação • No-Code • APIs • Webhooks
                                    </p>
                                </div>
                            </Link>
                            <div className="flex items-center gap-5">
                                {socialNetworks.map(({ logo, src, id }) => (
                                    <Link
                                        key={id}
                                        href={src}
                                        target="_blank"
                                        className="transition-all duration-300 hover:text-secondary"
                                    >
                                        {logo}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;