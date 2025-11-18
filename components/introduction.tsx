import Image from "next/image";

const Introduction = () => {

    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 pt-24 pb-10 md:pt-20 md:pb-4 md:pr-12 md:grid-cols-2">
                <Image
                    src="/home-4.png"
                    priority
                    width="520"
                    height="520"
                    alt="Avatar"
                    className="ml-4 md:ml-8 drop-shadow-[0_0_22px_rgba(255,122,0,0.25)]"
                />

                <div className="flex flex-col items-end justify-center max-w-md ml-auto">

                    <h1 className="mb-4 text-xl leading-tight text-right md:text-3xl md:mb-5">
                        Se você pode imaginar,
                        {" "}
                        <span className="font-bold bg-gradient-to-r from-[#ff7a00] to-[#ff9b28] bg-clip-text text-transparent">
                            eu posso automatizar.
                        </span>
                    </h1>

                    <p className="mb-4 text-lg leading-relaxed text-right md:text-[1.1rem] md:mb-5">
                        Especialista em automação, integrações e No-Code.
                        <br />
                        Trabalho com n8n, Make, APIs &amp; Webhooks, Bubble, FlutterFlow, WeWeb, Supabase e PostgreSQL, criando soluções digitais rápidas e inteligentes.
                        <br />
                        Do protótipo no Figma à publicação em WordPress ou plataformas No-Code, ajudo você a tirar ideias do papel com menos código e mais resultado.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end md:gap-4">
                        <a
                            href="/services"
                            className="px-4 py-2 my-2 text-md font-medium text-white border-2 border-secondary rounded-xl cursor-pointer bg-secondary transition duration-300 shadow-[0_0_8px_rgba(255,122,0,0.35)] hover:shadow-[0_0_12px_rgba(255,122,0,0.45)] hover:scale-[1.03]"
                        >
                            Quero automatizar meu projeto
                        </a>
                        <a
                            href="/portfolio"
                            className="px-4 py-2 my-2 text-md font-medium text-secondary border-2 border-secondary rounded-xl cursor-pointer bg-transparent transition duration-300 hover:bg-secondary/10 hover:shadow-[0_0_12px_rgba(255,122,0,0.35)] hover:scale-[1.03]"
                        >
                            Ver portfólio
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-end gap-2 mt-4 text-[0.8rem]">

                        {[
                            "n8n",
                            "Make",
                            "APIs REST",
                            "Webhooks",
                            "Bubble (básico)",
                            "FlutterFlow (básico)",
                            "WeWeb (básico)",
                            "Supabase",
                            "PostgreSQL",
                            "JavaScript",
                            "Node.js",
                            "Python",
                            "Java",
                            "Docker",
                            "GitHub",
                            "Figma",
                            "WordPress",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1.5 rounded-[12px] border border-white/10 bg-white/5 text-gray-200"
                            >

                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Introduction;