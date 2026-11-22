import { Blocks, Workflow, ChartNoAxesCombined, ScanLine, Check, Plus } from 'lucide-react';
import { Brand, Header, MotionEffects, ContactForm } from '@/components/interactive';
import { navigation, siteConfig } from '@/lib/site-config';

const services = [
  { icon: Blocks, title: 'Estruturação de negócios', text: 'Da validação de mercado à construção do MVP, organizando entregáveis, fornecedores de tecnologia e modelos de receita.', tag: 'DO CONCEITO À OPERAÇÃO' },
  { icon: Workflow, title: 'Gestão de processos', text: 'Redesenho de processos e organização operacional para simplificar rotinas, aumentar eficiência e melhorar a execução.', tag: 'MENOS FRICÇÃO. MAIS FLUIDEZ.' },
  { icon: ChartNoAxesCombined, title: 'Indicadores e estratégia', text: 'Implantação de indicadores de gestão e desdobramento de metas por área, conectando planejamento estratégico à operação.', tag: 'CLAREZA PARA DECIDIR' },
  { icon: ScanLine, title: 'Governança de projetos', text: 'Definição de critérios de priorização, marcos de acompanhamento e critérios de aceite para dar previsibilidade às entregas.', tag: 'DIREÇÃO PARA ENTREGAR' },
];

const experiences = [
  ['Estruturação de startups', 'Estruturação da Concept Brains e da Watch Safe desde o início, passando pela validação de mercado, construção do MVP, roadmap de entregáveis, seleção de fornecedores de tecnologia e definição do modelo de receita.', 'VALIDAÇÃO · MVP · ROADMAP'],
  ['Indicadores de gestão', 'Implantação de indicadores e desdobramento de metas por área, conectando objetivos estratégicos à execução operacional.', 'INDICADORES · METAS · EXECUÇÃO'],
  ['Inteligência de mercado', 'Condução de análise de mercado, definição de público-alvo e construção de régua de comunicação por stakeholder para reporte de evolução.', 'MERCADO · PÚBLICO · COMUNICAÇÃO'],
  ['Governança de projetos', 'Estruturação de critérios de priorização, marcos de acompanhamento e critérios de aceite.', 'PRIORIZAÇÃO · MARCOS · ENTREGAS'],
];

const steps = [
  ['Diagnóstico', 'Entendimento do cenário atual, identificação de gargalos e oportunidades.'],
  ['Estruturação', 'Desenho de processos, definição de prioridades, indicadores e responsabilidades.'],
  ['Implementação', 'Organização das entregas, acompanhamento de projetos e coordenação das iniciativas.'],
  ['Evolução', 'Monitoramento dos indicadores, avaliação de resultados e ajustes operacionais.'],
];

const clientLogos = [
  {
    name: 'Rede Ápice',
    role: 'Rede de Educação Básica',
    badge: 'GESTÃO & PROCESSOS',
    logo: '/logo-rede-apice.png',
    alt: 'Logo Rede Ápice de Educação',
    type: 'png'
  },
  {
    name: 'Concept Brains',
    role: 'Venture & Tech Ecosystem',
    badge: 'VALIDAÇÃO & MVP',
    logo: '/logo-concept-brains.svg',
    alt: 'Logo Concept Brains',
    type: 'svg'
  },
  {
    name: 'Watch Safe',
    role: 'Security & Tech Platform',
    badge: 'ESTRUTURAÇÃO & PRODUTO',
    logo: '/logo-watch-safe.svg',
    alt: 'Logo Watch Safe',
    type: 'svg'
  },
  {
    name: '2X Capital',
    role: 'Reestruturação & Finanças',
    badge: 'POSIÇÃO EXECUTIVA',
    logo: '/logo-2x-capital.svg',
    alt: 'Logo 2X Capital',
    type: 'svg'
  }
];

function Geometry({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`geometry ${compact ? 'compact' : ''}`} aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="axis axis-x" />
      <div className="axis axis-y" />
      <svg className="geometric-mark" viewBox="0 0 300 300" fill="none">
        <defs>
          <linearGradient id={compact ? 'gold-small' : 'gold'} x1="35" y1="40" x2="270" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E0B84F" />
            <stop offset=".5" stopColor="#C99A32" />
            <stop offset="1" stopColor="#8A661F" />
          </linearGradient>
        </defs>
        <path d="M150 27 273 150 150 273 27 150Z" stroke="#C99A32" strokeWidth=".7" />
        <g fill={`url(#${compact ? 'gold-small' : 'gold'})`} stroke="#0B1120" strokeWidth="2">
          <path d="M150 36 209 95 150 154 115 119 174 60Z" />
          <path d="M214 100 264 150 205 209 170 174 229 115Z" />
          <path d="M200 214 150 264 91 205 126 170 185 229Z" />
          <path d="M86 200 36 150 95 91 130 126 71 185Z" />
        </g>
        <path d="M150 83 217 150 150 217 83 150Z" stroke="#E0B84F" strokeWidth=".5" opacity=".45" />
      </svg>
      <span className="geometry-label label-top">VISÃO ESTRATÉGICA</span>
      <span className="geometry-label label-bottom">PRECISÃO NA EXECUÇÃO</span>
      <span className="cross cross-a">+</span>
      <span className="cross cross-b">+</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <MotionEffects />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        {/* HERO SECTION */}
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-enter">CONSULTORIA INDEPENDENTE · PROCESSOS &amp; PROJETOS</p>
              <h1 className="hero-enter">
                Transformando<br className="desktop-break" /> complexidade<br className="desktop-break" /> operacional em<br className="desktop-break" /> <span>execução estruturada.</span>
              </h1>
              <p className="hero-description hero-enter">{siteConfig.description}</p>
              <div className="hero-actions hero-enter">
                <a className="button button-gold" href="#atuacao">Conheça nossa atuação</a>
                <a className="text-link" href="#contato">Vamos conversar</a>
              </div>
            </div>
            <div className="hero-art hero-enter">
              <Geometry />
            </div>
          </div>
          <div className="container hero-bottom">
            <span>MÉTODO. CLAREZA. EVOLUÇÃO.</span>
            <a href="#posicionamento">
              Explore a Andriatto &amp; Co.<span className="scroll-line" aria-hidden="true" />
            </a>
            <span className="hero-coordinate">ESTRATÉGIA + EXECUÇÃO</span>
          </div>
        </section>

        {/* 01 / POSICIONAMENTO & VISÃO */}
        <section id="posicionamento" className="position section-light">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>O QUE NOS MOVE</span>
              <span>01 / VISÃO</span>
            </div>
            <div className="position-grid">
              <div data-reveal>
                <h2>Estratégia que<br /> se transforma<br /> em <em>execução.</em></h2>
                <p className="body-copy">
                  A Andriatto &amp; Co. foi fundada para aplicar método estruturado de redesenho de processos e gestão de projetos em negócios que precisam ganhar eficiência sem aumentar sua estrutura.
                </p>
              </div>
              <div className="position-right" data-reveal>
                <div className="process-art" aria-hidden="true">
                  <div /><div /><div />
                  <span>CLAREZA</span>
                  <span>MÉTODO</span>
                  <span>EXECUÇÃO</span>
                </div>
                <div className="pillars">
                  {['Estruturação de negócios', 'Eficiência operacional', 'Governança e execução'].map((text, i) => (
                    <div key={text}>
                      <span>0{i + 1}</span>
                      <h3>{text}</h3>
                      <Plus size={18} strokeWidth={1} aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture showcase photo */}
            <div className="position-showcase" data-reveal>
              <figure className="showcase-banner">
                <img
                  src="/photo-architecture.jpg"
                  alt="Consultoria estruturada e ambiente de negócios em São Paulo"
                  width="1280"
                  height="640"
                />
                <figcaption>
                  <div>
                    <span className="mini-label">MÉTODO &amp; DISCIPLINA OPERACIONAL</span>
                    <p>Consultoria focada em eficiência operacional, redesenho de processos e gestão de entregas.</p>
                  </div>
                  <span className="showcase-tag">SÃO PAULO · SP</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 02 / FRENTES DE ATUAÇÃO */}
        <section id="atuacao" className="services section-dark">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>FRENTES DE ATUAÇÃO</span>
              <span>02 / ESPECIALIDADES</span>
            </div>
            <div className="section-heading" data-reveal>
              <h2>Estrutura para avançar.<br /><em>Método para evoluir.</em></h2>
              <p>Quatro frentes conectadas por um propósito:<br className="desktop-break" /> transformar complexidade em entregas objetivas.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, text, tag }, i) => (
                <article className="service-card" key={title} data-reveal style={{ '--delay': `${i * 70}ms` } as React.CSSProperties}>
                  <div className="card-top">
                    <Icon size={30} strokeWidth={1.1} aria-hidden="true" />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="card-bottom">
                    {tag}
                    <span aria-hidden="true">+</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 / EXPERIÊNCIA & ENTREGAS */}
        <section id="experiencia" className="experience section-light">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>EXPERIÊNCIA E ENTREGAS</span>
              <span>03 / NA PRÁTICA</span>
            </div>
            <div className="section-heading" data-reveal>
              <h2>Da concepção<br /> à <em>execução.</em></h2>
              <p>Visão de negócio e profundidade operacional.<br /> Experiência que se traduz em estrutura.</p>
            </div>
            <div className="experience-list">
              {experiences.map(([title, text, tag], i) => (
                <article className="experience-row" key={title} data-reveal>
                  <span className="experience-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <div>
                    <p>{text}</p>
                    <span className="mini-label">{tag}</span>
                  </div>
                  <Plus size={20} strokeWidth={1} aria-hidden="true" />
                </article>
              ))}
            </div>

            {/* Editorial Feature Banner: Boardroom & Strategic Execution */}
            <div className="editorial-feature-card" data-reveal>
              <div className="editorial-feature-image">
                <img
                  src="/photo-boardroom.jpg"
                  alt="Comitê executivo e governança de projetos em andamento"
                  width="1200"
                  height="680"
                />
              </div>
              <div className="editorial-feature-content">
                <span className="mini-label">MÉTODO EM AÇÃO</span>
                <h3>Governança de ponta a ponta: do diagnóstico ao comitê executivo</h3>
                <p>
                  Acompanhamento próximo em cada decisão operacional, assegurando que metas estratégicas se convertam em entregas mensuráveis, sem ruídos e com previsibilidade.
                </p>
              </div>
            </div>

            {/* COMPANY LOGOS SHOWCASE */}
            <div className="experience-showcase" data-reveal>
              <div className="experience-context-header">
                <span className="mini-label">TRAJETÓRIA &amp; EXPERIÊNCIA CORPORATIVA</span>
                <h3>Empresas estruturadas e atuação formal corporativa</h3>
                <p className="context-desc">
                  Vivência prática na estruturação de startups desde o estágio embrionário até posições de liderança em grupos consolidados.
                </p>
              </div>
              <div className="company-logo-grid">
                {clientLogos.map(item => (
                  <div className="company-logo-card" key={item.name}>
                    <div className="logo-img-wrapper">
                      <img
                        src={item.logo}
                        alt={item.alt}
                        width="160"
                        height="55"
                      />
                    </div>
                    <div className="company-info">
                      <span className="company-name">{item.name}</span>
                      <span className="company-role">{item.role}</span>
                      <span className="company-badge">{item.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 / METODOLOGIA */}
        <section id="metodologia" className="method section-dark">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>NOSSA METODOLOGIA</span>
              <span>04 / O CAMINHO</span>
            </div>
            <div className="section-heading" data-reveal>
              <h2>Método para transformar<br /> planos em <em>entregas.</em></h2>
              <p>Um percurso claro, do entendimento do cenário<br className="desktop-break" /> à evolução contínua da operação.</p>
            </div>
            <div className="method-steps" id="method-steps">
              {steps.map(([title, text], i) => (
                <article className="method-step" key={title} data-reveal style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}>
                  <span className="step-number">0{i + 1}</span>
                  <div className="step-dot" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="method-note" data-reveal>
              Do primeiro diagnóstico ao próximo ciclo de evolução.
              <span>CONSISTÊNCIA EM CADA ETAPA.</span>
            </p>
          </div>
        </section>

        {/* 05 / MODELO DE ATUAÇÃO */}
        <section className="model section-light" id="modelo">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>MODELO DE ATUAÇÃO</span>
              <span>05 / INDEPENDÊNCIA</span>
            </div>
            <div className="model-grid">
              <figure className="portrait" data-reveal>
                <img
                  src="/bruno.jpg"
                  alt="Retrato de Bruno Andriatto, consultor e fundador da Andriatto & Co."
                  width="400"
                  height="400"
                />
                <figcaption>
                  <span>BRUNO ANDRIATTO</span>
                  <span>Fundador · Visão estratégica e envolvimento direto.</span>
                </figcaption>
                <span className="portrait-corner" aria-hidden="true" />
              </figure>
              <div className="model-copy" data-reveal>
                <h2>Atuação independente.<br /> Escopo definido.<br /><em>Execução estruturada.</em></h2>
                <p>
                  A Andriatto &amp; Co. atua por meio de projetos independentes e de escopo definido, em paralelo a posições formais em empresas. O modelo é direcionado a negócios em estágio inicial ou em reestruturação operacional, com foco em entregas objetivas e evolução estruturada.
                </p>
                <ul>
                  {[
                    'Projetos de escopo definido e metas claras',
                    'Atuação independente com envolvimento direto',
                    'Foco em negócios em estágio inicial e transição',
                    'Reestruturação operacional e ganho de eficiência',
                    'Entregas orientadas por método e cadência'
                  ].map(item => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING BANNER */}
        <section className="closing section-dark">
          <div className="container closing-inner">
            <div className="closing-art">
              <Geometry compact />
            </div>
            <div className="closing-copy" data-reveal>
              <p className="eyebrow">O PRÓXIMO PASSO COMEÇA COM CLAREZA</p>
              <h2>Seu próximo estágio exige<br /> mais do que planejamento.<br /><em>Exige execução.</em></h2>
              <p>Vamos estruturar o próximo passo do seu negócio.</p>
              <a className="button button-gold" href="#contato">Converse sobre seu projeto</a>
            </div>
          </div>
        </section>

        {/* 06 / CONTATO */}
        <section id="contato" className="contact section-light">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>VAMOS CONVERSAR</span>
              <span>06 / CONTATO</span>
            </div>
            <div className="contact-grid">
              <div className="contact-copy" data-reveal>
                <h2>Todo avanço<br /> começa com uma<br /><em>boa conversa.</em></h2>
                <p>Compartilhe seu momento e os desafios do seu negócio. Vamos entender o que precisa acontecer a seguir.</p>
                
                {/* Executive Advisory Photo Card */}
                <div className="contact-image-card">
                  <img
                    src="/photo-advisory.jpg"
                    alt="Conversa estratégica e diagnóstico consultivo"
                    width="560"
                    height="320"
                  />
                  <figcaption>
                    <span className="mini-label">DIÁLOGO ESTRATÉGICO</span>
                    <span>Projetos com método. Relações com transparência.</span>
                  </figcaption>
                </div>

                <div className="contact-details">
                  <span className="mini-label">CONTATO DIRETO</span>
                  {siteConfig.contact.phone && (
                    <a href={`tel:+${siteConfig.contact.whatsapp}`}>{siteConfig.contact.phone}</a>
                  )}
                  {siteConfig.contact.email && (
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  )}
                  <span>Atendimento dedicado para novos projetos e diagnósticos.</span>
                </div>
              </div>
              <div data-reveal>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Brand footer />
              <p>Consultoria independente.<br />Processos, projetos e execução estruturada.</p>
            </div>
            <nav aria-label="Navegação do rodapé">
              {navigation.map(item => (
                <a href={item.href} key={item.href}>{item.label}</a>
              ))}
            </nav>
            <div className="footer-contact">
              <span className="mini-label">VAMOS CONSTRUIR O PRÓXIMO PASSO.</span>
              <a href="#contato">Converse sobre seu projeto</a>
              <a href={`tel:+${siteConfig.contact.whatsapp}`}>{siteConfig.contact.phone}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Andriatto &amp; Co. Todos os direitos reservados.</span>
            <span>INDEPENDÊNCIA NO PENSAR. PRECISÃO NO FAZER.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
