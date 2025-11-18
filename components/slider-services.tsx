"use client"

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Autoplay]}
                className="h-[460px] md:h-[480px] w-[270px] md:w-[550px]"
            >

                {serviceData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="flex flex-col px-5 py-6 h-[400px] md:h-[420px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-y-3 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2"
                            onClick={() => setActiveServiceIndex(index)}
                        >
                            <div className="text-3xl md:text-4xl text-secondary">{item.icon}</div>
                            <div className="flex-1 flex flex-col">
                                <h3 className="mb-1 text-sm md:text-base font-semibold leading-snug break-words">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-xs md:text-sm leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {activeServiceIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="max-w-md w-full rounded-2xl bg-[#1f1934] border border-white/10 p-6">
                        <h3 className="mb-3 text-xl font-semibold text-secondary">
                            {serviceData[activeServiceIndex].title}
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed text-gray-100">
                            {serviceData[activeServiceIndex].description}
                        </p>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setActiveServiceIndex(null)}
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

export default SliderServices;