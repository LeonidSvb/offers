# Offer Page Generation Guidelines

## Setup
Link files in HTML:
```html
<link rel="stylesheet" href="style.css">
<script src="scripts.js"></script>
```

## Color Schemes
Add ONE class to `<body>`:
- `scheme-purple` - Purple-Blue (health/PCOS)
- `scheme-green` - Green-Teal (wellness/medical) 
- `scheme-blue` - Blue-Cyan (tech/AI)
- `scheme-orange` - Orange-Red (fitness/energy)
- `scheme-dark` - Dark-Gold (finance/business)
- `scheme-pink` - Pink-Purple (beauty/lifestyle)
- `scheme-navy` - Navy-Cyan (corporate/B2B)
- `scheme-violet` - Violet-Magenta (creative/design)

## Page Structure

### Header
```html
<section class="header">
    <div class="container">
        <h1 class="hero-title">[Title]</h1>
        <p class="hero-subtitle">[Subtitle]</p>
        <div class="time-saved">⏰ [Benefit]</div>
    </div>
</section>
```

### Problem Section
```html
<section class="section bg-white">
    <div class="container">
        <h2 class="section-title">[Title]</h2>
        <div class="grid grid-3">
            <div class="card">
                <div class="card-icon">[Emoji]</div>
                <h3 class="card-title">[Problem]</h3>
                <p class="card-text">[Description]</p>
            </div>
        </div>
    </div>
</section>
```

### Solution Steps
```html
<section class="section bg-primary">
    <div class="container">
        <h2 class="section-title">[Title]</h2>
        <div class="grid grid-4">
            <div class="card card-glass">
                <div class="step-number">1</div>
                <h3 class="step-title">[Step]</h3>
                <p class="step-text">[Description]</p>
            </div>
        </div>
    </div>
</section>
```

### Benefits
```html
<section class="section bg-light">
    <div class="container">
        <h2 class="section-title">[Title]</h2>
        <div class="grid grid-3">
            <div class="card card-primary">
                <div class="card-icon">[Emoji]</div>
                <h3 class="card-title">[Benefit]</h3>
                <p class="card-text">[Description]</p>
            </div>
        </div>
    </div>
</section>
```

### Before vs After
```html
<section class="section bg-white">
    <div class="container">
        <h2 class="section-title">Before vs After</h2>
        <div class="grid grid-2">
            <div class="card roi-card roi-before">
                <h3 class="card-title">WITHOUT [Solution]</h3>
                <div class="roi-metric">[Stat]</div>
                <p>[Description]</p>
            </div>
            <div class="card roi-card roi-after">
                <h3 class="card-title">WITH [Solution]</h3>
                <div class="roi-metric">[Better Stat]</div>
                <p>[Description]</p>
            </div>
        </div>
    </div>
</section>
```

### CTA
```html
<section class="section cta-section bg-primary">
    <div class="container">
        <h2 class="cta-title">[Title]</h2>
        <p class="cta-subtitle">[Subtitle]</p>
        <a href="[LINK]" class="cta-button">
            <span>[Button Text]</span>
        </a>
        <div class="mt-4">
            <p class="opacity-80">✅ [Benefit 1]<br>✅ [Benefit 2]<br>✅ [Benefit 3]</p>
        </div>
        <p class="mt-5 text-sm opacity-70"><strong>[Name]</strong> - [Title]</p>
    </div>
</section>
```

## Components

**Cards**: `card`, `card-primary`, `card-secondary`, `card-accent`, `card-glass`
**Grids**: `grid-1`, `grid-2`, `grid-3`, `grid-4`
**Backgrounds**: `bg-white`, `bg-light`, `bg-primary`, `bg-secondary`
**Spacing**: `mt-0` to `mt-5`, `mb-0` to `mb-5`
**Text**: `text-xs` to `text-3xl`, `opacity-70/80/90`

## Rules
- Always use `container` inside sections
- Max 6 benefit cards
- Card titles <50 chars, descriptions <150 chars
- Include emojis in card icons
- Use benefit-focused language
- Add specific stats in ROI metrics
- Set proper CTA links
