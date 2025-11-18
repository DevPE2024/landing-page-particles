"use client";

import { useState } from "react";

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-end h-screen max-w-5xl gap-6 mx-auto px-4 md:px-0 md:grid-cols-2 md:ml-auto md:mr-6">
                <div className="max-w-[450px] md:ml-auto text-right">

                    <h1 className="text-2xl leading-tight text-center md:text-right md:text-4xl md:mb-5">Meus <span className="font-bold text-secondary"> serviços.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Meus serviços. Ofereço soluções em automação, integrações e No-Code para acelerar processos, reduzir custos e conectar plataformas de forma inteligente. Trabalho com n8n, Make, APIs, Webhooks, Supabase, PostgreSQL e ferramentas No-Code (Bubble, FlutterFlow e WeWeb) para criar fluxos, sistemas e estruturas digitais sob medida para o seu negócio. Se você precisa integrar ferramentas, automatizar tarefas, criar sistemas rápidos ou aumentar a eficiência da sua operação, posso ajudar com soluções práticas e escaláveis.
                    </p>

                    <div className="flex justify-center md:justify-end">
                        <button
                            className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Fale comigo
                        </button>
                    </div>
                </div>

                {/* SLIDER */}

                <div className="flex justify-center md:justify-end">
                    <SliderServices />
                </div>
            </div>

            {isContactOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="w-full max-w-sm p-6 text-center border rounded-2xl bg-[#1f1934] border-white/10">
                        <h2 className="mb-3 text-xl font-semibold text-secondary">Fale comigo</h2>
                        <p className="mb-2 text-sm text-gray-100">
                            Email: <span className="font-semibold">Moisespe2010@gmail.com</span>
                        </p>
                        <p className="mb-6 text-sm text-gray-100">
                            Fone/WhatsApp: <span className="font-semibold">(81) 9 9967-6496</span>
                        </p>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setIsContactOpen(false)}
                                className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary hover:bg-secondary/80 transition"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default ServicesPage;