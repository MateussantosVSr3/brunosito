# Andriatto & Co.

Website institucional em Next.js, React e TypeScript. Exportação estática, sem banco de dados ou credenciais no cliente.

## Executar

- `npm install`
- `npm run dev` — http://127.0.0.1:3000
- `npm run build` — exportação em `out/`
- `npm run typecheck`

No PowerShell com execução de scripts restrita, use `npm.cmd`.

## Configuração

Edite `lib/site-config.ts`: telefone, número de WhatsApp (somente dígitos com código do país), e-mail opcional e URL canônica. Ao alterar domínio, faça uma nova compilação para atualizar sitemap e Open Graph.

O formulário valida campos no navegador e abre `https://wa.me/` com os dados preenchidos. A pessoa precisa confirmar o envio no WhatsApp. Nenhuma mensagem é enviada automaticamente e nenhum dado é armazenado pelo site. Se uma nova aba for bloqueada, um link de continuidade aparece. Não há integração de e-mail nem confirmação fictícia de entrega.

## Identidade e assets

`public/logo.jpg` e `public/bruno.jpg` preservam os arquivos recebidos. O logo original tem 176 × 151 pixels; recomenda-se obter um SVG oficial para futuras versões de alta resolução. A geometria do hero é uma composição decorativa inspirada na marca, não substitui sua assinatura original. O favicon é um recorte do símbolo original, e o cartão social usa o logotipo original.

Fontes DM Sans e Manrope são carregadas pelo Google Fonts, com fallback local. Animações usam CSS e IntersectionObserver, respeitam prefers-reduced-motion e mantêm o conteúdo acessível sem JavaScript. O formulário e o menu mobile exigem JavaScript.

## Publicação

`out/` pode ser publicado em hospedagem estática. `.openai/hosting.json` guarda a identidade e o diretório de publicação no Sites. A hospedagem começa privada; a publicação pública e eventual domínio próprio são configurações separadas.
