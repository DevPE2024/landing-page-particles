"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Meus últimos <span className="font-bold text-secondary">trabalhos realizados</span></h1>

                <div className="relative z-10 max-w-5xl mx-auto mt-4">
                    <Swiper
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {dataPortfolio.map((data) => (
                            <SwiperSlide key={data.id}>
                                <PortfolioBox data={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </ContainerPage>
    );
}

export default PortfolioPage;