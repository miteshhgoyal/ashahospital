"use client";
import React from "react";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsMain from "@/components/testimonials/TestimonialsMain";
import TestimonialsCallToAction from "@/components/testimonials/TestimonialsCallToAction";
import { testimonials } from "@/data/hospitalData";

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen ">

            <TestimonialsHero />
            <TestimonialsMain testimonials={testimonials} />

            <TestimonialsCallToAction />

        </div>
    );
};

export default TestimonialsPage;
