import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { server } from './preview.mjs';
await mkdir('qa', {recursive:true});
const browser = await chromium.launch({channel:'msedge',headless:true});
const errors=[];
try {
  const context = await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const page = await context.newPage();
  page.on('pageerror', error=>errors.push(error.message));
  const response=await page.goto('http://127.0.0.1:3000',{waitUntil:'networkidle'});
  assert.equal(response.status(),200);
  assert.equal(await page.locator('h1').count(),1);
  assert.equal(await page.locator('html').getAttribute('lang'),'pt-BR');
  const broken=await page.locator('a[href^="#"]').evaluateAll(links=>links.map(a=>a.getAttribute('href')).filter(href=>!document.getElementById(href.slice(1))));
  assert.deepEqual(broken,[]);
  for (const img of await page.locator('img').all()) { await img.scrollIntoViewIfNeeded(); await img.evaluate(el => el.decode()); }
  await page.evaluate(()=>window.scrollTo(0,0));
  assert.equal(await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete && i.naturalWidth>0)),true);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await page.screenshot({path:'qa/desktop.png',fullPage:true});
  await page.locator('a[href="#contato"]').first().click();
  assert.equal(await page.evaluate(()=>location.hash),'#contato');
  await page.getByRole('button',{name:'Continuar no WhatsApp'}).click();
  assert.equal(await page.locator('input[name="name"]').evaluate(el=>el.validity.valueMissing),true);
  await page.locator('[name="name"]').fill('Teste de navegação');
  await page.locator('[name="company"]').fill('Projeto & Estratégia');
  await page.locator('[name="email"]').fill('teste@example.com');
  await page.locator('[name="subject"]').selectOption('Gestão de processos');
  await page.locator('[name="message"]').fill('Preciso organizar os processos e definir indicadores.');
  await page.evaluate(()=>{window.open=(url)=>{window.__openedUrl=url;return null;};});
  await page.getByRole('button',{name:'Continuar no WhatsApp'}).click();
  const target=new URL(await page.evaluate(()=>window.__openedUrl));
  assert.equal(target.hostname,'wa.me');assert.equal(target.pathname,'/5511985172196');
  const text=target.searchParams.get('text');
  for(const part of ['Teste de navegação','Projeto & Estratégia','teste@example.com','Gestão de processos','Preciso organizar']) assert.ok(text.includes(part));
  assert.ok(text.includes('\n\nNome:'));
  assert.ok(await page.getByRole('status').innerText().then(text=>text.includes('confirme o envio')));
  assert.equal(await page.locator('.whatsapp-fallback').getAttribute('href'),target.toString());
  for(const width of [320,375,390,768,1024,1440]) {
    await page.setViewportSize({width,height:900});
    await page.goto('http://127.0.0.1:3000',{waitUntil:'networkidle'});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`overflow at ${width}`);
    if(width===390){
      await page.getByRole('button',{name:'Abrir menu'}).click();
      assert.equal(await page.locator('#mobile-menu').isVisible(),true);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#mobile-menu').isVisible(),false);
      await page.getByRole('button',{name:'Abrir menu'}).click();
      await page.locator('#mobile-menu').getByRole('link',{name:'Metodologia',exact:true}).click();
      assert.equal(await page.evaluate(()=>location.hash),'#metodologia');
      assert.equal(await page.locator('#mobile-menu').isVisible(),false);
      await page.evaluate(()=>window.scrollTo(0,0));
      await page.screenshot({path:'qa/mobile.png',fullPage:true});
    }
  }
  const animated=await browser.newPage({viewport:{width:1280,height:800}});
  await animated.goto('http://127.0.0.1:3000',{waitUntil:'networkidle'});
  await animated.locator('#method-steps').scrollIntoViewIfNeeded();
  await animated.waitForTimeout(1100);
  assert.equal(await animated.locator('.method-step').first().evaluate(el=>getComputedStyle(el).opacity),'1');
  assert.ok(Number(await animated.evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue('--page-progress')))>0);
  assert.deepEqual(errors,[]);
  console.log('PASS: build served, assets, headings, all anchors, 6 responsive widths, mobile menu/Escape/navigation, required fields, WhatsApp number + all encoded fields, fallback, motion/reduced-motion, no runtime errors. No WhatsApp message sent.');
} finally {await browser.close();server.close();}
