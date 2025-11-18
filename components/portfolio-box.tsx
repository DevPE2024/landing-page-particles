"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div
                key={id}
                className="p-4 border border-teal-50 rounded-xl"
            >
                <Image
                    src={image}
                    alt="Image"
                    width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto"
                />

                <div className="flex gap-5 mt-5">
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                    >
                        Live demo
                    </button>
                </div>
            </div>

            {mounted && isOpen && createPortal(
                (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                        <div className="w-full max-w-md md:max-w-xl p-5 md:p-6 text-left border rounded-2xl bg-[#1f1934] border-white/10">
                        <h2 className="mb-3 text-lg md:text-xl font-semibold text-secondary text-center">Timely.ai</h2>

                        <div className="space-y-4 text-xs md:text-sm text-gray-100">
                            <div>
                                <h3 className="mb-1 font-semibold text-secondary">Sobre o site</h3>
                                <p className="leading-relaxed">
                                    Plataforma líder para criar agentes de Inteligência Artificial voltados para atendimento, vendas e suporte 24/7.
                                </p>
                                <p className="mt-1 leading-relaxed">
                                    Landing page focada em experiência moderna, comunicação clara e alta conversão em testes e planos.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-1 font-semibold text-secondary">Minha contribuição</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>
                                        Multimídia e animações com YouTube Embed otimizado e LottieFiles em JSON para animações leves.
                                    </li>
                                    <li>
                                        Tipografia e design usando Google Fonts API para fontes leves, legíveis e com bom desempenho.
                                    </li>
                                    <li>
                                        Segurança configurada com HSTS para garantir navegação 100% segura em HTTPS.
                                    </li>
                                    <li>
                                        Performance aprimorada com HTTP/3 e Priority Hints para melhorar LCP, CLS e carregamento geral.
                                    </li>
                                    <li>
                                        SEO e compartilhamento com Open Graph completo para pré-visualizações profissionais em WhatsApp, Facebook, LinkedIn, X e outros canais.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                            <a
                                href="https://timelyai.com.br/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium text-secondary underline underline-offset-4"
                            >
                                Visitar o site
                            </a>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary hover:bg-secondary/80 transition"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            ),
                document.body
            )}

        </>
    );
}

export default PortfolioBox
