'use client';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/site-config';

export function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#inicio" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Andriatto & Co. — Início"><img src="/logo.jpg" width="176" height="151" alt="Andriatto & Co." fetchPriority={footer ? 'auto' : 'high'} /></a>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-15% 0px -60% 0px' });
    navigation.forEach(({ href }) => { const el = document.querySelector(href); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const close = () => { setOpen(false); toggle.current?.focus(); };
    const keys = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        const links = menu.current?.querySelectorAll<HTMLAnchorElement>('a');
        if (!links?.length) return;
        const first = toggle.current, last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    const resize = () => { if (window.innerWidth > 1000) close(); };
    window.addEventListener('keydown', keys); window.addEventListener('resize', resize);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', keys); window.removeEventListener('resize', resize); };
  }, [open]);
  return <header className="header"><div className="header-inner"><Brand /><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.href} href={item.href} aria-current={active === item.href.slice(1) ? 'location' : undefined}>{item.label}</a>)}</nav><a className="button header-cta" href="#contato">Conversar sobre um projeto</a><button className="menu-toggle" ref={toggle} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button></div><div ref={menu} id="mobile-menu" className="mobile-menu" hidden={!open}><nav aria-label="Navegação mobile">{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="button button-gold" href="#contato" onClick={() => setOpen(false)}>Conversar sobre um projeto</a></nav></div></header>;
}
export function MotionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    let observer: IntersectionObserver | undefined;
    if (!reduced.matches) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer?.unobserve(entry.target); } }), { threshold: 0.08 });
      elements.forEach(el => { el.classList.add('will-reveal'); observer?.observe(el); });
    }
    let frame = 0;
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--page-progress', String(total > 0 ? window.scrollY / total : 0));
      const method = document.getElementById('method-steps');
      if (method) { const rect = method.getBoundingClientRect(); document.documentElement.style.setProperty('--method-progress', String(Math.max(0, Math.min(1, (window.innerHeight * 0.85 - rect.top) / (rect.height * 0.8))))); }
      frame = 0;
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const change = () => { if (reduced.matches) elements.forEach(el => el.classList.add('visible')); };
    update(); window.addEventListener('scroll', scroll, { passive: true }); window.addEventListener('resize', scroll); reduced.addEventListener('change', change);
    return () => { observer?.disconnect(); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); reduced.removeEventListener('change', change); cancelAnimationFrame(frame); };
  }, []);
  return <div className="reading-progress" aria-hidden="true" />;
}
export function ContactForm() {
  const [message, setMessage] = useState('');
  const [fallback, setFallback] = useState('');
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (values.website) return;
    const name = String(values.name || '').trim();
    const body = String(values.message || '').trim();
    if (!name || body.length < 10) { setMessage('Informe seu nome e uma mensagem com pelo menos 10 caracteres.'); return; }
    const text = `Olá! Gostaria de conversar sobre um projeto com a Andriatto & Co.\n\nNome: ${name}\nEmpresa: ${String(values.company || '').trim() || 'Não informada'}\nE-mail: ${values.email}\nAssunto: ${values.subject}\n\n${body}`;
    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    setFallback(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    setMessage('Sua mensagem está pronta. Revise e confirme o envio no WhatsApp.');
  }
  return <form className="contact-form" onSubmit={submit} aria-label="Contato sobre um projeto"><div className="field-row"><label>Nome <span>*</span><input name="name" autoComplete="name" placeholder="Seu nome" required maxLength={120} /></label><label>Empresa<input name="company" autoComplete="organization" placeholder="Nome do seu negócio" maxLength={160} /></label></div><div className="field-row"><label>E-mail <span>*</span><input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" required maxLength={254} /></label><label>Assunto <span>*</span><select name="subject" required defaultValue=""><option value="" disabled>Como podemos ajudar?</option><option>Estruturação de negócios</option><option>Gestão de processos</option><option>Indicadores e estratégia</option><option>Governança de projetos</option><option>Outro assunto</option></select></label></div><label>Mensagem <span>*</span><textarea name="message" placeholder="Conte um pouco sobre o seu cenário e o que precisa evoluir." rows={4} required minLength={10} maxLength={1500} /></label><div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><div className="form-bottom"><p>Você revisa e envia no WhatsApp.<br /><span>* Campos obrigatórios.</span></p><button className="button button-navy" type="submit" aria-describedby="form-status">Continuar no WhatsApp</button></div><p className="form-privacy">Ao continuar, os dados preenchidos serão incluídos na mensagem aberta no WhatsApp. Nenhuma mensagem é enviada automaticamente.</p><p id="form-status" className="form-status" role="status" aria-live="polite">{message}</p>{fallback && <a className="whatsapp-fallback" href={fallback} target="_blank" rel="noopener noreferrer">Se o WhatsApp não abriu, clique aqui para continuar.</a>}</form>;
}
