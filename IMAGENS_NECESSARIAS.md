# Imagens Necessárias para a Landing Page

Para que a landing page funcione corretamente, você precisa adicionar as seguintes imagens na pasta `src/assets/images/`:

## 📁 Estrutura de Pastas

```
src/
  assets/
    images/
      ├── logo.svg                    # Logo do UMBRELLA com ícone de guarda-chuva
      ├── hand-phone.svg              # Ilustração da mão segurando celular
      ├── nasa-chart.svg              # Gráfico de dados da NASA
      ├── planet-space.svg            # Ilustração espacial (planeta com anéis)
      ├── rocket-space.svg            # Ilustração do foguete espacial
      ├── screen1.png                 # Screenshot 1 do app
      ├── screen2.png                 # Screenshot 2 do app
      ├── screen3.png                 # Screenshot 3 do app
      ├── screen4.png                 # Screenshot 4 do app
      ├── screen5.png                 # Screenshot 5 do app
      ├── team1.jpg                   # Foto do membro da equipe 1
      ├── team2.jpg                   # Foto do membro da equipe 2
      ├── team3.jpg                   # Foto do membro da equipe 3
      ├── team4.jpg                   # Foto do membro da equipe 4
      └── team5.jpg                   # Foto do membro da equipe 5
```

## 🎨 Detalhes das Imagens

### Logo (logo.svg)

- **Descrição**: Logo "UMBRELLA" com ícone de guarda-chuva estilizado
- **Formato**: SVG (recomendado) ou PNG
- **Dimensões**: 40x40px (será redimensionado automaticamente)
- **Cores**: Azul escuro (#0A1931) ou branco

### Ilustração da Mão/Celular (hand-phone.svg)

- **Descrição**: Mão verde com pulseira laranja segurando smartphone branco
- **Formato**: SVG (recomendado) ou PNG
- **Dimensões**: ~400px de largura
- **Cores**: Mão verde (#69F0AE), pulseira laranja (#FF8A65), celular branco

### Gráfico NASA (nasa-chart.svg)

- **Descrição**: Gráfico de área com duas linhas (azul claro e azul escuro)
- **Formato**: SVG (recomendado) ou PNG
- **Dimensões**: ~800px de largura
- **Cores**: Linhas azuis, fundo transparente

### Ilustração Espacial (planet-space.svg)

- **Descrição**: Planeta escuro com anéis brancos e elementos orbitais
- **Formato**: SVG (recomendado) ou PNG
- **Dimensões**: ~400px de largura
- **Cores**: Planeta escuro, anéis brancos, elementos coloridos

### Foguete Espacial (rocket-space.svg)

- **Descrição**: Foguete branco voando em direção a planeta com anéis
- **Formato**: SVG (recomendado) ou PNG
- **Dimensões**: ~300px de largura
- **Cores**: Foguete branco, planeta azul com anéis brancos

### Screenshots do App (screen1.png - screen5.png)

- **Descrição**: Telas do aplicativo mobile
- **Formato**: PNG ou JPG
- **Dimensões**: Proporção vertical (ex: 200x400px)
- **Cores**: Conforme design do app

### Fotos da Equipe (team1.jpg - team5.jpg)

- **Descrição**: Fotos dos membros da equipe
- **Formato**: JPG ou PNG
- **Dimensões**: Quadradas (ex: 200x200px)
- **Cores**: Qualquer (será redimensionado para 80x80px)

## 📝 Como Adicionar as Imagens

1. **Crie a pasta de imagens**:

   ```bash
   mkdir src/assets/images
   ```

2. **Adicione as imagens** na pasta `src/assets/images/`

3. **As importações já estão configuradas** no código Vue:
   ```vue
   <img src="@/assets/images/logo.svg" alt="UMBRELLA" class="logo-img" />
   ```

## 🔧 Fallbacks Temporários

Se você não tiver todas as imagens ainda, pode usar placeholders temporários:

### Para SVGs:

```html
<div class="placeholder-svg">
  <!-- Conteúdo temporário -->
</div>
```

### Para imagens:

```html
<div class="placeholder-image">
  <span>Imagem em breve</span>
</div>
```

## 🎯 Prioridade das Imagens

**Alta Prioridade** (necessárias para funcionamento básico):

- logo.svg
- hand-phone.svg
- planet-space.svg
- rocket-space.svg

**Média Prioridade** (melhoram a experiência):

- nasa-chart.svg
- screen1.png - screen5.png

**Baixa Prioridade** (podem ser adicionadas depois):

- team1.jpg - team5.jpg

## 📱 Responsividade

Todas as imagens são responsivas e se adaptam automaticamente a diferentes tamanhos de tela. O CSS já está configurado para:

- Redimensionar automaticamente
- Manter proporções
- Otimizar para mobile

## 🚀 Próximos Passos

1. Adicione as imagens na pasta `src/assets/images/`
2. Teste a landing page
3. Ajuste as cores e dimensões conforme necessário
4. Otimize as imagens para web (compressão, formatos adequados)
