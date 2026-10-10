# 🚀 Início Rápido

Guia rápido para começar a usar o portfólio.

## 📦 Arquivos Prontos

✅ Estrutura HTML completa  
✅ Estilos CSS modulares  
✅ JavaScript funcional  
✅ Design responsivo  
✅ Placeholders configurados  

## 🎯 Próximos Passos

### 1. Visualizar o Site

Escolha uma opção:

**a) Com Python:**
```bash
python -m http.server 8000
```

**b) Com Node.js:**
```bash
npx serve
```

**c) Com VS Code Live Server:**
- Instale a extensão "Live Server"
- Clique direito em `index.html` → "Open with Live Server"

Depois acesse: `http://localhost:8000`

### 2. Adicionar Imagens

📁 Adicione suas fotos em:
- `assets/images/hero/bruna-hero.jpg` (800x800px)
- `assets/images/about/bruna-about.jpg` (800x800px)
- `assets/images/gallery/work-1.jpg` até `work-5.jpg` (800x800px cada)

💡 **Dica:** Use https://tinypng.com para otimizar as imagens antes de adicionar.

📖 Leia mais em: `assets/images/README.md`

### 3. Adicionar Currículo

📄 Adicione o PDF do currículo em:
- `assets/documents/cv.pdf`

### 4. Personalizar Conteúdo

Edite o arquivo `index.html` para atualizar:
- ✏️ Texto da seção "Sobre"
- 💼 Experiências profissionais
- 🎓 Formação e cursos
- 📧 Informações de contato

### 5. Personalizar Cores (Opcional)

Edite `assets/css/variables.css` para mudar a paleta de cores:

```css
:root {
  --color-primary: #4A6B45;    /* Verde escuro */
  --color-secondary: #F4A98B;  /* Coral/salmão */
  --color-bg-light: #FFFAF5;   /* Creme claro */
  --color-bg-medium: #FCEEE2;  /* Pêssego claro */
}
```

## ✨ Funcionalidades Incluídas

- ✅ Menu responsivo com hambúrguer para mobile
- ✅ Navegação suave entre seções
- ✅ Galeria de imagens com modal
- ✅ Lazy loading automático de imagens
- ✅ Animações de scroll reveal
- ✅ Download de currículo em PDF
- ✅ Design adaptável para todos os dispositivos

## 📱 Testar Responsividade

Após abrir o site:
1. Pressione `F12` para abrir DevTools
2. Clique no ícone de dispositivo móvel (Ctrl+Shift+M)
3. Teste diferentes tamanhos de tela

## 🌐 Publicar Online

Quando estiver pronto para publicar:

### GitHub Pages (Grátis)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

### Netlify (Grátis)
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta do projeto
3. Pronto! Site publicado

### Vercel (Grátis)
```bash
npx vercel --prod
```

## ❓ Precisa de Ajuda?

- 📖 Documentação completa: `README.md`
- 🖼️ Guia de imagens: `assets/images/README.md`
- 📄 Guia de documentos: `assets/documents/README.md`

## 📋 Checklist Antes de Publicar

- [ ] Adicionar foto principal (hero)
- [ ] Adicionar foto "sobre mim"
- [ ] Adicionar 5 fotos da galeria
- [ ] Adicionar currículo em PDF
- [ ] Revisar textos e informações
- [ ] Testar em mobile
- [ ] Testar em diferentes navegadores
- [ ] Verificar todos os links

---

**Dúvidas?** Consulte o arquivo `README.md` para informações detalhadas.
