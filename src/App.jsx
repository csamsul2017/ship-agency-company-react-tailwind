import React, { useState } from 'react';
import { Anchor, Clock, MapPin, ShieldCheck, Zap, Ship, ClipboardCheck, Users, Package, Mail, Phone, Map, Menu, X, Camera, ArrowRight, Globe } from 'lucide-react';
import './App.css';
import { translations } from './translations';

const vesselList = [
  'TB. ABADI SAKTI II',
  'LCT. ADINDA FADILLA',
  'LCT. ANDROS',
  'LCT. AYU 138',
  'LCT. AYU 168',
  'LCT. AYU 178',
  'LCT. AYU 188',
  'LCT. AYU 208',
  'LCT. AYU 28',
  'LCT. AYU 48',
  'LCT. AYU 58',
  'LCT. AYU 7',
  'LCT. AYU 8',
  'LCT. AYU 88',
  'LCT. AYU EXPRESS 1',
  'LCT. AYU EXPRESS 2',
  'LCT. BERLY',
  'LCT. BINTANG SAMUDRA 2',
  'LCT. BINTANG SAMUDRA 8',
  'LCT. CIPTA HARAPAN IX',
  'DRAKO 2302 TONGKANG / BARGE',
  'TB. DRAKO ENTERPRISE',
  'LCT. EL NINA SAMUDRA 23',
  'TB. ESCOOP GREEN LINE 02',
  'TB. ESCOOPG 02',
  'LCT. HARAPAN PERDANA 99',
  'LCT. KARYA MANDIRI 89',
  'LCT. MUARA KENCANA INDAH',
  'LCT. PUTRA BAWEAN 01',
  'LCT. PUTRA JAYA',
  'LCT. SAMUDRA RAHAYU I',
  'LCT. SAMUDRA BINTAN 88',
  'LCT. SAMUDRA JAYA NUSANTARA',
  'LCT. SANJAYA 01',
  'LCT. SANJAYA 05',
  'LCT. SAS 05',
  'LCT. SJP 168 A',
  'SAMUDRA BINTAN 88 TONGKANG / BARGE',
  'VIRGO SEJATI 332 TONGKANG / BARGE',
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="GPI Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-primary-900 font-medium transition-colors">
                {t.nav.home}
              </a>
              <a href="#about" className="text-slate-600 hover:text-primary-900 font-medium transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-slate-600 hover:text-primary-900 font-medium transition-colors">
                {t.nav.services}
              </a>
              <a href="#gallery" className="text-slate-600 hover:text-primary-900 font-medium transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#experience" className="text-slate-600 hover:text-primary-900 font-medium transition-colors">
                {t.nav.experience}
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button onClick={toggleLang} className="flex items-center gap-1.5 text-slate-600 hover:text-primary-900 font-medium transition-colors px-2 py-1 rounded-md hover:bg-slate-50" title="Change Language">
                <Globe className="h-5 w-5" />
                <span className="font-semibold">{lang === 'en' ? 'ID' : 'EN'}</span>
              </button>
              <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
                {t.nav.contact}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="flex items-center gap-1 text-slate-600 hover:text-primary-900 font-medium transition-colors">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-semibold">{lang === 'en' ? 'ID' : 'EN'}</span>
              </button>
              <button onClick={toggleMobileMenu} className="text-slate-600 hover:text-primary-900 focus:outline-none p-2">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl transition-all">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#home" onClick={toggleMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md">
                {t.nav.home}
              </a>
              <a href="#about" onClick={toggleMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md">
                {t.nav.about}
              </a>
              <a href="#services" onClick={toggleMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md">
                {t.nav.services}
              </a>
              <a href="#gallery" onClick={toggleMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md">
                {t.nav.gallery}
              </a>
              <a href="#experience" onClick={toggleMobileMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md">
                {t.nav.experience}
              </a>
              <a href="#contact" onClick={toggleMobileMenu} className="block px-3 py-3 mt-4 text-center text-base font-medium text-white bg-accent-500 hover:bg-accent-600 rounded-md">
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero.jpeg" alt="Cargo Ship" className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-primary-950/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm animate-fade-in-up">{t.hero.badge}</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight animate-fade-in-up-delay-1">
            {t.hero.title1} <br className="hidden md:block" />
            <span className="text-accent-400">{t.hero.title2}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">{t.hero.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <a href="#services" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent-500/30 hover:-translate-y-1 inline-block">
              {t.hero.btn1}
            </a>
            <a href="#about" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm hover:-translate-y-1 inline-block">
              {t.hero.btn2}
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-medium text-slate-500 mb-2">{t.welcome.greeting}</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-primary-900 mb-6 leading-tight">{t.welcome.company}</h3>
              <div className="w-24 h-1.5 bg-accent-500 mb-8 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic border-l-4 border-accent-500 pl-5 text-left bg-slate-50 p-6 rounded-r-xl shadow-sm">"{t.welcome.desc}"</p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
              <div className="relative w-full max-w-[320px] mx-auto md:mx-0 md:ml-auto">
                {/* Decorative background blobs */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-accent-200 rounded-[2rem] blur-2xl opacity-60"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-accent-400 rounded-[2rem] opacity-20"></div>

                {/* Portrait Card */}
                <div className="relative bg-white p-2.5 rounded-[2rem] shadow-2xl group">
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] bg-slate-100">
                    <img
                      src="/ceo.jepg"
                      alt="Tirza Aprilina, S.Tr., M.M."
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={e => {
                        // Fallbacks in case of typos
                        if (e.target.src.includes('.jepg')) {
                          e.target.src = '/ceo.jpeg';
                        } else if (e.target.src.includes('.jpeg')) {
                          e.target.src = '/ceo.jpg';
                        } else {
                          e.target.src = 'https://ui-avatars.com/api/?name=Tirza+Aprilina&background=0D8ABC&color=fff&size=256';
                        }
                      }}
                    />
                    {/* Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>

                    {/* Text Content overlaying the image */}
                    <div className="absolute bottom-4 left-0 w-full p-6 text-left">
                      <h4 className="text-xl md:text-xl font-bold text-white mb-2">Tirza Aprilina, S.Tr., M.M.</h4>
                      <p className="inline-flex items-center bg-accent-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs shadow-sm">{t.welcome.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold uppercase tracking-wider mb-6">
                <ShieldCheck className="h-4 w-4" /> {t.about.cert}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">{t.about.title}</h2>
              <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p1 }}></p>
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">{t.about.p2}</p>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                <div>
                  <h4 className="text-3xl font-extrabold text-primary-900 mb-2">{t.about.stat1Title}</h4>
                  <p className="text-slate-500 font-medium">{t.about.stat1Desc}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-primary-900 mb-2">{t.about.stat2Title}</h4>
                  <p className="text-slate-500 font-medium">{t.about.stat2Desc}</p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute -inset-4 bg-primary-100 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-[#115e59] rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-primary-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">{t.about.coreTitle}</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 h-fit">
                      <Clock className="text-accent-400 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.about.core1Title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{t.about.core1Desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 h-fit">
                      <Zap className="text-accent-400 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.about.core2Title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{t.about.core2Desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 h-fit">
                      <MapPin className="text-accent-400 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.about.core3Title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{t.about.core3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">{t.services.title}</h2>
            <p className="text-base md:text-lg text-slate-600">{t.services.desc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Service Card 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col h-full z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-20"></div>
              <div className="absolute inset-[2px] bg-white rounded-[22px] -z-10 transition-colors duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-[2.5] group-hover:bg-primary-50/50"></div>

              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-900 group-hover:-translate-y-2 transition-all duration-500 shadow-sm relative">
                <ClipboardCheck className="h-8 w-8 text-primary-600 group-hover:text-accent-400 transition-colors duration-500" />
                <div className="absolute -inset-2 bg-primary-900/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]"></div>
              </div>

              <h3 className="text-xl font-extrabold text-primary-900 mb-4 group-hover:text-primary-800 transition-colors">{t.services.s1Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{t.services.s1Desc}</p>

              <div className="mt-auto flex items-center gap-2 text-primary-600 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span>{t.services.explore}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col h-full z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-20"></div>
              <div className="absolute inset-[2px] bg-white rounded-[22px] -z-10 transition-colors duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-[2.5] group-hover:bg-primary-50/50"></div>

              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-900 group-hover:-translate-y-2 transition-all duration-500 shadow-sm relative">
                <Ship className="h-8 w-8 text-primary-600 group-hover:text-accent-400 transition-colors duration-500" />
                <div className="absolute -inset-2 bg-primary-900/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]"></div>
              </div>

              <h3 className="text-xl font-extrabold text-primary-900 mb-4 group-hover:text-primary-800 transition-colors">{t.services.s2Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{t.services.s2Desc}</p>

              <div className="mt-auto flex items-center gap-2 text-primary-600 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span>{t.services.explore}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col h-full z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-20"></div>
              <div className="absolute inset-[2px] bg-white rounded-[22px] -z-10 transition-colors duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-[2.5] group-hover:bg-primary-50/50"></div>

              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-900 group-hover:-translate-y-2 transition-all duration-500 shadow-sm relative">
                <Users className="h-8 w-8 text-primary-600 group-hover:text-accent-400 transition-colors duration-500" />
                <div className="absolute -inset-2 bg-primary-900/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]"></div>
              </div>

              <h3 className="text-xl font-extrabold text-primary-900 mb-4 group-hover:text-primary-800 transition-colors">{t.services.s3Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{t.services.s3Desc}</p>

              <div className="mt-auto flex items-center gap-2 text-primary-600 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span>{t.services.explore}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col h-full z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-20"></div>
              <div className="absolute inset-[2px] bg-white rounded-[22px] -z-10 transition-colors duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-[2.5] group-hover:bg-primary-50/50"></div>

              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-900 group-hover:-translate-y-2 transition-all duration-500 shadow-sm relative">
                <Package className="h-8 w-8 text-primary-600 group-hover:text-accent-400 transition-colors duration-500" />
                <div className="absolute -inset-2 bg-primary-900/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]"></div>
              </div>

              <h3 className="text-xl font-extrabold text-primary-900 mb-4 group-hover:text-primary-800 transition-colors">{t.services.s4Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{t.services.s4Desc}</p>

              <div className="mt-auto flex items-center gap-2 text-primary-600 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span>{t.services.explore}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-600 font-semibold uppercase tracking-wider mb-3 text-sm">
                <Camera className="h-4 w-4" /> {t.gallery.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900">{t.gallery.title}</h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm md:text-base">{t.gallery.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gallery Image 1 - Large spanning 2 rows on large screens */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md h-64 md:h-80 lg:h-[536px] md:col-span-2 lg:col-span-2 lg:row-span-2">
              <img src="/moring-boat.jpeg" alt="Port Operations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h4 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.g1Title}</h4>
                  <p className="text-slate-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.g1Desc}</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 2 - Wide landscape */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md h-64 lg:col-span-2">
              <img src="/vessel-deck.jpeg" alt="Tug Boat Assisting Vessel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.g2Title}</h4>
                  <p className="text-slate-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.g2Desc}</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 3 - Square */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md h-64">
              <img src="/lct-ayu-178.jpeg" alt="Ship Bridge Navigation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.g3Title}</h4>
                  <p className="text-slate-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.g3Desc}</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 4 - Square */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md h-64 md:col-span-2 lg:col-span-1">
              <img src="/lct-harapan-perdana-99.jpeg" alt="Docked Vessel at Sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.g4Title}</h4>
                  <p className="text-slate-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.g4Desc}</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 5 - Square */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md h-64">
              <img src="/lct-ayu-138.jpeg" alt="Cargo Operations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.g5Title}</h4>
                  <p className="text-slate-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.g5Desc}</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 6 - Wide landscape */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md h-64 lg:col-span-2">
              <img src="/lct-putra-jaya.jpeg" alt="Custom Clearances" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.g6Title}</h4>
                  <p className="text-slate-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.g6Desc}</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 7 - Square */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md h-64 md:col-span-2 lg:col-span-1">
              <img src="/lct-ayu-188.jpeg" alt="Offshore Supply" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.g7Title}</h4>
                  <p className="text-slate-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.g7Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vessel Experience Section */}
      <section id="experience" className="py-20 md:py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left shrink-0">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">{t.experience.title}</h2>
              <div className="text-6xl md:text-7xl font-extrabold text-accent-500 mb-4">{t.experience.statTitle}</div>
              <p className="text-xl font-semibold text-slate-800 mb-2">{t.experience.statSubtitle}</p>
              <p className="text-slate-500">{t.experience.desc}</p>
            </div>

            {/* Vessels List Area */}
            <div className="lg:w-2/3 w-full">
              <div className="flex flex-wrap gap-1.5 md:gap-2 py-8 justify-center lg:justify-start">
                {vesselList.map((vessel, i) => {
                  return (
                    <div
                      key={`v-${i}`}
                      className="group/card relative bg-white border border-slate-200 px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg flex items-center gap-1.5 whitespace-nowrap shadow-sm hover:shadow-md hover:shadow-accent-500/10 hover:border-accent-400 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-8 h-8 bg-primary-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover/card:scale-150 group-hover/card:bg-accent-50"></div>
                      <Ship className="h-3.5 w-3.5 text-primary-300 group-hover/card:text-accent-500 group-hover/card:-rotate-12 group-hover/card:scale-110 transition-all duration-300" />
                      <span className="font-semibold tracking-wide text-[10px] md:text-xs text-primary-900">{vessel}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary-950 pt-20 pb-10 text-slate-300 border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="GPI Logo" className="h-12 w-auto" />
              </div>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed text-sm md:text-base">{t.footer.desc}</p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">{t.footer.linksTitle}</h4>
              <ul className="space-y-4 text-sm md:text-base">
                <li>
                  <a href="#home" className="hover:text-accent-400 transition-colors">
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent-400 transition-colors">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent-400 transition-colors">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-accent-400 transition-colors">
                    {t.nav.gallery}
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-accent-400 transition-colors">
                    {t.nav.experience}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">{t.footer.contactTitle}</h4>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <Map className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  {/* <span>Jl. Yos Sudarso No. 45, Tanjung Priok, Jakarta Utara, 14320, Indonesia</span> */}
                  <span>Jalan Edam I No. 9, RT.4/RW.16, Tanjung Priok, KOTA JAKARTA UTARA, TANJUNG PRIOK, DKI JAKARTA, ID, 14310</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                  <span>+62 812 1825 4709 (24/7 Ops)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                  <span>info@gerbangpelabuhan.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
