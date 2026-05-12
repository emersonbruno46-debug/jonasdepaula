import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Share2, 
  Globe, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Instagram,
  Linkedin,
  Twitter,
  MousePointer2,
  Menu,
  X
} from "lucide-react";
import { PremiumButton } from "@/components/premium/PremiumButton";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { LogoPremium } from "@/components/premium/LogoPremium";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  })
};

const PremiumLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen premium-dark bg-[#0a0a0a] text-white selection:bg-yellow-500/30 overflow-hidden relative">
      {/* Background Mesh Image */}
      <div className="fixed inset-0 z-0 opacity-40 mix-blend-soft-light scale-110">
        <img 
          src="/premium-bg.png" 
          alt="Premium Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cinematic Flares Layer */}
      <div className="fixed inset-0 z-[1] opacity-60 mix-blend-screen pointer-events-none">
        <img 
          src="/flares-bg.png" 
          alt="Cinematic Flares" 
          className="w-full h-full object-cover scale-125"
        />
      </div>

      {/* Background Noise & Lighting */}
      <div className="fixed inset-0 noise-bg z-[2] pointer-events-none" />

      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-600/5 blur-[150px] z-[2]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/5 blur-[150px] z-[2]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[60] border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <LogoPremium />
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Serviços", "Portfólio", "Processo", "Depoimentos"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#FFDE21] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <PremiumButton className="hidden md:flex">Falar com Consultor</PremiumButton>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0
          }}
          className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
        >
          <div className="flex flex-col p-8 gap-6">
            {["Serviços", "Portfólio", "Processo", "Depoimentos"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-black uppercase tracking-widest text-white/70 hover:text-[#FFDE21]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <PremiumButton className="w-full justify-center py-4">Falar com Consultor</PremiumButton>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 min-h-screen flex items-center z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#FFDE21] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFDE21]">Agência Boutique de Design</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                Transformamos sua <br /> 
                <span className="text-[#FFDE21] drop-shadow-[0_0_30px_rgba(255,222,33,0.3)]">Presença Digital</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl font-medium">
                Design estratégico para quem busca se destacar no mercado premium. Criamos identidades que vendem autoridade.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <PremiumButton className="px-10 py-5 text-lg group">
                  Iniciar meu Projeto 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </PremiumButton>
                <div className="flex items-center gap-4 px-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-zinc-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-white">+200 Marcas</p>
                    <p className="text-white/40 text-[10px] uppercase font-black tracking-widest">Transformadas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Content - Larger Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:scale-110 xl:scale-125 origin-center lg:translate-x-10"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/hero-image.png" 
                  alt="Ideal Solutions Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 glass-premium p-6 rounded-3xl border-white/10 hidden md:block"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-[#FFDE21] rounded-2xl flex items-center justify-center">
                      <Zap className="text-black w-6 h-6 fill-current" />
                   </div>
                   <div>
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest leading-none mb-1">Performance</p>
                      <p className="text-xl font-black text-white">100%</p>
                   </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 z-20 glass-premium p-6 rounded-3xl border-white/10 hidden md:block"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                      <Star className="text-black w-6 h-6 fill-current" />
                   </div>
                   <div>
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest leading-none mb-1">Qualidade</p>
                      <p className="text-xl font-black text-white">Premium</p>
                   </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-yellow-500/20 blur-[120px] -z-10 rounded-full scale-75" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">Nossas <br /> <span className="text-[#FFDE21]">Soluções</span></h2>
              <p className="text-white/60 text-lg md:text-xl font-medium">Especialistas em transformar sua presença digital através de um ecossistema de design completo.</p>
            </div>
            <div className="h-px flex-1 bg-white/10 mx-10 hidden lg:block mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Identidade Visual", 
                desc: "Logotipos, paletas de cores e manuais de marca que transmitem autoridade absoluta.",
                icon: Palette,
              },
              { 
                title: "Social Media", 
                desc: "Kits de artes para Instagram e LinkedIn que engajam e convertem seguidores em clientes.",
                icon: Share2,
              },
              { 
                title: "Web & Landing Pages", 
                desc: "Sites modernos e otimizados para vendas com foco total em UX/UI e conversão.",
                icon: Globe,
              },
              { 
                title: "Anúncios Criativos", 
                desc: "Artes estratégicas para tráfego pago que chamam a atenção e reduzem seu CPC.",
                icon: MousePointer2,
              }
            ].map((s, i) => (
              <PremiumCard key={i} delay={i * 0.1} className="bg-black/20 border-white/5 hover:border-[#FFDE21]/30">
                <div className="w-14 h-14 bg-[#FFDE21]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFDE21] transition-all duration-500">
                  <s.icon className="w-7 h-7 text-[#FFDE21] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-black mb-4 text-white uppercase tracking-tight">{s.title}</h3>
                <p className="text-white/50 leading-relaxed font-medium">{s.desc}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfólio" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">Impacto em <span className="text-[#FFDE21]">Números</span></h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">Projetos que elevaram marcas ao próximo nível de autoridade e reconhecimento.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                label: "Engenharia Civil", 
                title: "Conteúdo Estratégico", 
                tag: "WELIS",
                img: "/portfolio-welis.png",
                desc: "Posicionamento visual e autoridade no Instagram para engenheiro especialista."
              },
              { 
                label: "Fast Food Urbano", 
                title: "Identidade Jovem", 
                tag: "CHOP'S",
                img: "/portfolio-chops.jpg",
                desc: "Marca impactante e memorável para atrair público jovem do segmento food."
              },
              { 
                label: "Beleza & Bem-estar", 
                title: "Design Sofisticado", 
                tag: "GABI",
                img: "/portfolio-gabi.png",
                desc: "Marca elegante e memorável com foco no público feminino de alto padrão."
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40"
              >
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-3 py-1 bg-[#FFDE21] text-black rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    {p.tag}
                  </span>
                  <p className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-1">{p.label}</p>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-3">{p.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px]" />
            
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-premium-gradient">Pronto para elevar <br /> sua marca?</h2>
            <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto">
              Seu próximo grande passo começa com um design que faz a diferença. Vamos conversar?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <PremiumButton className="px-12 py-6 text-xl">
                Agendar Consultoria Grátis
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">Depoimentos de <span className="text-[#FFDE21]">Clientes</span></h2>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-medium">Não acredite apenas no que dizemos. Veja o que nossos clientes têm a dizer sobre trabalhar conosco.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gabriela Gomes",
                role: "CEO, Gabi Cosméticos",
                img: "/testimonial-1.png",
                text: "A Ideal Solutions criou a logomarca da minha loja, a Gabi Cosméticos, e também desenvolveu toda a paleta de cores. Ficou tudo do jeitinho que eu imaginei — moderno, profissional e com a cara da minha marca. Com isso, consegui deixar a identidade visual da loja muito mais forte e passar mais credibilidade pros clientes."
              },
              {
                name: "Jonas Santos",
                role: "CEO, Chop's Burger",
                img: "/testimonial-2.png",
                text: "Agradeço por sua dedicação e pelo excelente trabalho realizado. Agradeço por ser uma empresa tão confiável e por sempre demonstrar interesse no sucesso de todos! Nós da chop's burger estamos muito satisfeitos com os resultados e indicamos a ideal solutions."
              },
              {
                name: "Wells Josue",
                role: "Engenheiro Especialista",
                img: "/testimonial-3.png",
                text: "A estratégia para redes sociais mudou completamente nossa presença online. Antes, eu sentia que estávamos invisíveis, mas agora nossa marca é percebida de forma muito mais profissional e atrativa. Tive um engajamento e crescimento imediato, as pessoas começaram a interagir. Com certeza foi um investimento que trouxe resultado real."
              }
            ].map((t, i) => (
              <PremiumCard key={i} delay={i * 0.1} className="bg-black/40 border-white/5 flex flex-col items-center text-center p-10">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full border-2 border-[#FFDE21] p-1">
                    <img src={`${t.img}?v=${Date.now()}`} alt={t.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FFDE21] rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-black fill-current" />
                  </div>
                </div>
                <p className="text-white/70 italic mb-8 leading-relaxed font-medium">"{t.text}"</p>
                <div>
                  <h4 className="text-[#FFDE21] font-black uppercase tracking-widest text-sm">{t.name}</h4>
                  <p className="text-white/30 text-[10px] uppercase font-black tracking-[0.2em] mt-1">{t.role}</p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">Escolha seu <span className="text-[#FFDE21]">Plano</span></h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">Escolha o plano perfeito para as necessidades do seu negócio. Todos os planos incluem nossa abordagem criativa exclusiva.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Plan 1 */}
            <PremiumCard className="bg-black/20 border-white/5 p-12">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Padrão</h3>
              <p className="text-[#FFDE21] text-3xl font-black mb-8">Sob consulta</p>
              <div className="space-y-4 mb-10">
                {[
                  "3 posts semanais (card + legenda)",
                  "1 reel semanal",
                  "Sem gestão de perfil"
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFDE21]" />
                    <span className="text-white/60 font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <PremiumButton variant="outline" className="w-full py-4 text-sm font-black uppercase tracking-widest">Quero Começar Agora</PremiumButton>
            </PremiumCard>

            {/* Plan 2 - Featured */}
            <PremiumCard className="bg-[#FFDE21] border-transparent p-12 lg:scale-110 relative z-20 shadow-[0_0_50px_rgba(255,222,33,0.2)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#FFDE21] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Mais Popular
              </div>
              <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-2">Premium</h3>
              <p className="text-black/80 text-3xl font-black mb-8">Sob consulta</p>
              <div className="space-y-4 mb-10">
                {[
                  "3 posts semanais (card + legenda)",
                  "1 reel semanal",
                  "Gestão de perfil"
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black" />
                    <span className="text-black/80 font-black">{f}</span>
                  </div>
                ))}
              </div>
              <PremiumButton className="w-full py-4 bg-black text-[#FFDE21] hover:bg-zinc-900 border-transparent text-sm font-black uppercase tracking-widest">Quero Começar Agora</PremiumButton>
            </PremiumCard>

            {/* Plan 3 */}
            <PremiumCard className="bg-black/20 border-white/5 p-12">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Avulsos</h3>
              <p className="text-[#FFDE21] text-3xl font-black mb-8">Sob consulta</p>
              <div className="space-y-4 mb-10">
                {[
                  "Logo e Identidade visual",
                  "Projetos personalizados",
                  "Consultoria de marca"
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFDE21]" />
                    <span className="text-white/60 font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <PremiumButton variant="outline" className="w-full py-4 text-sm font-black uppercase tracking-widest">Quero Começar Agora</PremiumButton>
            </PremiumCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <LogoPremium />
            <div className="flex gap-8">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-white/20 text-sm font-medium">
              (c) {new Date().getFullYear()} Ideal Solutions. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumLanding;
