"use client";
import React from "react";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsMain from "@/components/testimonials/TestimonialsMain";
import TestimonialsStats from "@/components/testimonials/TestimonialsStats";
import TestimonialsCallToAction from "@/components/testimonials/TestimonialsCallToAction";

// Import testimonials data
import { testimonials, hospitalStats } from "@/data/hospitalData";

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen bg-white">

            <TestimonialsHero />
            <TestimonialsMain testimonials={testimonials} />
            <TestimonialsStats stats={hospitalStats} />
            <TestimonialsCallToAction />

        </div>
    );
};

export default TestimonialsPage;
