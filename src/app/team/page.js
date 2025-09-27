"use client";
import React from "react";
import TeamHero from "@/components/team/TeamHero";
import TeamIntro from "@/components/team/TeamIntro";
import DoctorProfile from "@/components/team/DoctorProfile";

// Enhanced doctor data with detailed information
const teamDoctors = [
    {
        id: 1,
        name: "Dr. Mayank Kumar",
        specialty: "Brain & Spine Specialist",
        location: "Muzaffarpur, North Bihar",
        qualifications: "M.Ch. (Neurosurgery), MS (General Surgery – Gold Medalist)",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
        experience: "10+ Years",
        color: "from-blue-500 to-indigo-600",
        department: "Neurology & Neurosurgery",
        description: "Dr. Mayank Kumar is a highly experienced Brain and Spine Specialist in Muzaffarpur with more than 10 years of expertise in neurosurgery. He is recognized across North Bihar for his skill in treating complex conditions related to the brain, spine, and nervous system with precision, care, and compassion.",
        expertise: [
            "Brain tumors and head injuries",
            "Spinal disorders and advanced spine surgeries",
            "Stroke, brain hemorrhage & vascular neurology",
            "Nerve injuries and neurotrauma"
        ],
        philosophy: "Healthcare is not just about surgery but about empathy and trust. He is widely respected for combining clinical excellence with human values, ensuring that every patient and their family feels supported throughout their treatment journey.",
        servingAreas: ["Muzaffarpur", "Darbhanga", "Sitamarhi", "Samastipur", "Motihari", "Sheohar", "Madhubani"]
    },
    {
        id: 2,
        name: "Dr. Rashi",
        specialty: "Obstetrician, Gynaecologist & Infertility Specialist",
        location: "Muzaffarpur",
        qualifications: "MBBS, MS (Obs & Gynaec – AMU), DNB (Obs & Gynaec), MRCOG (UK) - Laparoscopic Surgeon & Infertility Expert",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
        experience: "12+ Years",
        color: "from-purple-500 to-blue-600",
        department: "Obstetrics & Gynaecology",
        description: "Dr. Rashi is a highly skilled Obstetrician & Gynaecologist in Muzaffarpur, known for her expertise in pregnancy care, infertility management, laparoscopic surgeries, and advanced women's healthcare. With strong academic training from AMU and MRCOG (UK), she is widely recognized as one of the most trusted lady gynaecologists in North Bihar.",
        expertise: [
            "High-risk & normal pregnancies",
            "Infertility evaluation and advanced treatment",
            "Menstrual & hormonal disorders (PCOS, thyroid, menopause)",
            "Laparoscopic gynaecological surgeries",
            "Preventive women's health care"
        ],
        philosophy: "Quality women's healthcare should be accessible to every woman in Muzaffarpur and North Bihar. Her vision is to promote safe motherhood, reproductive health, and overall well-being for women at every stage of life.",
        servingAreas: ["Muzaffarpur", "Darbhanga", "Sitamarhi", "Samastipur", "Motihari", "Gopalganj"]
    },
    {
        id: 3,
        name: "Dr. Rakesh Raushan",
        specialty: "Physician & Internal Medicine Specialist",
        location: "Muzaffarpur",
        qualifications: "MBBS, MD (Medicine)",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
        experience: "10+ Years",
        color: "from-blue-500 to-blue-600",
        department: "Internal Medicine",
        description: "Dr. Rakesh Raushan is a dedicated Physician and Internal Medicine Specialist at Asha Hospital, Muzaffarpur, with expertise in kidney care, gastroenterology, pulmonology, and cardiodiabetology. He is known for his strong diagnostic skills and compassionate patient care.",
        education: [
            "MD (Medicine) – Darbhanga Medical College & Hospital",
            "MBBS – Indira Gandhi Institute of Medical Sciences (IGIMS), Patna"
        ],
        expertise: [
            "Internal Medicine & General Physician Care",
            "Diabetes & Heart Health (Cardio-Diabetology)",
            "Kidney & Gastrointestinal Disorders",
            "Lung & Respiratory Care (Pulmonology)"
        ],
        philosophy: "Combining accurate diagnosis with empathetic counseling, ensuring patients and their families feel informed, supported, and cared for throughout their treatment journey.",
        servingAreas: ["Muzaffarpur", "Darbhanga", "Sitamarhi", "Samastipur", "Motihari", "Gopalganj"]
    },
    {
        id: 4,
        name: "Dr. Ankit Raj",
        specialty: "Orthopedic, Joint Replacement & Arthroscopic Surgeon",
        location: "Muzaffarpur",
        qualifications: "MBBS, D. Ortho",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop",
        experience: "8+ Years",
        color: "from-blue-500 to-purple-600",
        department: "Orthopedics",
        description: "Dr. Ankit Raj is a skilled Orthopedic Surgeon in Muzaffarpur, specializing in joint replacement, arthroscopy, spine procedures, and advanced fracture management. He is dedicated to helping patients regain mobility, reduce pain, and improve their overall quality of life.",
        education: [
            "D. Ortho – Government Medical College & Hospital, Cuddalore, Tamil Nadu",
            "MBBS – Anugrah Narayan Magadh Medical College & Hospital (ANMMCH), Gaya"
        ],
        expertise: [
            "Fracture & Trauma Management",
            "Joint Replacement Surgeries (Hip & Knee Arthroplasty)",
            "Arthroscopic Procedures (Sports Injuries, Knee & Shoulder)",
            "Spine Surgery & Spinal Disorders",
            "Pediatric Orthopaedics",
            "Minimally Invasive Orthopaedic Procedures",
            "Orthopedic Pain Management & Rehabilitation"
        ],
        philosophy: "Combining modern orthopedic techniques with patient-centered care, focusing not only on surgical precision but also on post-surgical rehabilitation, ensuring patients recover faster and return to active living.",
        servingAreas: ["Muzaffarpur", "Darbhanga", "Sitamarhi", "Samastipur", "Motihari", "Gopalganj"]
    },
    {
        id: 5,
        name: "Dr. Vijay Kumar",
        specialty: "Critical Care Specialist",
        location: "Muzaffarpur",
        qualifications: "MBBS, MD, FCCM",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
        experience: "12+ Years",
        color: "from-blue-500 to-purple-600",
        department: "Critical Care",
        description: "Dr. Vijay Kumar is a highly experienced Critical Care Specialist dedicated to delivering advanced intensive care services with precision and compassion. With an MBBS, MD, and FCCM (Fellowship in Critical Care Medicine), he brings extensive expertise in managing life-threatening conditions and critically ill patients.",
        expertise: [
            "Advanced intensive care services",
            "Life-threatening condition management",
            "Round-the-clock ICU monitoring",
            "Emergency critical interventions",
            "Evidence-based intensive treatments"
        ],
        philosophy: "Combining medical excellence with humane concern, providing families with confidence and reassurance during the most challenging times. Committed to continuous learning and adoption of the latest critical care practices.",
        servingAreas: ["Muzaffarpur", "Darbhanga", "Sitamarhi", "Samastipur", "Motihari", "Gopalganj"]
    }
];

const TeamPage = () => {
    return (
        <div className="min-h-screen ">

            <TeamHero />
            <TeamIntro />
            <div className="py-24 bg-gradient-to-b ">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-24">
                    {teamDoctors.map((doctor, index) => (
                        <DoctorProfile
                            key={doctor.id}
                            doctor={doctor}
                            index={index}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TeamPage;
