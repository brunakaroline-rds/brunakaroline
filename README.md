# 🎨 Portfólio Profissional - Bruna Karoline Ribeiro da Silva

Site de portfólio profissional de página única para arte-educadora, com design orgânico e responsivo.

![Status](https://img.shields.io/badge/status-ativo-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Este é um site de portfólio profissional desenvolvido com HTML5, CSS3 e JavaScript vanilla (sem frameworks). O design segue uma estética orgânica com formas fluidas, ondas decorativas e uma paleta de cores suaves e acolhedoras.

### ✨ Características Principais

- 🎯 **Single Page Application (SPA)** - Navegação suave entre seções
- 📱 **Design Responsivo** - Mobile-first, adaptado para todos os dispositivos
- 🚀 **Performance Otimizada** - Lazy loading de imagens e código otimizado
- ♿ **Acessibilidade** - Seguindo as melhores práticas WCAG
- 🎨 **Design Orgânico** - Formas fluidas, ondas SVG e transições suaves
- 🌐 **Zero Dependências** - JavaScript vanilla, sem frameworks externos

## 🗂️ Estrutura do Projeto

```
portfolio/
├── index.html                          # Documento HTML principal
├── assets/
│   ├── css/
│   │   ├── reset.css                   # Normalização cross-browser
│   │   ├── variables.css               # Variáveis CSS (design system)
│   │   ├── layout.css                  # Grid e estrutura geral
│   │   ├── components.css              # Componentes reutilizáveis
│   │   ├── sections.css                # Estilos de seções
│   │   └── responsive.css              # Media queries
│   ├── js/
│   │   ├── main.js                     # Orquestrador principal
│   │   ├── navigation.js               # Menu e smooth scroll
│   │   ├── modal.js                    # Gallery modal
│   │   ├── carousel.js                 # Carrossel de formação e cursos
│   │   ├── experience.js               # Painéis de detalhes da seção Experiência
│   │   └── lazy-load.js                # Lazy loading de imagens
│   ├── images/
│   │   ├── hero/                       # Imagem hero section
│   │   ├── about/                      # Imagem about section
│   │   ├── gallery/                    # Pinturas da galeria
│   │   ├── projects/                   # Fotos da aula de Arte Egípcia (seção Experiência)
│   │   ├── exhibitions/                # Fotos das exposições montadas (seção Experiência)
│   │   ├── placeholders/               # Placeholders SVG
│   │   └── README.md                   # Guia de imagens
│   └── documents/
│       ├── cv.pdf                      # Currículo em PDF
│       └── README.md                   # Instruções
└── README.md                           # Este arquivo
```

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Escuro | `#4A6B45` | Cor primária, textos importantes |
| Coral/Salmão | `#F4A98B` | Cor secundária, destaques |
| Creme Claro | `#FFFAF5` | Fundo principal |
| Pêssego Claro | `#FCEEE2` | Fundo alternativo |
| Texto Escuro | `#2C2C2C` | Texto principal |
| Branco | `#FFFFFF` | Texto sobre fundos escuros |

## 🚀 Como Usar

### Opção 1: Servidor Local Simples

**Com Python 3:**
```bash
python -m http.server 8000
```

**Com Node.js (npx):**
```bash
npx serve
```

**Com PHP:**
```bash
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

**Layout quebrado depois de uma alteração?** O navegador pode estar usando CSS e JS antigos guardados em cache.
Recarregue com `Ctrl + F5`. Para evitar isso, os arquivos são carregados com um número de versão (`?v=...`)
no `index.html` e no `assets/js/main.js`: ao alterar um CSS ou JS, troque esse número nos dois arquivos.

### Opção 2: Abrir Diretamente

Você pode abrir o arquivo `index.html` diretamente no navegador, mas algumas funcionalidades (como lazy loading) funcionam melhor com um servidor local.

### Opção 3: Extensão VS Code

Use a extensão **Live Server** no VS Code:
1. Instale a extensão "Live Server"
2. Clique com o botão direito em `index.html`
3. Selecione "Open with Live Server"

## 📝 Personalização

### 1. Adicionar Imagens

Siga as instruções em [`assets/images/README.md`](assets/images/README.md) para adicionar:
- Foto principal (hero)
- Foto sobre mim (about)
- Pinturas da galeria de trabalhos

### 2. Adicionar Currículo

Adicione o arquivo `cv.pdf` em `assets/documents/`. Veja [`assets/documents/README.md`](assets/documents/README.md) para detalhes.

### 3. Modificar Cores

Edite as variáveis CSS em `assets/css/variables.css`:

```css
:root {
  --color-primary: #4A6B45;
  --color-secondary: #F4A98B;
  /* ... outras variáveis ... */
}
```

### 4. Atualizar Conteúdo

Edite o arquivo `index.html` para atualizar:
- Textos das seções
- Áreas de atuação
- Experiências profissionais
- Formação acadêmica
- Informações de contato

## 🔧 Funcionalidades Técnicas

### Navegação
- Menu hambúrguer responsivo para mobile
- Smooth scroll para navegação entre seções
- Destaque da seção ativa no menu
- Fechamento automático do menu ao clicar em link (mobile)

### Galeria
- Grid responsivo de imagens
- Modal para visualização ampliada
- Navegação por teclado (setas, ESC)
- Lazy loading automático de imagens

### Performance
- Lazy loading de imagens com Intersection Observer API
- Placeholders SVG leves
- CSS modular para melhor cache
- Animações otimizadas com CSS transforms

### Acessibilidade
- Estrutura semântica HTML5
- Atributos ARIA apropriados
- Suporte a navegação por teclado
- Contraste de cores WCAG AA
- Textos alternativos descritivos

## 🌐 Compatibilidade de Navegadores

| Navegador | Versão Mínima |
|-----------|---------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | 14+ |
| Chrome Android | 90+ |

### APIs Utilizadas
- **Intersection Observer API** - Lazy loading e scroll reveal
- **CSS Custom Properties** - Variáveis CSS
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS clip-path** - Formas orgânicas

## 📱 Responsividade

O design é mobile-first com breakpoints:

| Breakpoint | Tamanho | Descrição |
|------------|---------|-----------|
| Mobile | < 768px | Layout em coluna única |
| Tablet | 768px - 991px | Layout híbrido |
| Desktop | 992px - 1199px | Layout completo |
| Large Desktop | 1200px+ | Container expandido |

## 🎯 Seções do Site

1. **Hero** - Apresentação inicial com nome e título
2. **Sobre** - Informações sobre a profissional
3. **Áreas de Atuação** - Grid com 4 áreas de expertise
4. **Galeria** - Pinturas de Bruna
5. **Experiência** - Três atuações em cards clicáveis; cada card abre um painel com os projetos e resultados daquela atuação (aula de Arte Egípcia, oficina de dança, exposições e demais frentes na Secretaria de Cultura)
6. **Formação** - Graduação, certificações e cursos (carrossel) e a pesquisa do TCC
7. **Contato** - Informações de contato e links

## 🛠️ Desenvolvimento

### Estrutura de CSS

O CSS está organizado em módulos:
- `reset.css` - Normalização base
- `variables.css` - Design tokens
- `layout.css` - Estrutura e grid
- `components.css` - Componentes reutilizáveis
- `sections.css` - Estilos específicos de seções
- `responsive.css` - Media queries

### Estrutura de JavaScript

Módulos ES6 com classes:
- `main.js` - Inicialização e orquestração
- `navigation.js` - Lógica de navegação
- `modal.js` - Funcionalidade do modal
- `carousel.js` - Carrossel de formação e cursos
- `experience.js` - Painéis de detalhes da seção Experiência
- `lazy-load.js` - Sistema de lazy loading

## 📦 Deploy

### Opção 1: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Seu site estará em: `https://seu-usuario.github.io/nome-do-repo`

### Opção 2: Netlify

1. Arraste a pasta do projeto para [Netlify Drop](https://app.netlify.com/drop)
2. Seu site será publicado automaticamente
3. Configure domínio personalizado (opcional)

### Opção 3: Vercel

```bash
npm i -g vercel
vercel --prod
```

### Opção 4: Hospedagem Tradicional

Faça upload dos arquivos via FTP para qualquer hospedagem que suporte HTML estático.

## ✅ Checklist de Publicação

Antes de publicar, certifique-se de:

- [ ] Adicionar todas as imagens reais
- [ ] Adicionar o currículo em PDF
- [ ] Revisar todos os textos e informações
- [ ] Testar em diferentes navegadores
- [ ] Testar em dispositivos mobile
- [ ] Verificar links externos
- [ ] Otimizar imagens para web
- [ ] Configurar meta tags para SEO
- [ ] Adicionar favicon (ícone do site)
- [ ] Testar acessibilidade

## 🎓 Créditos

**Desenvolvido para:** Bruna Karoline Ribeiro da Silva  
**Arte-educadora · Curadoria · Mediação cultural**

## 📄 Licença

Este projeto foi desenvolvido para uso pessoal de Bruna Karoline Ribeiro da Silva.

## 🤝 Contribuições

Para sugestões ou melhorias, entre em contato através do email listado no site.

---

**Desenvolvido com 💚 usando HTML5, CSS3 e JavaScript vanilla**
