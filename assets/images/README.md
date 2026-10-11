# Guia de Imagens do Portfólio

Este documento explica como adicionar as imagens reais ao portfólio.

## Estrutura de Pastas

```
assets/images/
├── hero/           # Imagem principal da hero section
├── about/          # Imagem da seção sobre
├── gallery/        # Pinturas da galeria de trabalhos
├── projects/       # Fotos da aula de Arte Egípcia (painel do card da E.E.E.M. Ponche Verde)
├── exhibitions/    # Fotos das exposições (painel do card da Secretaria de Cultura)
├── placeholders/   # Placeholders SVG (não modificar)
└── documents/      # Documentos (CV em PDF)
```

## Imagens Necessárias

### 1. Hero Section
**Arquivo:** `hero/bruna-hero.jpg`
- **Dimensões recomendadas:** 800x800px ou maior (quadrado)
- **Formato:** JPG ou WebP
- **Tamanho máximo:** 500KB
- **Descrição:** Foto profissional de Bruna para a seção principal

### 2. About Section
**Arquivo:** `about/bruna-about.jpg`
- **Dimensões recomendadas:** 800x800px ou maior (quadrado)
- **Formato:** JPG ou WebP
- **Tamanho máximo:** 450KB
- **Descrição:** Foto de Bruna durante atividade de arte-educação

### 3. Gallery Section
A galeria exibe as pinturas de Bruna (`gallery/work-1.jpg` a `gallery/work-13.jpg`).
As 5 primeiras aparecem na página; as demais abrem no botão "Ver Mais Trabalhos".

Para adicionar uma nova pintura, salve o arquivo como `gallery/work-14.jpg` (e assim por diante)
e copie um bloco `<figure class="gallery__item">` no `index.html`, ajustando `data-src` e `alt`.

**Especificações:**
- **Dimensões recomendadas:** até 1400px no lado maior, recortada na tela (sem o fundo)
- **Formato:** JPG ou WebP
- **Tamanho máximo:** 400KB cada
- **Enquadramento da miniatura:** se o recorte cortar a parte importante, use `style="object-position: center 20%;"` no `<img>`

### 4. Experiência (projetos e exposições)
As fotos em `projects/` e `exhibitions/` aparecem nos painéis da seção Experiência. Elas foram
extraídas dos relatórios de estágio, por isso têm resolução baixa (550 a 880px de largura). Para
trocar por uma foto original, salve o arquivo com o mesmo nome na mesma pasta. Use apenas fotos sem
estudantes ou visitantes identificáveis.

O texto do atributo `data-caption` de cada `<img>` é a legenda exibida quando a foto é ampliada.

As exposições "Revele-se" e "6 de Maio: rumo aos 70 anos" ainda não têm foto e, por isso, são citadas
só em texto (`experience__note`). Quando houver foto, copie um bloco `<li class="experience__show">`
no `index.html` e remova a exposição da nota.

## Otimização de Imagens

Para melhor performance, otimize as imagens antes de adicioná-las:

### Ferramentas Online (gratuitas)
- **TinyPNG/TinyJPG:** https://tinypng.com
- **Squoosh:** https://squoosh.app
- **ImageOptim (Mac):** https://imageoptim.com

### Dicas de Otimização
1. Use formato WebP quando possível (melhor compressão)
2. Mantenha a qualidade em 80-85%
3. Redimensione para as dimensões recomendadas antes de comprimir
4. Use JPG para fotos, PNG para gráficos com transparência

## Formato WebP (Recomendado)

Para suporte moderno, você pode usar o formato WebP:

```html
<picture>
  <source srcset="assets/images/hero/bruna-hero.webp" type="image/webp">
  <img src="assets/images/hero/bruna-hero.jpg" alt="Bruna Karoline">
</picture>
```

## Atualizando o HTML

Após adicionar as imagens, atualize o arquivo `index.html`:

1. **Hero Section:** A imagem já está configurada para carregar imediatamente
2. **About e Gallery:** Usam lazy loading automático através dos atributos `data-src`

## Currículo (PDF)

Adicione o currículo em PDF em:
**Arquivo:** `documents/cv.pdf`
- **Formato:** PDF
- **Tamanho máximo:** 2MB
- **Descrição:** Currículo completo de Bruna Karoline

## Nota sobre Placeholders

Os arquivos em `placeholders/` são SVGs leves que aparecem enquanto as imagens reais não são carregadas. **Não modifique ou remova estes arquivos**, pois eles são essenciais para o funcionamento do lazy loading.

## Checklist de Imagens

- [ ] hero/bruna-hero.jpg (800x800px, <500KB)
- [x] about/bruna-about.jpg (840x614px, recortada na proporção da moldura: 450x329)
- [x] gallery/work-1.jpg a work-13.jpg (pinturas, <400KB cada)
- [x] documents/cv.pdf (<2MB)

## Suporte

Para dúvidas sobre formatos ou otimização, consulte:
- [MDN Web Docs - Images](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
- [Web.dev - Image Optimization](https://web.dev/fast/#optimize-your-images)
