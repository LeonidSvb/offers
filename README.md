# HTML Generation Guidelines for Offer Pages

## Overview
You are generating HTML pages for offers using a pre-built CSS framework. The CSS file (`style.css`) and JavaScript file (`scripts.js`) are already created and should be linked in every HTML file.

## Required HTML Structure

### 1. Basic HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Offer Title] - [Company Name]</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="[COLOR_SCHEME]">
    <!-- Content here -->
    <script src="scripts.js"></script>
</body>
</html>
```

### 2. Color Scheme Selection
**IMPORTANT**: Always choose ONE color scheme by adding the appropriate class to the `<body>` tag:

- `scheme-purple` - Purple-Blue (default) - For general/PCOS/health offers
- `scheme-green` - Green-Teal - For health & wellness, nutrition, medical
- `scheme-blue` - Blue-Cyan - For tech, AI, software, digital products
- `scheme-orange` - Orange-Red - For fitness, energy, sports, motivation
- `scheme-dark` - Dark-Gold - For finance, business, luxury, professional
- `scheme-pink` - Pink-Purple - For beauty, lifestyle, women-focused
- `scheme-navy` - Navy-Cyan - For corporate, B2B, professional services
- `scheme-violet` - Violet-Magenta - For creative, design, artistic services

**Example**: `<body class="scheme-green">` for a health-related offer.

## Standard Page Sections

### 1. Header Section
```html
<section class="header">
    <div class="container">
        <h1 class="hero-title">[Main Offer Title]</h1>
        <p class="hero-subtitle">[Compelling subtitle explaining the offer value]</p>
        <div class="time-saved">⏰ [Key Benefit/Time Saved]</div>
    </div>
</section>
```

### 2. Problem Section (White Background)
```html
<section class="section bg-white">
    <div class="container">
        <h2 class="section-title">[Problem Section Title]</h2>
        <div class="grid grid-3">
            <div class="card">
                <div class="card-icon">[Emoji]</div>
                <h3 class="card-title">[Problem Title]</h3>
                <p class="card-text">[Problem Description]</p>
            </div>
            <!-- Repeat for 2-3 problems -->
        </div>
    </div>
</section>
```

### 3. Solution/How It Works Section (Gradient Background)
```html
<section class="section bg-primary">
    <div class="container">
        <h2 class="section-title">[Solution Section Title]</h2>
        <div class="grid grid-4">
            <div class="card card-glass">
                <div class="step-number">1</div>
                <h3 class="step-title">[Step Title]</h3>
                <p class="step-text">[Step Description]</p>
            </div>
            <!-- Repeat for 3-4 steps -->
        </div>
    </div>
</section>
```

### 4. Features/Benefits Section (Light Background)
```html
<section class="section bg-light">
    <div class="container">
        <h2 class="section-title">[Benefits Section Title]</h2>
        <div class="grid grid-3">
            <div class="card card-primary">
                <div class="card-icon">[Emoji]</div>
                <h3 class="card-title">[Benefit Title]</h3>
                <p class="card-text">[Benefit Description]</p>
            </div>
            <!-- Repeat for 3-6 benefits -->
        </div>
    </div>
</section>
```

### 5. Before vs After / ROI Section (White Background)
```html
<section class="section bg-white">
    <div class="container">
        <h2 class="section-title">Before vs After</h2>
        <div class="grid grid-2">
            <div class="card roi-card roi-before">
                <h3 class="card-title">WITHOUT [Solution]</h3>
                <div class="roi-metric">[Number/Stat]</div>
                <p>[Description]</p>
                <div class="roi-metric">[Another Stat]</div>
                <p>[Description]</p>
            </div>
            <div class="card roi-card roi-after">
                <h3 class="card-title">WITH [Solution]</h3>
                <div class="roi-metric">[Better Number/Stat]</div>
                <p>[Description]</p>
                <div class="roi-metric">[Better Stat]</div>
                <p>[Description]</p>
            </div>
        </div>
    </div>
</section>
```

### 6. Call-to-Action Section (Gradient Background)
```html
<section class="section cta-section bg-primary">
    <div class="container">
        <h2 class="cta-title">[CTA Title]</h2>
        <p class="cta-subtitle">[CTA Subtitle/Social Proof]</p>
        <a href="[BOOKING_LINK]" class="cta-button">
            <span>[CTA Button Text]</span>
        </a>
        <div class="mt-4">
            <p class="opacity-80">
                ✅ [Benefit 1]<br>
                ✅ [Benefit 2]<br>
                ✅ [Benefit 3]
            </p>
        </div>
        <p class="mt-5 text-sm opacity-70">
            <strong>[Expert Name]</strong> - [Expert Title/Credentials]
        </p>
    </div>
</section>
```

## Card Variants Available

### Basic Cards
- `card` - White background with light shadow
- `card card-primary` - Primary gradient background
- `card card-secondary` - Secondary gradient background  
- `card card-accent` - Accent gradient background
- `card card-glass` - Glass effect (for use on gradient backgrounds)

### Grid Options
- `grid grid-1` - Single column
- `grid grid-2` - Two columns (responsive)
- `grid grid-3` - Three columns (responsive)
- `grid grid-4` - Four columns (responsive)

### Background Options for Sections
- `bg-white` - White background
- `bg-light` - Light gray background (#f8f9fa)
- `bg-primary` - Primary gradient background
- `bg-secondary` - Secondary gradient background

## Typography Classes
- `hero-title` - Large hero title with gradient text
- `hero-subtitle` - Hero subtitle text
- `section-title` - Section headers with underline
- `card-title` - Card titles
- `card-text` - Card body text
- `step-title` - Step titles in process flows
- `step-text` - Step descriptions
- `cta-title` - Call-to-action titles
- `cta-subtitle` - Call-to-action subtitles

## Utility Classes
- `text-center`, `text-left`, `text-right` - Text alignment
- `mb-0` to `mb-5` - Margin bottom (0 to 3rem)
- `mt-0` to `mt-5` - Margin top (0 to 3rem)
- `opacity-70`, `opacity-80`, `opacity-90` - Opacity levels
- `font-normal`, `font-medium`, `font-semibold`, `font-bold` - Font weights
- `text-xs` to `text-3xl` - Font sizes

## Important Guidelines

### DO:
1. Always include the CSS and JS file links
2. Always choose ONE color scheme for the body
3. Use the container class inside every section
4. Use semantic section structure with proper classes
5. Include emojis in card icons (makes it more engaging)
6. Use the grid system for responsive layouts
7. Include proper meta tags and page title

### DON'T:
1. Don't mix multiple color schemes on one page
2. Don't forget the container div inside sections
3. Don't use inline styles (everything is handled by CSS)
4. Don't skip the loading animation (it's automatic via JS)
5. Don't forget to set proper href links for CTA buttons
6. Don't use more than 6 cards in benefits sections (keeps it focused)

### Content Guidelines:
1. Keep card titles under 50 characters
2. Keep card descriptions under 150 characters for readability
3. Use action-oriented language in CTAs
4. Include specific numbers/stats in ROI sections
5. Use emojis strategically to add visual interest
6. Ensure all text is benefit-focused, not feature-focused

### Responsive Behavior:
- All grids automatically stack on mobile
- Text sizes scale responsively
- Cards maintain proper spacing on all devices
- No additional mobile CSS needed

This framework is designed to create high-converting offer pages with minimal effort while maintaining professional design standards.
