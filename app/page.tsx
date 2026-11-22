import { Blocks, Workflow, ChartNoAxesCombined, ScanLine, Check, Plus, ArrowUpRight } from 'lucide-react';
import { Brand, Header, MotionEffects, ContactForm } from '@/components/interactive';
import { navigation, siteConfig } from '@/lib/site-config';

const services = [
  {
    icon: Blocks,
    title: 'Estruturação de novos negócios & startups',
    lead: 'Da modelagem e validação de hipóteses à tração da operação.',
    text: 'Apoiamos fundadores, executivos e investidores na transformação de conceitos em empresas organizadas e escaláveis. Estruturamos desde a validação de proposta de valor e público-alvo até a homologação de fornecedores tecnológicos, desenho do MVP e definição de modelos de receita sustentáveis.',
    deliverables: [
      'Validação de hipóteses, mercado e público-alvo',
      'Definição de escopo, arquitetura e roadmap do MVP',
      'Seleção, homologação e gestão de fornecedores tech',
      'Modelagem de monetização, precificação e unit economics'
    ],
    tag: 'DO CONCEITO À OPERAÇÃO'
  },
  {
    icon: Workflow,
    title: 'Redesenho e gestão de processos',
    lead: 'Eliminação de gargalos, rotinas simplificadas e fluidez entre áreas.',
    text: 'Mapeamento profundo e reengenharia de fluxos operacionais para eliminar atritos, retrabalho e dependência excessiva de pessoas-chave. Criamos rotinas claras, matriz de responsabilidades e procedimentos operacionais padronizados (SOPs) que garantem consistência sem inchar a equipe.',
    deliverables: [
      'Mapeamento de jornada operacional ponta a ponta',
      'Matriz de responsabilidades (RACI) e SLAs internos',
      'Padronização de rotinas e procedimentos (SOPs)',
      'Otimização de handovers e eliminação de desperdícios'
    ],
    tag: 'MENOS FRICÇÃO. MAIS FLUIDEZ.'
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Indicadores de gestão e estratégia',
    lead: 'Conectando o planejamento executivo à disciplina diária.',
    text: 'Implantação de painéis de controle, metas em cascata e rotinas de acompanhamento baseadas em dados confiáveis. Traduzimos metas estratégicas globais em indicadores tangíveis para cada setor, capacitando a liderança a identificar desvios precocemente e tomar decisões com clareza.',
    deliverables: [
      'Construção de painéis executivos e operacionais (dashboards)',
      'Desdobramento de metas por área em cascata (OKRs / KPIs)',
      'Rituais de acompanhamento e cadência de governança',
      'Análise de desvios e planos de ação corretivos'
    ],
    tag: 'CLAREZA PARA DECIDIR'
  },
  {
    icon: ScanLine,
    title: 'Governança e entrega de projetos',
    lead: 'Previsibilidade, marcos rigorosos e cadência consistente.',
    text: 'Estruturação de metodologias práticas de condução de projetos adaptadas à maturidade do negócio. Estabelecemos critérios claros de priorização de backlog, critérios formais de aceite e comitês de reporte com transparência para assegurar entregas no prazo e no escopo contratado.',
    deliverables: [
      'Critérios formais de priorização e gestão de backlog',
      'Marcos de acompanhamento com critérios de aceite',
      'Comitês de reporte executivo e transparência por stakeholder',
      'Gestão ativa de riscos, prazos e entregáveis críticos'
    ],
    tag: 'DIREÇÃO PARA ENTREGAR'
  },
];

const experiences = [
  [
    'Estruturação de startups do zero',
    'Estruturação integral da Concept Brains e da Watch Safe desde o estágio embrionário. Condução da validação de mercado, desenho de requisitos funcionais para o MVP, contratação e coordenação de squads de tecnologia, além da definição de modelo de receita e precificação.',
    'VALIDAÇÃO · MVP · ROADMAP'
  ],
  [
    'Indicadores e desdobramento de metas',
    'Implementação de rotinas de gestão por indicadores em empresas de diferentes portes. Desdobramento de objetivos estratégicos da diretoria em metas operacionais por departamento, com rituais semanais de acompanhamento e correção de rota.',
    'INDICADORES · METAS · EXECUÇÃO'
  ],
  [
    'Inteligência de mercado e stakeholders',
    'Condução de análises competitivas, definição de proposta de valor por público-alvo e construção de réguas de comunicação e prestação de contas estruturadas para comitês, acionistas e investidores.',
    'MERCADO · PÚBLICO · COMUNICAÇÃO'
  ],
  [
    'Governança de projetos corporativos',
    'Estruturação de escritórios de projetos (PMO prático) com critérios de aceite formais, mitigação de riscos contratuais e coordenação de iniciativas multifuncionais em paralelo.',
    'PRIORIZAÇÃO · MARCOS · ENTREGAS'
  ],
];

const steps = [
  ['Diagnóstico profundo', 'Imersão no cenário atual, mapeamento de rotinas, identificação de gargalos reais e definição de prioridades imediatas.'],
  ['Estruturação metodológica', 'Desenho de fluxos, definição de critérios de aceite, alocação de responsabilidades e implantação de indicadores de controle.'],
  ['Implementação & Cadência', 'Organização das sprints de entrega, coordenação das iniciativas, acompanhamento próximo e remoção ativa de impedimentos.'],
  ['Evolução & Autonomia', 'Avaliação contínua de resultados, calibração de métricas, transferência de método e autonomia para a operação interna.'],
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

            {/* Editorial process photo card */}
            <div className="position-editorial-card" data-reveal>
              <div className="position-editorial-copy">
                <span className="mini-label">MÉTODO APLICADO</span>
                <h3>Menos reuniões improdutivas.<br />Mais entregas palpáveis.</h3>
                <p>
                  Negócios em fase de crescimento ou reestruturação não precisam de apresentações teóricas de 200 slides. Precisam de processos desenhados na prática, prioridades pactuadas com quem executa e cadência contínua de acompanhamento.
                </p>
                <div className="position-stats-mini">
                  <div>
                    <strong>Foco Operacional</strong>
                    <span>Rotinas reais &amp; eliminação de atrito</span>
                  </div>
                  <div>
                    <strong>Cadência Semanal</strong>
                    <span>Acompanhamento direto e correção de rota</span>
                  </div>
                </div>
              </div>
              <div className="position-editorial-media">
                <img
                  src="/photo-roadmap.jpg"
                  alt="Planejamento de processos, roadmaps e entregas operacionais"
                  width="900"
                  height="480"
                />
              </div>
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
              <p>Quatro frentes conectadas por um propósito:<br className="desktop-break" /> transformar complexidade operacional em entregas objetivas, previsíveis e com impacto direto no resultado.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, lead, text, deliverables, tag }, i) => (
                <article className="service-card" key={title} data-reveal style={{ '--delay': `${i * 70}ms` } as React.CSSProperties}>
                  <div className="card-top">
                    <Icon size={30} strokeWidth={1.1} aria-hidden="true" />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p className="service-lead">{lead}</p>
                  <p className="service-text">{text}</p>
                  <ul className="service-deliverables">
                    {deliverables.map(item => (
                      <li key={item}>
                        <Check size={14} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-bottom">
                    {tag}
                    <span aria-hidden="true">+</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Visual banner for Section 02: Governance & Cross-functional Alignment */}
            <div className="services-visual-banner" data-reveal>
              <div className="services-banner-media">
                <img
                  src="/photo-governance.jpg"
                  alt="Alinhamento estratégico e governança de projetos em andamento"
                  width="900"
                  height="500"
                />
              </div>
              <div className="services-banner-copy">
                <span className="mini-label">SINCRONIA OPERACIONAL</span>
                <h3>Integração real entre processos, indicadores e tecnologia</h3>
                <p>
                  Quando as áreas não operam sob as mesmas métricas, o retrabalho explode e a liderança se desgasta apagando incêndios. Nossa atuação conecta as frentes operacionais: garantindo que as metas de negócio sejam sustentadas por rotinas enxutas, critérios de aceite claros e tecnologia bem dimensionada.
                </p>
                <a className="button button-gold" href="#contato">Converse sobre seu projeto</a>
              </div>
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

        {/* 04 / RESULTADOS & IMPACTO MENSURÁVEL */}
        <section id="resultados" className="results section-light">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>MÉTRICAS &amp; IMPACTO</span>
              <span>04 / RESULTADOS</span>
            </div>

            <div className="section-heading" data-reveal>
              <h2>Impacto mensurável.<br /><em>Eficiência em números.</em></h2>
              <p>
                Método estruturado não é teoria: traduz-se em redução comprovada de gargalos, ganho de capacidade produtiva e previsibilidade de caixa e entregas.
              </p>
            </div>

            {/* Metric Cards Grid */}
            <div className="metrics-grid" data-reveal>
              <div className="metric-card">
                <span className="metric-number">+35%</span>
                <h4>Ganho em Eficiência</h4>
                <p>Redução média no tempo de ciclo operacional e eliminação de retrabalho após o redesenho de processos e rotinas.</p>
              </div>
              <div className="metric-card">
                <span className="metric-number">02</span>
                <h4>Startups Estruturadas</h4>
                <p>Da tese e validação ao MVP funcional, contratação de fornecedores tech e modelo de monetização ativo.</p>
              </div>
              <div className="metric-card">
                <span className="metric-number">100%</span>
                <h4>Visibilidade de Entregas</h4>
                <p>Rastreabilidade de metas por sprint, matriz de priorização e critérios de aceite formais implantados.</p>
              </div>
              <div className="metric-card">
                <span className="metric-number">Zero</span>
                <h4>Inchaço de Estrutura</h4>
                <p>Crescimento de capacidade operacional sem necessidade de contratações desnecessárias ou aumento fixo de custo.</p>
              </div>
            </div>

            {/* Results Editorial Showcase with Photo */}
            <div className="results-feature-card" data-reveal>
              <div className="results-feature-content">
                <span className="mini-label">MÉTODO, CADÊNCIA E EXECUÇÃO</span>
                <h3>Rituais práticos que conectam a estratégia à operação</h3>
                <p>
                  Consultorias tradicionais costumam entregar diagnósticos densos que acabam esquecidos em gavetas. Na Andriatto &amp; Co., nosso foco é a implementação direta: desenhamos rotinas executáveis, desdobramos metas claras por área e estabelecemos comitês de acompanhamento periódico para assegurar que cada iniciativa seja concluída com precisão.
                </p>
                <ul className="results-check-list">
                  <li><Check size={16} aria-hidden="true" /> SLAs internos e procedimentos padronizados (SOPs) que eliminam dependência de indivíduos</li>
                  <li><Check size={16} aria-hidden="true" /> Dashboards e painéis de indicadores em tempo real para tomada de decisão fundamentada</li>
                  <li><Check size={16} aria-hidden="true" /> Envolvimento direto do consultor em todas as etapas, da concepção à entrega final</li>
                </ul>
              </div>
              <figure className="results-feature-image">
                <img
                  src="/photo-analytics.jpg"
                  alt="Alinhamento executivo de resultados, indicadores e metas operacionais"
                  width="1100"
                  height="480"
                />
                <figcaption>
                  <span>DIAGNÓSTICO &amp; PERFORMANCE</span>
                  <span>Acompanhamento sistemático e evolução contínua dos indicadores.</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 05 / METODOLOGIA */}
        <section id="metodologia" className="method section-dark">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>NOSSA METODOLOGIA</span>
              <span>05 / O CAMINHO</span>
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

        {/* 06 / MODELO DE ATUAÇÃO */}
        <section className="model section-light" id="modelo">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>MODELO DE ATUAÇÃO</span>
              <span>06 / INDEPENDÊNCIA</span>
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

        {/* 07 / CONTATO */}
        <section id="contato" className="contact section-light">
          <div className="container">
            <div className="section-label" data-reveal>
              <span>VAMOS CONVERSAR</span>
              <span>07 / CONTATO</span>
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
