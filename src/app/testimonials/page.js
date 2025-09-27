"use client";
import React from "react";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsMain from "@/components/testimonials/TestimonialsMain";
import { testimonials } from "@/data/hospitalData";

export const metadata = {
    title: 'Patient Reviews',
    description: 'Read patient testimonials and reviews about Asha Hospital\'s healthcare services, expert doctors, and quality care in Bihar.',
    keywords: ['patient reviews', 'hospital testimonials', 'Asha Hospital reviews', 'healthcare feedback Bihar', 'patient experience']
}

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen ">

            <TestimonialsHero />
            <TestimonialsMain testimonials={testimonials} />

        </div>
    );
};

export default TestimonialsPage;
