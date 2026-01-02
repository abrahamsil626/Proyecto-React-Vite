import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    Star,
    CheckCircle,
    Shield,
    Zap,
    ArrowRight,
    Mail,
    User,
    MessageSquare,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Funciones', href: '#features' },
        { name: 'Proyectos', href: '#carousel' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#inicio" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="text-white" size={18} />
                    </div>
                    Landing<span className="text-blue-600">Demo</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-transform active:scale-95 shadow-lg shadow-blue-200">
                        Empezar Ahora
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 py-6 px-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold mt-2 shadow-lg shadow-blue-100">
                        Prueba Gratuita
                    </button>
                </div>
            )}
        </nav>
    );
};

const Hero = () => (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] hidden md:block"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                    Simplifica tu <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">flujo de trabajo</span> en segundos
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                    La plataforma todo-en-uno para equipos modernos que buscan excelencia técnica y diseño minimalista. Escala tus proyectos sin fricciones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group">
                        Comenzar Gratis
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                        Ver Demo
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-200 border-8 border-white">
                    <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
                        <span className="text-slate-400 font-medium">Main Image Placeholder</span>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                        alt="Dashboard Preview"
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                        onLoad={(e) => e.target.style.opacity = '1'}
                    />
                </div>
            </div>
        </div>
    </section>
);

const Features = () => {
    const items = [
        {
            icon: <Zap size={32} />,
            title: "Alto Rendimiento",
            desc: "Arquitectura optimizada para máxima velocidad y mínima latencia en cada interacción."
        },
        {
            icon: <Shield size={32} />,
            title: "Seguridad Total",
            desc: "Encriptación de grado militar y cumplimiento de estándares internacionales de privacidad."
        },
        {
            icon: <CheckCircle size={32} />,
            title: "Gestión Inteligente",
            desc: "Automatiza tareas repetitivas y enfócate en lo que realmente aporta valor a tu negocio."
        },
        {
            icon: <Star size={32} />,
            title: "UX Premium",
            desc: "Una interfaz diseñada meticulosamente para ofrecer la mejor experiencia de usuario posible."
        }
    ];

    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Características Principales</h2>
                    <p className="text-slate-600">Todo lo que necesitas para llevar tu productividad al siguiente nivel con herramientas profesionales.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            title: "Proyecto Alpha",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
            tag: "Desarrollo Web"
        },
        {
            title: "App SyncPro",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
            tag: "Mobile UI"
        },
        {
            title: "FlujoS n8n",
            image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp",
            tag: "Analytics"
        }
    ];

    const next = () => setCurrent((current + 1) % slides.length);
    const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

    return (
        <section id="carousel" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nuestros Proyectos</h2>
                        <p className="text-slate-600">Echa un vistazo a lo que estamos construyendo. Innovación constante en cada línea de código.</p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={prev} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                            <ChevronLeft />
                        </button>
                        <button onClick={next} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-[2.5rem] h-[400px] md:h-[600px] group shadow-2xl">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
                        >
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                                <span className="text-blue-400 font-bold mb-2">{slide.tag}</span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h3>
                                <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                                    Ver detalles del proyecto <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const reviews = [
        {
            name: "Andrés García",
            role: "CEO en TechFlow",
            text: "NovaSync ha transformado por completo cómo manejamos nuestras operaciones. La integración fue fluida y el soporte técnico es excepcional.",
            img: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
        },
        {
            name: "Lucía Méndez",
            role: "Product Manager",
            text: "La mejor interfaz que he usado en años. Realmente se nota el enfoque en la experiencia de usuario y el minimalismo profesional.",
            img: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        },
        {
            name: "Marcos Torres",
            role: "Lead Developer",
            text: "Como ingeniero, aprecio mucho la limpieza de su API y la rapidez de respuesta del sistema. Altamente recomendado para equipos técnicos.",
            img: "https://i.pravatar.cc/150?u=a042581f4e29026704e"
        }
    ];

    return (
        <section id="testimonios" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen de nosotros</h2>
                    <p className="text-slate-400">Cientos de empresas ya confían en nuestra plataforma para escalar sus negocios.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <div key={i} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Star size={60} fill="currentColor" />
                            </div>
                            <div className="flex gap-1 text-blue-400 mb-6">
                                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-300 mb-8 italic">"{rev.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full ring-2 ring-blue-500/20" />
                                <div>
                                    <h4 className="font-bold text-white">{rev.name}</h4>
                                    <p className="text-sm text-slate-500">{rev.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "El nombre es obligatorio";
        if (!formData.email) {
            newErrors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.message) newErrors.message = "El mensaje no puede estar vacío";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Enviando:', formData);
            setIsSent(true);
            setTimeout(() => setIsSent(false), 3000);
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <section id="contacto" className="py-24">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-blue-600 p-12 text-white flex flex-col justify-between">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold leading-tight">¿Tienes un proyecto en mente?</h2>
                            <p className="text-blue-100 opacity-80 text-lg">
                                Hablemos. Nuestro equipo está listo para ayudarte a hacerlo realidad.
                            </p>
                        </div>
                        <div className="space-y-4 pt-8 border-t border-blue-500 mt-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                                    <Mail size={18} />
                                </div>
                                <span>info@demoforgithubJulioSilva</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                                    <User size={18} />
                                </div>
                                <span>Soporte 24/7</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 p-8 md:p-16">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Ej. Juan Pérez"
                                            className={`w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border transition-all outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-100'}`}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Correo Electrónico</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="email"
                                            placeholder="tu@email.com"
                                            className={`w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border transition-all outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-100'}`}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Mensaje</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-6 text-slate-400" size={18} />
                                    <textarea
                                        rows="4"
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                        className={`w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border transition-all outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-100'}`}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className={`w-full md:w-auto px-12 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 ${isSent ? 'bg-green-500 text-white shadow-green-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 active:scale-95'}`}
                            >
                                {isSent ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
                                {!isSent && <ArrowRight size={20} />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1 space-y-6">
                    <a href="#" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Zap className="text-white" size={18} />
                        </div>
                        DEMO
                    </a>
                    <p className="text-slate-500">Impulsando la innovación tecnológica con soluciones elegantes y escalables para el mundo moderno.</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer"><Facebook size={20} /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer"><Twitter size={20} /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer"><Linkedin size={20} /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer"><Instagram size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Compañía</h4>
                    <ul className="space-y-4 text-slate-500">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Sobre Nosotros</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Carreras</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Prensa</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Soporte</h4>
                    <ul className="space-y-4 text-slate-500">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Documentación</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Centro de Ayuda</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">API Status</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Contacto</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
                    <ul className="space-y-4 text-slate-500">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Privacidad</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Términos</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Cookies</a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-slate-500">© 2026 Julio Abraham Silva. Todos los derechos reservados.</p>
                {/* <div className="flex gap-2 text-sm text-slate-400">
                    <span>Hecho con ❤️ para el mundo.</span>
                </div> */}
            </div>
        </div>
    </footer>
);

export default function App() {
    return (
        <div className="font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-700">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Carousel />
                <Testimonials />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}
