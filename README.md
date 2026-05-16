# 🌸 Meu Portfólio — Transição de Carreira para Dados

Portfolio pessoal criado durante a transição de carreira para a área de dados.
Design com tons pastéis e terrosos, fontes cursivas e totalmente responsivo.

## 📁 Estrutura do Projeto

```
PROJETO_PROGRAMARIA/
├── index.html              ← Página principal (edite aqui!)
├── assets/
│   ├── css/
│   │   └── style.css       ← Todos os estilos
│   ├── js/
│   │   └── main.js         ← Interatividade
│   └── images/
│       ├── profile_avatar.png   ← Substitua pela sua foto!
│       └── hero_background.png  ← Imagem de fundo do hero
└── README.md
```

## ✏️ Como Editar

### Sua Foto
Substitua o arquivo `assets/images/profile_avatar.png` pela sua foto real.

### Seu Nome e Descrição
Abra `index.html` e procure por:
- `"Seu Nome Aqui"` → substitua pelo seu nome
- Os textos nos parágrafos da seção `#sobre`

### Projetos
Copie um bloco `<div class="projeto-card">` e preencha com:
- Título do projeto
- Descrição
- Tags de tecnologias
- Links do GitHub e demo

### Certificações e Badges
Na seção `#formacao`, edite os blocos `timeline-item` e `badge-item`.

### Galeria de Fotos
1. Coloque sua foto em `assets/images/`
2. No `index.html`, na seção `#galeria`, substitua o `galeria-placeholder` por:
```html
<div class="galeria-item" data-src="assets/images/SUA-FOTO.jpg">
  <img src="assets/images/SUA-FOTO.jpg" alt="Descrição do evento" />
  <div class="galeria-overlay"><span>Nome do Evento</span></div>
</div>
```

### Redes Sociais
Edite os links no rodapé da seção `#contato`:
- LinkedIn: `href="https://linkedin.com/in/seu-perfil"`
- GitHub: `href="https://github.com/seu-usuario"`
- E-mail: `href="mailto:seuemail@email.com"`

---

## 🚀 Publicar no GitHub Pages

### 1. Criar repositório no GitHub
```bash
git init
git add .
git commit -m "🌸 Primeiro commit do meu portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

### 2. Ativar GitHub Pages
1. Acesse seu repositório no GitHub
2. Vá em **Settings → Pages**
3. Em **Source**, selecione **main** e pasta **/ (root)**
4. Clique **Save**
5. Seu site estará em: `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

---

## 🎨 Personalização de Cores

Abra `assets/css/style.css` e edite as variáveis no topo:

```css
:root {
  --peach:       #E8C4A0;   /* pêssego suave */
  --terracotta:  #C47C5A;   /* terracota principal */
  --dusty-rose:  #D4A5A5;   /* rosa queimado */
  --sage:        #A8B5A2;   /* verde sálvia */
  --warm-beige:  #F5EDE3;   /* bege quente */
}
```

---

Feito com 💛 durante a jornada de transição de carreira para Dados.
