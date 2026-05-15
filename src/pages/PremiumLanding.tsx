import { useState, useEffect, useRef, ReactNode } from "react";
import { Phone, ChevronDown, ChevronUp, Menu, X, HeartPulse, Shield, Move, AlignCenter, Dumbbell, Sparkles, ClipboardCheck, Target, UserCheck, RefreshCw, Home, Activity, Star, Users, Award, Clock } from "lucide-react";

const WA = "https://wa.me/5500000000000";

function Reveal({ children, cls = "anim-fade-up", delay = "" }: { children: ReactNode; cls?: string; delay?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={visible ? `${cls} ${delay}` : "opacity-0"}>{children}</div>;
}

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const h = () => setScroll(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const links = [{ l: "Benefícios", h: "#beneficios" }, { l: "Tratamento", h: "#tratamento" }, { l: "Sobre", h: "#sobre" }, { l: "Modalidades", h: "#modalidades" }, { l: "FAQ", h: "#faq" }];
  return (
    <nav style={{ background: scroll ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: scroll ? "blur(12px)" : "none", boxShadow: scroll ? "0 1px 20px rgba(0,0,0,0.06)" : "none" }} className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top"><img src="/logo-jonas.svg" alt="Jonas de Paula" className="h-20 md:h-24 w-auto" /></a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => <a key={l.h} href={l.h} className="text-[13px] font-medium tracking-wide uppercase" style={{ color: "#6B7280", transition: "color 0.3s" }} onMouseEnter={e => (e.currentTarget.style.color = "#31B8D2")} onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}>{l.l}</a>)}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand !py-3 !px-7 !text-[13px]"><Phone className="w-4 h-4" />Agendar</a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && <div className="md:hidden bg-white border-t px-6 py-5 space-y-4">{links.map(l => <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-600">{l.l}</a>)}<a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand w-full text-center !text-sm"><Phone className="w-4 h-4" />Agendar avaliação</a></div>}
    </nav>
  );
}

function Hero() {
  const t = "• AGENDE SUA AVALIAÇÃO  ";
  return (
    <section id="top" className="relative pt-28 pb-0 md:pt-36 md:pb-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #F4FBFC 0%, #FFFFFF 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-4">
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <Reveal delay="delay-1"><span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6" style={{ background: "#E8F7FA", color: "#31B8D2" }}>Fisioterapia personalizada</span></Reveal>
          <Reveal delay="delay-2"><h1 style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold mb-6"><span className="text-gradient">Viva sem dor.</span><br />Recupere sua liberdade<br />de movimento.</h1></Reveal>
          <Reveal delay="delay-3"><p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#6B7280" }}>Tratamento fisioterapêutico individualizado, baseado em ciência e cuidado humano. Resultados reais para quem quer voltar a se mover com confiança.</p></Reveal>
          <Reveal delay="delay-4"><div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand"><Phone className="w-5 h-5" />Agende sua avaliação</a>
            <a href="#tratamento" className="btn-outline">Conhecer o método</a>
          </div></Reveal>
          <Reveal delay="delay-5"><p className="mt-6 text-xs font-medium" style={{ color: "#9CA3AF" }}>CREFITO-4/439517-F</p></Reveal>
        </div>
        <Reveal cls="anim-fade-right" delay="delay-3" >
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[32px] opacity-[0.07]" style={{ background: "radial-gradient(circle, #31B8D2 0%, transparent 70%)" }} />
              <img src="/jonas-portrait.png" alt="Dr. Jonas de Paula — Fisioterapeuta" className="relative w-[320px] md:w-[400px] lg:w-[440px] object-contain drop-shadow-2xl" style={{ filter: "drop-shadow(0 20px 40px rgba(49,184,210,0.12))" }} />
            </div>
          </div>
        </Reveal>
      </div>
      {/* Marquee overlapping the photo bottom */}
      <div className="relative -mt-8 md:-mt-12 z-10 overflow-hidden py-4" style={{ background: "linear-gradient(90deg, #31B8D2, #5ECFE0)" }}>
        <div className="marquee-track" style={{ animationDuration: "40s" }}>
          {[...Array(4)].map((_, i) => <span key={i} className="text-white text-sm md:text-base font-semibold tracking-[0.2em] whitespace-nowrap" style={{ fontFamily: "'Sora', sans-serif" }}>{t.repeat(10)}</span>)}
        </div>
      </div>
    </section>
  );
}

const statsData = [
  { icon: Users, value: "500+", label: "Pacientes atendidos" },
  { icon: Award, value: "5+", label: "Anos de experiência" },
  { icon: Star, value: "4.9", label: "Avaliação Google" },
  { icon: Clock, value: "50min", label: "Sessão individualizada" },
];

function Stats() {
  return (
    <section className="py-12 md:py-14" style={{ background: "#FAFBFC" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((s, i) => (
            <Reveal key={s.label} delay={`delay-${i + 1}` as any}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, rgba(49,184,210,0.12), rgba(49,184,210,0.04))" }}>
                  <s.icon className="w-5 h-5" style={{ color: "#31B8D2" }} />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "'Sora', sans-serif", color: "#31B8D2" }}>{s.value}</p>
                <p className="text-xs md:text-sm mt-1 font-medium" style={{ color: "#9CA3AF" }}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: HeartPulse, t: "Redução de dores", d: "Alívio de dores musculares e articulares com técnicas comprovadas." },
  { icon: Shield, t: "Recuperação de lesões", d: "Reabilitação segura após lesões, fraturas e cirurgias." },
  { icon: Move, t: "Mais mobilidade", d: "Ganho real de flexibilidade e amplitude de movimento." },
  { icon: AlignCenter, t: "Postura corrigida", d: "Ajustes posturais que aliviam tensões do dia a dia." },
  { icon: Dumbbell, t: "Volta às atividades", d: "Retorno seguro aos esportes e exercícios físicos." },
  { icon: Sparkles, t: "Prevenção de lesões", d: "Fortalecimento para evitar que a dor volte." },
];

function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal><p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#31B8D2" }}>BENEFÍCIOS</p></Reveal>
        <Reveal delay="delay-1"><h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl md:text-4xl font-extrabold text-center mb-4">Resultados que você sente<br className="hidden md:block" /> desde as primeiras sessões</h2></Reveal>
        <Reveal delay="delay-2"><p className="text-center max-w-xl mx-auto mb-14" style={{ color: "#6B7280" }}>Um cuidado completo focado em devolver o que a dor tirou de você.</p></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={`delay-${i + 1}` as any}>
              <div className="card-service h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #31B8D2, #7DD3E8)" }}>
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{b.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: ClipboardCheck, n: "01", t: "Avaliação Completa", d: "Análise detalhada do seu corpo, da sua dor e do seu histórico para um diagnóstico assertivo." },
  { icon: Target, n: "02", t: "Planejamento de Metas", d: "Definimos juntos objetivos claros e realistas para o seu tratamento." },
  { icon: UserCheck, n: "03", t: "Plano Individualizado", d: "Cada paciente recebe um plano terapêutico único, pensado para o seu corpo." },
  { icon: RefreshCw, n: "04", t: "Acompanhamento Contínuo", d: "Reavaliações regulares garantindo evolução e ajustes no tratamento." },
];

function Treatment() {
  return (
    <section id="tratamento" className="py-16 md:py-20" style={{ background: "#FAFBFC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal><p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#31B8D2" }}>COMO FUNCIONA</p></Reveal>
        <Reveal delay="delay-1"><h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl md:text-4xl font-extrabold mb-4">Um método claro, do diagnóstico<br className="hidden md:block" /> à sua recuperação completa</h2></Reveal>
        <Reveal delay="delay-2"><p className="max-w-2xl mb-14" style={{ color: "#6B7280" }}>Cada paciente é único. Por isso, o tratamento começa com escuta atenta e segue um plano feito sob medida para o seu corpo, sua rotina e seus objetivos.</p></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={`delay-${i + 1}` as any}>
              <div className="h-full rounded-[20px] p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl" style={{ background: "linear-gradient(135deg, #31B8D2 0%, #5ECFE0 100%)" }}>
                <span className="text-3xl font-extrabold block mb-3 text-white/20" style={{ fontFamily: "'Sora', sans-serif" }}>{s.n}</span>
                <s.icon className="w-7 h-7 mb-4 text-white" />
                <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{s.t}</h3>
                <p className="text-sm leading-relaxed text-white/80">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">
        <Reveal cls="anim-fade-left" delay="delay-1">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px]" style={{ background: "linear-gradient(135deg, rgba(49,184,210,0.08), rgba(49,184,210,0.02))" }} />
              <img src="/jonas-portrait.png" alt="Jonas de Paula" className="relative w-[260px] md:w-[320px] object-contain rounded-[24px]" />
            </div>
          </div>
        </Reveal>
        <Reveal delay="delay-2">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#31B8D2" }}>SOBRE</p>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl md:text-4xl font-extrabold mb-6">Olá, eu sou<br /><span className="text-gradient">Jonas de Paula</span></h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#6B7280" }}>Ajudo pessoas a recuperar o movimento, a confiança e a qualidade de vida. Acredito que dor crônica não precisa ser companhia permanente — ela tem causa, e tem solução.</p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#6B7280" }}>Meu trabalho é unir avaliação criteriosa, técnicas modernas de fisioterapia e um acompanhamento próximo, para que você volte a fazer o que ama, sem limitações.</p>
            <span className="block text-xs font-semibold tracking-wider mb-6" style={{ color: "#9CA3AF" }}>CREFITO-4/439517-F</span>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand !text-sm"><Phone className="w-4 h-4" />Falar com Jonas</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="py-14 md:py-16" style={{ background: "#FAFBFC" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <div className="relative">
            <span className="text-6xl md:text-8xl font-extrabold leading-none block" style={{ color: "rgba(49,184,210,0.08)", fontFamily: "'Sora', sans-serif" }}>&ldquo;</span>
            <p className="text-xl md:text-2xl font-medium leading-relaxed -mt-8 md:-mt-12" style={{ fontFamily: "'Sora', sans-serif", color: "#374151" }}>Meu compromisso é devolver a você aquilo que a dor tirou: <span className="text-gradient font-bold">liberdade, confiança e qualidade de vida.</span></p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full overflow-hidden" style={{ background: "linear-gradient(135deg, #31B8D2, #5ECFE0)" }}>
                <img src="/jonas-portrait.png" alt="Jonas" className="w-full h-full object-cover object-top" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>Jonas de Paula</p>
                <p className="text-[11px]" style={{ color: "#9CA3AF" }}>Fisioterapeuta</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Modalities() {
  const mods = [
    { icon: Home, t: "Atendimento Domiciliar", d: "Receba a fisioterapia no conforto da sua casa, com toda a estrutura necessária para uma sessão completa e segura. Ideal para pós-cirúrgicos, idosos e quem tem dificuldade de locomoção.", feats: ["Equipamentos levados pelo profissional", "Horários flexíveis", "Mais conforto e privacidade"], loc: null },
    { icon: Activity, t: "Pilates", d: "Aulas de Pilates com acompanhamento individualizado, focadas em fortalecimento, postura e mobilidade — uma poderosa aliada da fisioterapia para resultados duradouros.", feats: ["Turmas reduzidas", "Equipamentos completos", "Plano sob medida para o seu corpo"], loc: "Academia Villa Fitness" },
  ];
  return (
    <section id="modalidades" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal><p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#31B8D2" }}>MODALIDADES</p></Reveal>
        <Reveal delay="delay-1"><h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl md:text-4xl font-extrabold text-center mb-4">Como você pode ser atendido</h2></Reveal>
        <Reveal delay="delay-2"><p className="text-center max-w-xl mx-auto mb-14" style={{ color: "#6B7280" }}>Escolha a modalidade que melhor se encaixa na sua rotina e necessidade.</p></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {mods.map((m, i) => (
            <Reveal key={m.t} delay={i === 0 ? "delay-2" : "delay-3"}>
              <div className="card-service h-full !p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#E8F7FA" }}>
                    <m.icon className="w-5 h-5" style={{ color: "#31B8D2" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>{m.t}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "#6B7280" }}>{m.d}</p>
                {m.loc && <p className="text-xs font-semibold mb-4" style={{ color: "#31B8D2" }}>📍 {m.loc}</p>}
                <ul className="space-y-2 mt-4">
                  {m.feats.map(f => <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#4B5563" }}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#31B8D2" }} />{f}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Quanto tempo dura cada sessão?", a: "Em média 50 minutos, podendo variar conforme o plano terapêutico." },
  { q: "Atende a domicílio?", a: "Sim, oferecemos atendimento em consultório e domiciliar conforme necessidade." },
  { q: "Preciso de pedido médico?", a: "Não é obrigatório. A avaliação inicial define o tratamento ideal para você." },
  { q: "Quantas sessões vou precisar?", a: "Depende do quadro clínico. Meu compromisso é conduzir o seu tratamento com técnica, dedicação e acompanhamento próximo, para que você alcance a melhora no menor tempo possível — respeitando o seu corpo e garantindo resultados duradouros." },
];

function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-20" style={{ background: "#FAFBFC" }}>
      <div className="max-w-3xl mx-auto px-6">
        <Reveal><p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#31B8D2" }}>FAQ</p></Reveal>
        <Reveal delay="delay-1"><h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl md:text-4xl font-extrabold text-center mb-12">Perguntas frequentes</h2></Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={`delay-${i + 1}` as any}>
              <div className={`faq-item ${active === i ? "active" : ""}`}>
                <button className="w-full flex items-center justify-between p-5 text-left gap-4" onClick={() => setActive(active === i ? null : i)}>
                  <span className="font-semibold text-[15px]" style={{ fontFamily: "'Sora', sans-serif" }}>{f.q}</span>
                  {active === i ? <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "#31B8D2" }} /> : <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "#9CA3AF" }} />}
                </button>
                <div style={{ maxHeight: active === i ? "200px" : "0", opacity: active === i ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease", padding: active === i ? "0 20px 20px" : "0 20px" }} className="overflow-hidden">
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-0">
      <Reveal>
        <div className="w-full px-6 py-20 md:px-16 md:py-28 text-center" style={{ background: "linear-gradient(135deg, #31B8D2 0%, #5ECFE0 50%, #31B8D2 100%)" }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl md:text-4xl font-extrabold text-white mb-4">Dê o primeiro passo para<br />viver sem dor</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">Sua dor tem solução, e ela começa com uma avaliação. Agende agora e descubra um caminho personalizado para a sua recuperação.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-white font-semibold text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ color: "#31B8D2", fontFamily: "'Sora', sans-serif" }}><Phone className="w-5 h-5" />Agendar minha avaliação</a>
          <p className="text-white/60 text-sm mt-6">Atendimento domiciliar e Pilates na Academia Villa Fitness</p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/logo-jonas.svg" alt="Jonas de Paula" className="h-20 md:h-24 w-auto opacity-70" />
        <div className="text-center md:text-right">
          <p className="text-[11px] font-semibold tracking-wider" style={{ color: "#9CA3AF" }}>CREFITO-4/439517-F</p>
          <p className="text-[11px] mt-1" style={{ color: "#D1D5DB" }}>© 2026 Jonas de Paula — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
      <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

export default function PremiumLanding() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, rgba(49,184,210,0.08) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 50%, rgba(49,184,210,0.06) 80%, rgba(49,184,210,0.1) 100%)' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Treatment />
      <About />
      <Quote />
      <Modalities />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
