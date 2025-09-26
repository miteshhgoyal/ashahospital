// data/hospitalData.js
import {
    Brain, Heart, UserCheck, Stethoscope, Activity, Baby, Users, Eye,
    Award, Microscope, Shield, Phone, Calendar, Clock, MapPin, ChevronRight,

    Facebook,
    Instagram,
    Twitter,
    Youtube,
} from "lucide-react";

// Hero Slides Data
export const heroSlides = [
    {
        id: 1,
        title: "WELCOME TO ASHA HOSPITAL",
        subtitle: "Bihar's Leading Multi Speciality Hospital of Neurology, Gynaecology & Orthopaedic Care in Muzaffarpur",
        image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1200&auto=format&fit=crop",
        stats: { patients: "50,000+", doctors: "25+", experience: "15+" },
        gradient: "from-blue-600 via-blue-700 to-indigo-800",
    },
    {
        id: 2,
        title: "COMMITTED TO BEST HEALTHCARE",
        subtitle: "Multi Speciality Excellence for a Happy and Healthy Lifestyle",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
        stats: { patients: "50,000+", doctors: "25+", experience: "15+" },
        gradient: "from-blue-600 via-cyan-700 to-blue-800",
    },
    {
        id: 3,
        title: "WE ENSURE CARE AND CURE",
        subtitle: "Multi Speciality Hospital - We are the guardian of your good health",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
        stats: { patients: "50,000+", doctors: "25+", experience: "15+" },
        gradient: "from-blue-600 via-blue-700 to-cyan-800",
    },
];

// Navigation Menu Items
export const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#doctors" },
    { name: "Specialities", href: "#specialities" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
];

// Contact Information
export const contactInfo = {
    phone: "+91-98765-43210",
    emergency: "+91-98765-43210",
    email: "info@ashahospital.com",
    address: "Asha Hospital, Muzaffarpur, Bihar",
    availability: "24/7 Doctors Available"
};

// Medical Specialties
export const specialties = [
    {
        name: "Neuro",
        icon: Brain,
        color: "from-blue-500 to-blue-600",
        bgColor: " hover:bg-blue-100",
        description: "Advanced neurological treatments and brain surgery"
    },
    {
        name: "Obs-Gynaec",
        icon: Heart,
        color: "from-purple-500 to-blue-600",
        bgColor: "bg-purple-50 hover:bg-purple-100",
        description: "Comprehensive women's health and maternity services"
    },
    {
        name: "Ortho",
        icon: UserCheck,
        color: "from-blue-500 to-purple-600",
        bgColor: "bg-blue-50 hover:bg-blue-100",
        description: "Bone, joint treatments and sports medicine"
    },
    {
        name: "Medicine",
        icon: Stethoscope,
        color: "from-violet-500 to-purple-600",
        bgColor: "bg-violet-50 hover:bg-violet-100",
        description: "Internal medicine and general healthcare"
    },
    {
        name: "Critical Care",
        icon: Activity,
        color: "from-blue-500 to-purple-600",
        bgColor: "bg-blue-50 hover:bg-blue-100",
        description: "24/7 intensive care and life-saving treatments"
    },
    {
        name: "Pediatrics",
        icon: Baby,
        color: "from-amber-500 to-orange-600",
        bgColor: "bg-amber-50 hover:bg-amber-100",
        description: "Specialized care for children and infants"
    },
    {
        name: "ENT",
        icon: Users,
        color: "from-indigo-500 to-blue-600",
        bgColor: "bg-indigo-50 hover:bg-indigo-100",
        description: "Ear, nose, and throat treatments"
    },
    {
        name: "Ophthalmologist",
        icon: Eye,
        color: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-50 hover:bg-cyan-100",
        description: "Complete eye care and vision treatments"
    },
];

// Why Choose Us Features
export const features = [
    {
        title: "OPD Facilities",
        icon: Users,
        description: "Comprehensive outpatient services with minimal waiting time",
        color: "from-blue-500 to-cyan-600",
    },
    {
        title: "IPD Facilities",
        icon: Heart,
        description: "Advanced inpatient care with modern amenities",
        color: "from-purple-500 to-blue-600",
    },
    {
        title: "Pathology Lab",
        icon: Microscope,
        description: "State-of-the-art diagnostic services with quick results",
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Emergency Service",
        icon: Activity,
        description: "24/7 emergency medical care with rapid response",
        color: "from-blue-500 to-orange-600",
    },
    {
        title: "Best Surgeons",
        icon: Award,
        description: "Experienced surgical specialists with proven expertise",
        color: "from-violet-500 to-purple-600",
    },
    {
        title: "Neuro Care",
        icon: Brain,
        description: "Advanced neurological treatments and brain surgery",
        color: "from-indigo-500 to-blue-600",
    },
    {
        title: "Gynae Care",
        icon: Heart,
        description: "Comprehensive women's health and maternity services",
        color: "from-blue-500 to-purple-600",
    },
    {
        title: "Ortho Care",
        icon: Shield,
        description: "Bone, joint treatments and sports medicine",
        color: "from-purple-500 to-blue-600",
    },
];

// Services Data
export const services = [
    {
        title: "Best Surgeons",
        icon: Award,
        color: "from-blue-500 to-blue-600",
        description: "Experienced surgical specialists with proven expertise"
    },
    {
        title: "Neuro Care",
        icon: Brain,
        color: "from-violet-500 to-purple-600",
        description: "Advanced neurological treatments and brain surgery"
    },
    {
        title: "Gynae Care",
        icon: Heart,
        color: "from-purple-500 to-blue-600",
        description: "Comprehensive women's health and maternity services"
    },
    {
        title: "Obstetricians Care",
        icon: Baby,
        color: "from-blue-500 to-purple-600",
        description: "Safe motherhood and pregnancy care"
    },
    {
        title: "Ortho Care",
        icon: Shield,
        color: "from-amber-500 to-orange-600",
        description: "Bone, joint treatments and sports medicine"
    },
    {
        title: "Critical Care",
        icon: Activity,
        color: "from-blue-500 to-purple-600",
        description: "24/7 intensive care and life-saving treatments"
    },
    {
        title: "Pediatrics Care",
        icon: Baby,
        color: "from-cyan-500 to-blue-600",
        description: "Specialized care for children and infants"
    },
    {
        title: "Ophthalmologist Care",
        icon: Eye,
        color: "from-indigo-500 to-blue-600",
        description: "Complete eye care and vision treatments"
    },
];

// Doctor Data
export const doctors = [
    {
        id: 1,
        name: "Dr. Mayank Kumar",
        specialty: "Brain & Spine Specialist",
        location: "Muzaffarpur, North Bihar",
        qualifications: "M.Ch. (Neurosurgery), MS (General Surgery – Gold Medalist)",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
        experience: "15+ Years",
        color: "from-blue-500 to-indigo-600",
        department: "Neurosurgery"
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
        department: "Obstetrics & Gynaecology"
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
        department: "Internal Medicine"
    },
    {
        id: 4,
        name: "Dr. Ankit Raj",
        specialty: "Orthopedic, Joint Replacement & Arthroscopic Surgeon",
        location: "Muzaffarpur",
        qualifications: "MBBS, D. Ortho",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop",
        experience: "8+ Years",
        color: "from-amber-500 to-orange-600",
        department: "Orthopedics"
    },
];

// Testimonials
export const testimonials = [
    {
        id: 1,
        name: "Anjali Sahu",
        content: "Good Hospital for admit. Services are good. Room size is ok. They are taking feedback at regular intervals for best service. Staff at Asha hospital are helpful, courteous and friendly. The doctors are humble and ready to answer. The services at Asha Hospital are top class.",
        rating: 5,
        treatment: "General Treatment",
        avatar: "AS",
    },
    {
        id: 2,
        name: "Nikhil Kumar",
        content: "My special thanks to Dr. Mayank... really good treatment and special care on my father... Also nurses... good care... I'm satisfied with treatment... And now my father got discharged... Thank you for everyone in the Asha hospital.",
        rating: 5,
        treatment: "Neurosurgery",
        avatar: "NK",
    },
    {
        id: 3,
        name: "Rajendra Singh",
        content: "We are extremely grateful for the outstanding care my daughter received during her emergency surgery. The team's dedication made a challenging situation much easier for our family.",
        rating: 5,
        treatment: "Emergency Surgery",
        avatar: "RS",
    },
    {
        id: 4,
        name: "Rekha Gupta",
        content: "We experienced warm welcomes and outstanding care during our two surgeries. Recovery was swift and the healing process was greatly enhanced. Grateful for their dedication.",
        rating: 5,
        treatment: "Surgery",
        avatar: "RG",
    },
    {
        id: 5,
        name: "Patikrit Chopra",
        content: "A satisfying and comfortable environment with personal and compassionate treatment and counselling. Feel that we are in safe hands with affordable and professional health care.",
        rating: 5,
        treatment: "Gynecology",
        avatar: "PC",
    },
];

// About Us Content
export const aboutContent = {
    title: "About Us – Asha Hospital, Muzaffarpur",
    description: "Asha Hospital, Muzaffarpur is a leading multi-specialty healthcare center providing trusted and advanced treatment in Neurology, Obstetrics & Gynaecology, Orthopaedics, and Critical Care.",
    mission: "To be recognized as the best hospital in Muzaffarpur for Neurology, Obstetrics & Gynaecology, and Orthopaedic health services, by providing advanced medical care that is affordable, accessible, and reliable.",
    vision: "To build a healthier society by combining professional excellence with humanity, ensuring that every patient is treated with care, respect, and dignity while receiving world-class medical treatment close to home.",
    experience: "MORE THAN 15 YEARS",
    highlights: [
        "Advanced technology and experienced doctors",
        "Personalized treatment plans",
        "Affordable and accessible healthcare",
        "Patient-centric approach",
        "International standard services"
    ],
    facilities: [
        "24/7 Pharmacy Services for easy access to medicines",
        "Emergency-ready Ambulance Services for critical care support",
        "Skilled doctors, nurses, and staff offering personalized treatment"
    ]
};

// Appointment Form Fields
export const appointmentFormFields = [
    { name: "patientName", label: "Patient Name", type: "text", required: true },
    { name: "age", label: "Age", type: "number", required: true },
    { name: "contactNumber", label: "Contact Number", type: "tel", required: true },
    {
        name: "doctor",
        label: "Select Doctor",
        type: "select",
        required: true,
        options: doctors.map(doctor => ({ value: doctor.id, label: doctor.name }))
    },
    { name: "appointmentDate", label: "Appointment Date", type: "date", required: true },
    { name: "appointmentTime", label: "Appointment Time", type: "time", required: true },
    {
        name: "mode",
        label: "Mode of Appointment",
        type: "select",
        required: true,
        options: [
            { value: "physical", label: "Physical" },
            { value: "audio", label: "Audio" },
            { value: "video", label: "Video" }
        ]
    },
    { name: "remarks", label: "Remarks", type: "textarea", required: false }
];

// Footer Links
export const footerLinks = {
    quickLinks: [
        { name: "About Us", href: "#about" },
        { name: "Team", href: "#doctors" },
        { name: "Specialities", href: "#specialities" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact Us", href: "#contact" },
        { name: "Location", href: "#location" }
    ],
    services: [
        { name: "Emergency Services", href: "#emergency" },
        { name: "OPD Services", href: "#opd" },
        { name: "IPD Services", href: "#ipd" },
        { name: "Pathology Lab", href: "#lab" },
        { name: "Pharmacy", href: "#pharmacy" },
        { name: "Ambulance", href: "#ambulance" }
    ],
    specialities: [
        { name: "Neurology", href: "#neuro" },
        { name: "Gynaecology", href: "#gynae" },
        { name: "Orthopedics", href: "#ortho" },
        { name: "Pediatrics", href: "#pediatrics" },
        { name: "Critical Care", href: "#critical" },
        { name: "Internal Medicine", href: "#medicine" }
    ]
};

// Social Media Links
export const socialLinks = [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "YouTube", href: "#", icon: "youtube" }
];

// Hospital Statistics
export const hospitalStats = [
    { label: "Happy Patients", value: "50,000+", icon: Heart },
    { label: "Expert Doctors", value: "25+", icon: Stethoscope },
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Successful Surgeries", value: "10,000+", icon: Activity }
];

// Emergency Contact
export const emergencyContact = {
    phone: "+91-98765-43210",
    ambulance: "+91-98765-43211",
    pharmacy: "+91-98765-43212"
};

export default {
    heroSlides,
    navigationItems,
    contactInfo,
    specialties,
    features,
    services,
    doctors,
    testimonials,
    aboutContent,
    appointmentFormFields,
    footerLinks,
    socialLinks,
    hospitalStats,
    emergencyContact
};

export const detailedSpecialities = [
    {
        id: 1,
        title: "Brain & Spine Specialist",
        subtitle: "World-class treatment for complex brain and spine disorders",
        icon: Brain,
        color: "from-blue-500 to-indigo-600",
        bgColor: "",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, we provide world-class treatment for complex brain and spine disorders with advanced technology and compassionate care. Our team of highly qualified neurosurgeons and spine specialists are committed to offering personalized treatment plans, focusing on faster recovery, safety, and long-term well-being.",
        whyChoose: [
            "Expert Neurosurgeons & Spine Specialists with international training and years of experience",
            "Comprehensive Care for brain tumors, stroke, epilepsy, spine injuries, slipped disc, scoliosis, and degenerative spine diseases",
            "Advanced Technology – Equipped with MRI, CT scan, neuro-navigation systems, minimally invasive spine surgery, and robotic-assisted techniques",
            "24/7 Neuro Emergency Care – Immediate intervention for head injuries, trauma, and stroke",
            "Multidisciplinary Team – Collaboration between neurologists, orthopedic surgeons, physiotherapists, and rehabilitation experts"
        ],
        conditions: [
            "Brain Tumors & Aneurysms",
            "Stroke & Cerebrovascular Diseases",
            "Epilepsy & Seizure Disorders",
            "Spine Fractures & Trauma",
            "Herniated Disc (Slip Disc)",
            "Spinal Stenosis & Scoliosis",
            "Degenerative Spine Diseases",
            "Spinal Cord Injuries"
        ],
        treatmentBenefits: [
            "Smaller incisions & less pain",
            "Faster recovery time",
            "Reduced hospital stay",
            "Better long-term outcomes"
        ],
        approach: "We focus on minimally invasive neurosurgery and advanced spine procedures"
    },
    {
        id: 2,
        title: "Obstetrician, Gynaecologist & Infertility",
        subtitle: "Comprehensive care for women's health at every stage of life",
        icon: Heart,
        color: "from-purple-500 to-blue-600",
        bgColor: "bg-purple-50",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, we provide comprehensive care for women's health at every stage of life. Our highly experienced Obstetricians, Gynaecologists, and Infertility Specialists are dedicated to ensuring safe motherhood, effective treatment for reproductive health issues, and personalized fertility solutions.",
        whyChoose: [
            "Experienced Team of Specialists with expertise in obstetrics, gynecology, and infertility treatment",
            "Advanced Technology – 3D/4D ultrasound, laparoscopic surgery, IVF, IUI, ICSI, hysteroscopy, and advanced fertility labs",
            "Holistic Women's Health Care – Preventive screenings, menstrual care, PCOS treatment, menopause management, and maternity care",
            "Personalized Fertility Solutions – Tailor-made plans for couples struggling with infertility, ensuring higher success rates",
            "Compassionate Approach – Confidential, empathetic, and supportive care throughout the journey"
        ],
        services: {
            "Obstetrics": "Antenatal check-ups, high-risk pregnancy care, painless delivery, postnatal care",
            "Gynecology": "Menstrual disorder treatment, PCOD/PCOS management, fibroids, endometriosis, cervical cancer screening",
            "Infertility": "Fertility assessments, IVF, IUI, ICSI, egg/sperm freezing, donor programs, surrogacy guidance",
            "Minimally Invasive Surgeries": "Laparoscopy & hysteroscopy for faster recovery and minimal pain"
        },
        commitment: "We believe in providing safe, advanced, and compassionate healthcare for women. Whether it's supporting you through a healthy pregnancy, managing gynecological concerns, or helping you achieve parenthood, Asha Hospital is your trusted partner in care."
    },
    {
        id: 3,
        title: "Physician & Internal Medicine",
        subtitle: "Comprehensive care for adults with chronic disease management",
        icon: Stethoscope,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our Physician & Internal Medicine specialists provide comprehensive care for adults, focusing on the prevention, diagnosis, and treatment of a wide range of medical conditions. We specialize in managing chronic illnesses, complex health problems, and lifestyle-related diseases with a patient-centric and evidence-based approach.",
        whyChoose: [
            "Experienced Physicians with expertise in adult medicine and chronic disease management",
            "Comprehensive Care – From common illnesses to complex multi-system disorders",
            "Preventive Healthcare – Regular check-ups, screenings, and lifestyle guidance for long-term wellness",
            "Advanced Diagnostics – State-of-the-art facilities for accurate and timely diagnosis",
            "Personalized Treatment Plans – Tailored care to suit individual health needs"
        ],
        conditions: [
            "Diabetes, Hypertension & Thyroid Disorders",
            "Heart & Lung Diseases (Asthma, COPD, Chest Pain, Heart Failure)",
            "Infectious Diseases (Viral Fever, Dengue, Typhoid, Malaria, Tuberculosis)",
            "Kidney & Liver Disorders",
            "Gastrointestinal Issues (Acidity, IBS, Gastritis)",
            "Obesity, Metabolic & Lifestyle Disorders",
            "General Health Check-ups & Preventive Care"
        ],
        approach: "Our internal medicine specialists emphasize holistic and preventive healthcare. We don't just treat illnesses; we focus on long-term health management, empowering patients to live healthier lives through early detection, lifestyle modifications, and continuous care.",
        commitment: "We combine expertise, technology, and compassion to provide world-class medical care. Whether it's routine consultation, managing chronic conditions, or critical care, our physicians are dedicated to ensuring your well-being."
    },
    {
        id: 4,
        title: "Orthopedic, Joint Replacement & Arthroscopic Surgeon",
        subtitle: "Advanced treatment for bone, joint, and musculoskeletal conditions",
        icon: Shield,
        color: "from-amber-500 to-orange-600",
        bgColor: "bg-amber-50",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our Orthopedic, Joint Replacement & Arthroscopic Surgery specialists provide advanced treatment for bone, joint, and musculoskeletal conditions. With world-class expertise, cutting-edge technology, and patient-focused care, we help restore mobility, reduce pain, and improve quality of life.",
        whyChoose: [
            "Experienced Surgeons trained in advanced orthopedic, arthroscopy, and joint replacement procedures",
            "Comprehensive Care – From fractures and sports injuries to complex joint replacements",
            "Advanced Techniques – Minimally invasive arthroscopy, robotic-assisted joint replacement, cartilage repair, and bone preservation methods",
            "State-of-the-Art Facilities – Fully equipped operation theatres, modern physiotherapy, and rehabilitation units",
            "Faster Recovery – Focused on early mobility, reduced hospital stay, and better long-term outcomes"
        ],
        conditions: [
            "Arthritis (Osteoarthritis, Rheumatoid Arthritis)",
            "Knee, Hip & Shoulder Pain",
            "Sports Injuries & Ligament Tears (ACL, Meniscus, Rotator Cuff)",
            "Fractures & Trauma Care",
            "Spine & Back Problems",
            "Joint Deformities & Bone Disorders"
        ],
        keyServices: [
            "Total & Partial Joint Replacement (Knee, Hip, Shoulder)",
            "Arthroscopic Surgeries (ACL Reconstruction, Meniscus Repair, Shoulder Arthroscopy)",
            "Sports Medicine & Injury Management",
            "Fracture Fixation & Trauma Surgery",
            "Pediatric Orthopedics (Bone deformities, growth-related conditions)",
            "Post-Surgery Rehabilitation & Physiotherapy"
        ],
        commitment: "We believe in combining surgical excellence with compassionate care. Every treatment plan is customized to suit patient needs, ensuring safe procedures, effective recovery, and long-term mobility. At Asha Hospital, our goal is to help you get back to an active, pain-free life."
    }
];

export const detailedServices = [
    {
        id: 1,
        title: "Neuro Services",
        subtitle: "Advanced care for complex brain, spine, and nervous system disorders",
        icon: Brain,
        color: "from-blue-500 to-indigo-600",
        bgColor: "",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our Neuro Services Department is dedicated to providing advanced care for complex brain, spine, and nervous system disorders. With a team of highly experienced neurologists, neurosurgeons, and neuro-rehabilitation specialists, we combine medical expertise with cutting-edge technology to deliver accurate diagnosis, effective treatment, and holistic recovery.",
        whyChoose: [
            "Expert Team – Renowned neurologists & neurosurgeons with extensive clinical experience",
            "Comprehensive Care – Diagnosis, medical management, surgical interventions, and rehabilitation under one roof",
            "Advanced Technology – Equipped with MRI, CT Scan, EEG, EMG, Neuro-navigation, and Minimally Invasive Neurosurgery systems",
            "24/7 Neuro Emergency Care – Immediate treatment for stroke, head injuries, seizures, and spinal trauma",
            "Rehabilitation Support – Dedicated physiotherapy, speech therapy, and occupational therapy for faster recovery"
        ],
        conditions: [
            "Stroke & Cerebrovascular Diseases",
            "Epilepsy & Seizure Disorders",
            "Brain Tumors & Aneurysms",
            "Spine Disorders (Slip Disc, Spinal Stenosis, Scoliosis)",
            "Multiple Sclerosis & Parkinson's Disease",
            "Peripheral Neuropathy & Nerve Injuries",
            "Headache & Migraine Management",
            "Neurotrauma & Critical Care"
        ],
        approach: "We focus on early diagnosis, advanced treatment, and long-term patient support. Our specialists adopt a multidisciplinary approach, ensuring every patient receives personalized and comprehensive neurological care.",
        commitment: "We believe in combining clinical excellence with compassion. From emergency interventions to complex neurosurgeries and rehabilitation, we are committed to helping patients regain health, independence, and quality of life."
    },
    {
        id: 2,
        title: "Obstetricians & Gynaecologists Services",
        subtitle: "Comprehensive obstetrics and gynaecology services for women's health",
        icon: Heart,
        color: "from-purple-500 to-blue-600",
        bgColor: "bg-purple-50",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, we offer comprehensive obstetrics and gynaecology services designed to support women's health at every stage of life. Our team of experienced obstetricians and gynaecologists is dedicated to providing safe, compassionate, and personalized care for women—from adolescence to motherhood and beyond.",
        whyChoose: [
            "Expert Specialists – Highly qualified doctors with expertise in women's healthcare, pregnancy care, and advanced gynaecological treatments",
            "Advanced Technology – Equipped with 3D/4D ultrasound, laparoscopic surgery, hysteroscopy, and state-of-the-art labor rooms",
            "Comprehensive Women's Care – Covering preventive screenings, fertility solutions, pregnancy management, and menopause care",
            "Personalized Care Plans – Every woman's health journey is unique, and our specialists provide tailored treatments with compassion",
            "Safe Motherhood – Specialized in normal deliveries, high-risk pregnancy management, and painless childbirth options"
        ],
        services: {
            "Obstetrics": [
                "Antenatal check-ups & pregnancy monitoring",
                "High-risk pregnancy management",
                "Painless normal delivery & C-section delivery",
                "Postnatal care & breastfeeding support"
            ],
            "Gynaecology": [
                "Menstrual disorder & PCOD/PCOS treatment",
                "Fibroids, ovarian cyst & endometriosis management",
                "Cervical cancer screening & HPV vaccination",
                "Menopause management"
            ],
            "Advanced Treatments": [
                "Laparoscopic & minimally invasive surgeries",
                "Hysteroscopy & fertility-enhancing procedures",
                "Infertility evaluation & treatment (IUI, IVF support)"
            ]
        },
        commitment: "Our mission is to provide holistic, affordable, and world-class women's healthcare services. Whether it's a routine check-up, a safe pregnancy journey, or advanced gynaecological treatment, our team is committed to supporting every woman with compassion and care."
    },
    {
        id: 3,
        title: "Orthopaedic Services",
        subtitle: "Advanced care for bones, joints, muscles, ligaments, and spine conditions",
        icon: Shield,
        color: "from-amber-500 to-orange-600",
        bgColor: "bg-amber-50",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our orthopaedic specialists provide advanced care for bones, joints, muscles, ligaments, and spine conditions. With a team of expert orthopaedicians, joint replacement surgeons, and physiotherapists, we offer complete treatment—from diagnosis and surgery to rehabilitation—ensuring faster recovery and improved mobility.",
        whyChoose: [
            "Experienced Specialists – Skilled orthopaedic surgeons with expertise in trauma care, joint replacement, and sports injuries",
            "Advanced Technology – Equipped with digital X-rays, CT, MRI, arthroscopy, and minimally invasive surgical systems",
            "Comprehensive Care – From simple fractures to complex spine and joint surgeries",
            "Rehabilitation Support – Dedicated physiotherapy and pain management for long-term recovery",
            "Patient-Centric Approach – Personalized treatment plans designed for better mobility and quality of life"
        ],
        conditions: [
            "Bone fractures & trauma injuries",
            "Arthritis & Osteoporosis",
            "Back pain, spinal disorders & slip disc",
            "Sports injuries & ligament tears",
            "Shoulder, knee & hip pain",
            "Joint stiffness & mobility issues",
            "Paediatric orthopaedic conditions"
        ],
        keyServices: [
            "Fracture & Trauma Care",
            "Joint Replacement Surgeries – Hip, Knee, and Shoulder",
            "Arthroscopic (Keyhole) Surgeries – For sports injuries & ligament repair",
            "Spine Surgery & Pain Management",
            "Paediatric Orthopaedics – Congenital & developmental bone disorders",
            "Physiotherapy & Rehabilitation"
        ],
        commitment: "We are committed to restoring mobility and improving quality of life. Whether it's managing chronic joint pain, treating sports injuries, or performing advanced joint replacement surgeries, our orthopaedic team ensures compassionate care backed by technology and expertise."
    },
    {
        id: 4,
        title: "Internal Medicine Services",
        subtitle: "Comprehensive, preventive, and long-term healthcare for adults",
        icon: Stethoscope,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our Internal Medicine Department is the first point of contact for patients seeking comprehensive, preventive, and long-term healthcare. Our team of expert physicians and internal medicine specialists is dedicated to diagnosing, treating, and managing a wide range of medical conditions with a patient-first approach.",
        whyChoose: [
            "Experienced Physicians – Specialists trained in adult medicine and chronic disease management",
            "Holistic Approach – Preventive care, early diagnosis, and long-term disease management",
            "Advanced Diagnostics – Equipped with state-of-the-art labs and imaging facilities",
            "Continuity of Care – Coordination with other specialties for complete patient management",
            "Personalized Treatment – Tailored care plans based on lifestyle, health history, and individual needs"
        ],
        conditions: [
            "Diabetes, Hypertension & Thyroid Disorders",
            "Infectious Diseases (Viral Fever, Dengue, Malaria, Typhoid, Tuberculosis)",
            "Heart, Lung & Kidney Disorders",
            "Liver & Gastrointestinal Problems (Acidity, IBS, Gastritis, Hepatitis)",
            "Obesity & Metabolic Syndromes",
            "Lifestyle Diseases & Preventive Care",
            "General Health Check-ups & Annual Screenings"
        ],
        keyServices: [
            "Comprehensive Health Check-ups",
            "Chronic Disease Management (Diabetes, Hypertension, Thyroid)",
            "Preventive Healthcare & Vaccinations",
            "Lifestyle Counselling & Diet Guidance",
            "Critical Care Support in Emergencies",
            "Coordination with Specialists for Multisystem Disorders"
        ],
        commitment: "We believe in building long-term relationships with our patients. Our internal medicine team focuses not just on treating illnesses but also on preventing them—helping you live a healthier, longer, and more active life."
    },
    {
        id: 5,
        title: "Critical Care Services",
        subtitle: "Round-the-clock, advanced medical support for life-threatening conditions",
        icon: Activity,
        color: "from-blue-500 to-purple-600",
        bgColor: "bg-blue-50",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our Critical Care Unit (ICU) provides round-the-clock, advanced medical support for patients with life-threatening conditions. Our team of expert intensivists, critical care specialists, nurses, and paramedics is dedicated to delivering immediate, specialized care with compassion and precision.",
        whyChoose: [
            "24/7 Emergency & ICU Care – Immediate response for critically ill patients",
            "Expert Team – Experienced intensivists, anaesthesiologists, and multispecialty doctors",
            "Advanced Infrastructure – Equipped with ventilators, multi-parameter monitors, dialysis units, ECMO, and advanced life-support systems",
            "Specialized ICUs – Medical ICU, Surgical ICU, Cardiac ICU, and Neuro ICU for targeted care",
            "Multidisciplinary Approach – Seamless coordination with cardiology, neurology, pulmonology, nephrology, and other specialties"
        ],
        conditions: [
            "Severe Respiratory Illness (Asthma, Pneumonia, ARDS)",
            "Cardiac Emergencies (Heart Attack, Arrhythmias, Cardiac Arrest)",
            "Stroke & Neurocritical Care",
            "Trauma & Accident-related Injuries",
            "Multi-Organ Failure & Septic Shock",
            "Post-Surgical & Post-Transplant Care",
            "Poisoning, Overdose & Toxicological Emergencies"
        ],
        keyServices: [
            "24/7 Advanced Life Support",
            "Mechanical Ventilation & Non-Invasive Ventilation",
            "Hemodynamic Monitoring & Dialysis Support",
            "Infection Control & Sepsis Management",
            "Pain & Sedation Management",
            "Palliative & End-of-Life Care with Compassion"
        ],
        commitment: "We combine medical excellence, advanced technology, and compassionate care to save lives and ensure faster recovery. Our goal is to provide the highest standard of critical care services so patients and families feel supported during the most difficult times."
    },
    {
        id: 6,
        title: "Pediatrics Services",
        subtitle: "Dedicated health and well-being care for children from newborns to adolescents",
        icon: Baby,
        color: "from-violet-500 to-purple-600",
        bgColor: "bg-violet-50",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our Pediatrics Department is dedicated to the health and well-being of children, from newborns to adolescents. Our team of expert pediatricians and child specialists provides comprehensive care for routine health check-ups, vaccinations, growth monitoring, and treatment of childhood illnesses, ensuring your child receives the best start in life.",
        whyChoose: [
            "Experienced Pediatricians – Skilled in managing newborn, infant, child, and adolescent health",
            "Child-Friendly Environment – Comfortable and safe spaces to reduce stress for young patients",
            "Preventive & Curative Care – Focus on both early prevention and effective treatment of childhood illnesses",
            "Emergency Pediatric Care – 24/7 availability for urgent child health concerns",
            "Holistic Approach – Monitoring physical, emotional, and developmental growth"
        ],
        keyServices: [
            "Newborn Care – Neonatal screening, breastfeeding support & growth monitoring",
            "Vaccinations & Immunizations – As per national and international guidelines",
            "General Pediatric Care – Fever, infections, allergies, asthma & nutritional guidance",
            "Specialized Pediatric Care – Management of congenital disorders, childhood diabetes & developmental delays",
            "Pediatric Emergency & Critical Care – Round-the-clock support for accidents, respiratory distress, and severe illnesses",
            "Adolescent Health – Guidance on nutrition, lifestyle, hormonal changes & mental well-being"
        ],
        commitment: "We understand that children need specialized and compassionate care. Our pediatricians work closely with parents to ensure early detection, timely treatment, and preventive health guidance, making us a trusted partner in your child's healthy growth and development."
    },
    {
        id: 7,
        title: "ENT (Ear, Nose & Throat) Services",
        subtitle: "Comprehensive care for disorders related to ear, nose, throat, head, and neck",
        icon: Users,
        color: "from-indigo-500 to-blue-600",
        bgColor: "bg-indigo-50",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our ENT specialists (Otolaryngologists) provide comprehensive care for disorders related to the ear, nose, throat, head, and neck. From routine check-ups to advanced surgical procedures, our ENT department ensures precise diagnosis and effective treatment for patients of all ages.",
        whyChoose: [
            "Expert ENT Specialists – Skilled doctors with vast experience in managing simple to complex ENT disorders",
            "Advanced Technology – Equipped with endoscopic systems, audiology labs, allergy testing, and advanced surgical equipment",
            "Comprehensive Care – From common ENT problems to specialized surgeries",
            "Minimally Invasive Procedures – Faster recovery and less discomfort",
            "Multidisciplinary Approach – Collaboration with neurology, pediatrics, pulmonology & oncology specialists when required"
        ],
        conditions: [
            "Ear infections, hearing loss & tinnitus",
            "Balance disorders & vertigo",
            "Sinusitis, nasal blockages & allergies",
            "Tonsillitis, adenoid problems & throat infections",
            "Voice, speech & swallowing disorders",
            "Sleep apnea & snoring issues",
            "Head & neck tumors",
            "Pediatric ENT problems"
        ],
        keyServices: [
            "Hearing Tests & Audiology Services",
            "Endoscopic Sinus Surgery",
            "Cochlear Implants & Hearing Aids",
            "Tonsillectomy & Adenoidectomy",
            "Allergy Testing & Treatment",
            "Voice & Speech Therapy",
            "Sleep Apnea Management",
            "Head & Neck Cancer Surgery"
        ],
        commitment: "We believe in combining medical excellence, modern technology, and compassionate care. Whether it's a minor ENT problem or a complex head and neck condition, our specialists ensure personalized and effective treatment for every patient."
    },
    {
        id: 8,
        title: "Ophthalmology (Eye Care) Services",
        subtitle: "Preserving and restoring vision through advanced diagnostic and surgical eye care",
        icon: Eye,
        color: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-50",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800&auto=format&fit=crop",
        description: "At Asha Hospital, our Ophthalmology Department is dedicated to preserving and restoring vision through advanced diagnostic and surgical eye care. Our team of highly skilled ophthalmologists and eye specialists provides comprehensive treatment for a wide range of eye conditions, ensuring healthy vision for patients of all ages.",
        whyChoose: [
            "Experienced Ophthalmologists – Experts in diagnosing and treating simple to complex eye conditions",
            "Advanced Technology – Equipped with OCT, LASIK, phacoemulsification, retinal imaging, and glaucoma management systems",
            "Comprehensive Eye Care – From routine eye check-ups to advanced eye surgeries",
            "Child & Adult Eye Care – Specialized services for pediatric eye care as well as age-related vision problems",
            "Preventive & Restorative Care – Early detection and timely treatment to protect long-term vision"
        ],
        conditions: [
            "Refractive errors (Myopia, Hypermetropia, Astigmatism)",
            "Cataracts & age-related eye disorders",
            "Glaucoma & optic nerve damage",
            "Diabetic retinopathy & retinal diseases",
            "Corneal disorders & infections",
            "Squint, lazy eye & pediatric eye problems",
            "Dry eyes, allergies & conjunctivitis",
            "Trauma & emergency eye injuries"
        ],
        keyServices: [
            "Routine Eye Check-ups & Vision Screening",
            "Cataract Surgery with Advanced IOLs",
            "LASIK & Refractive Surgery",
            "Glaucoma Diagnosis & Management",
            "Retina & Diabetic Eye Care",
            "Cornea & Ocular Surface Disorder Treatment",
            "Paediatric Ophthalmology & Squint Surgery",
            "Emergency & Trauma Eye Care"
        ],
        commitment: "We aim to provide world-class, compassionate, and affordable eye care services. Our focus is not only on treating existing vision problems but also on preventing future complications through regular eye check-ups and advanced treatments."
    }
];

export const contactPageData = {
    hero: {
        title: "Contact Asha Hospital",
        subtitle: "We're here to help you with all your healthcare needs. Reach out to us for appointments, inquiries, or emergency care.",
        features: [
            { icon: Clock, title: "24/7 Emergency", desc: "Always available for urgent care" },
            { icon: Phone, title: "Quick Response", desc: "Fast appointment booking" },
            { icon: MapPin, title: "Easy Location", desc: "Centrally located in Muzaffarpur" }
        ]
    },
    operatingHours: {
        emergency: "24/7 Emergency Services",
        opd: "Monday - Saturday: 8:00 AM - 8:00 PM",
        sunday: "Sunday: 9:00 AM - 2:00 PM"
    },
    socialMedia: [
        { name: "Facebook", icon: Facebook, href: "#facebook", color: "from-blue-500 to-blue-600" },
        { name: "Instagram", icon: Instagram, href: "#instagram", color: "from-blue-500 to-purple-600" },
        { name: "Twitter", icon: Twitter, href: "#twitter", color: "from-sky-500 to-blue-600" },
        { name: "YouTube", icon: Youtube, href: "#youtube", color: "from-blue-500 to-blue-600" },
    ],
    services: [
        { icon: Calendar, title: "Online Appointments", desc: "Book your appointment online for convenience" },
        { icon: Heart, title: "Patient Care", desc: "Dedicated patient support and care services" },
        { icon: Award, title: "Quality Care", desc: "Award-winning healthcare services and treatment" },
        { icon: Stethoscope, title: "Expert Doctors", desc: "Highly qualified medical professionals" }
    ]
};