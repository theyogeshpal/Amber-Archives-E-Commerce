import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ReplayIcon from '@mui/icons-material/Replay';
import SearchIcon from '@mui/icons-material/Search';

const faqData = [
    {
        category: "General",
        icon: <QuestionAnswerIcon className="text-yellow-500" />,
        questions: [
            {
                q: "What is Amber Archives?",
                a: "Amber Archives is a premium e-commerce platform dedicated to curated collections and timeless pieces, ranging from vintage-inspired fashion to modern artisanal goods."
            },
            {
                q: "Do I need an account to place an order?",
                a: "While you can browse as a guest, creating an account allows you to track orders, save items to your wishlist, and enjoy a faster checkout experience."
            }
        ]
    },
    {
        category: "Shipping & Delivery",
        icon: <LocalShippingIcon className="text-yellow-500" />,
        questions: [
            {
                q: "How long will my order take to arrive?",
                a: "Typically, orders are processed within 1-2 business days. Shipping usually takes 3-5 business days for domestic orders and 7-14 business days for international shipping."
            },
            {
                q: "How can I track my order?",
                a: "Once your order is shipped, you will receive an email with a tracking number and a link to monitor your package's progress."
            }
        ]
    },
    {
        category: "Payments",
        icon: <PaymentIcon className="text-yellow-500" />,
        questions: [
            {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay for a secure and easy checkout."
            },
            {
                q: "Is my payment information secure?",
                a: "Absolutely. We use industry-standard SSL encryption to protect your personal and financial details during every transaction."
            }
        ]
    },
    {
        category: "Returns & Refunds",
        icon: <ReplayIcon className="text-yellow-500" />,
        questions: [
            {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please visit our Returns page for a step-by-step guide."
            },
            {
                q: "How long does it take to get a refund?",
                a: "Once we receive and inspect your returned item, refunds are typically processed within 5-7 business days back to your original payment method."
            }
        ]
    }
];

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const filteredFaqs = faqData.map(category => ({
        ...category,
        questions: category.questions.filter(item =>
            item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className="min-h-screen bg-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Animations aligned with HeroSection */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400/20 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-yellow-200/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-yellow-100/20 rounded-full blur-[100px] animate-blob animation-delay-5000"></div>

                {/* Mesh Gradient Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
            </div>

            <Container maxWidth="md" className="relative z-10">
                {/* Header section - Aligned with Featured Collections Style */}
                <Box className="text-center mb-16 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-gray-900 text-[10px] font-black mb-4 tracking-widest uppercase">
                        Support Center
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tighter">
                        How can we <span className="text-yellow-500">help you?</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">
                        Find answers to common questions about our products, shipping, returns, and more.
                    </p>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full"></div>

                    {/* Search Bar with Brand Style */}
                    <div className="mt-10 max-w-xl mx-auto relative group">
                        <div className="relative flex items-center bg-white border-2 border-gray-900 rounded-2xl shadow-xl overflow-hidden">
                            <div className="pl-5 flex items-center pointer-events-none">
                                <SearchIcon className="text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for questions..."
                                className="block w-full pl-4 pr-4 py-5 bg-transparent border-none outline-none text-gray-700 font-bold placeholder-gray-400"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="pr-2">
                                <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-black hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 active:scale-95">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>

                {/* FAQ Content */}
                <div className="space-y-16">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((cat, catIdx) => (
                            <div key={catIdx} className="animate-fade-in-up" style={{ animationDelay: `${catIdx * 150}ms` }}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-gray-900 text-yellow-400 rounded-2xl shadow-lg">
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 leading-none mb-1 uppercase tracking-tight">{cat.category}</h3>
                                        <p className="text-[10px] text-yellow-600 font-bold uppercase tracking-[0.2em]">{cat.questions.length} Questions</p>
                                    </div>
                                    <div className="flex-1 h-0.5 bg-gray-100 ml-4 hidden sm:block"></div>
                                </div>
                                <div className="space-y-4">
                                    {cat.questions.map((item, qIdx) => {
                                        const panelId = `panel-${catIdx}-${qIdx}`;
                                        const isExpanded = expanded === panelId;
                                        return (
                                            <Accordion
                                                key={qIdx}
                                                expanded={isExpanded}
                                                onChange={handleChange(panelId)}
                                                disableGutters
                                                elevation={0}
                                                className={`border-2 rounded-[2rem] overflow-hidden before:hidden transition-all duration-500 ${isExpanded ? 'border-yellow-400 bg-yellow-50/30 shadow-xl shadow-yellow-400/10' : 'border-gray-100 bg-white hover:border-yellow-200 hover:shadow-lg'}`}
                                                sx={{
                                                    borderRadius: '2rem !important',
                                                    '&:not(:last-child)': { marginBottom: '1.25rem' },
                                                }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-gray-900 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                                            <ExpandMoreIcon fontSize="small" />
                                                        </div>
                                                    }
                                                    className="px-8 py-3"
                                                >
                                                    <Typography className={`font-bold transition-colors ${isExpanded ? 'text-gray-900' : 'text-gray-700'}`}>
                                                        {item.q}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="px-10 pb-10 pt-0">
                                                    <div className="h-0.5 w-full bg-gray-100 mb-6"></div>
                                                    <Typography className="text-gray-600 leading-relaxed text-[1.05rem]">
                                                        {item.a}
                                                    </Typography>
                                                    {isExpanded && (
                                                        <div className="mt-8 flex items-center gap-4">
                                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Helpful?</span>
                                                            <div className="flex gap-2">
                                                                <button className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-black text-gray-900 hover:bg-gray-900 hover:text-white transition">Yes</button>
                                                                <button className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-black text-gray-900 hover:bg-gray-900 hover:text-white transition">No</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </AccordionDetails>
                                            </Accordion>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-200 animate-fade-in-up">
                            <div className="mb-6 flex justify-center text-yellow-200">
                                <SearchIcon sx={{ fontSize: 80 }} />
                            </div>
                            <Typography variant="h5" className="text-gray-900 font-black mb-2 text-2xl">No Archive Found</Typography>
                            <p className="text-gray-500 max-w-xs mx-auto text-lg">
                                We couldn't find matches for "<span className="text-yellow-600 font-bold">{searchTerm}</span>"
                            </p>
                            <button
                                onClick={() => setSearchTerm('')}
                                className="mt-8 px-10 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition shadow-xl"
                            >
                                Reset Search
                            </button>
                        </div>
                    )}
                </div>

                {/* Contact Section Aligned with Brand CTA */}
                <Box className="mt-32 p-12 md:p-20 bg-gray-900 rounded-[3rem] text-center relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-[100px] animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-yellow-400 text-gray-900 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-yellow-400/20">
                            <QuestionAnswerIcon sx={{ fontSize: 32 }} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Still have <span className="text-yellow-400">questions?</span>
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                            Can't find the answer? Reach out to our dedicated support team 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-yellow-400 text-gray-900 font-black rounded-2xl hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 active:scale-95 text-lg text-center">
                                Start A Request
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white text-white font-extrabold rounded-2xl hover:bg-white hover:text-gray-900 transition-all active:scale-95 text-lg text-center">
                                Chat With Us
                            </Link>
                        </div>
                    </div>
                </Box>
            </Container>

            <style dangerouslySetInnerHTML={{
                __html: `
                .MuiAccordion-root:before { display: none; }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 8s infinite alternate ease-in-out; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-5000 { animation-delay: 5s; }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    opacity: 0;
                    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}} />
        </div>
    );
};

export default FAQ;
