# 🧮 Calculatrice Scientifique Casyoh fx-Collège

[![Version](https://img.shields.io/badge/version-2.0-blue.svg)](https://github.com/JaySkills/calculator-project)

> **Portfolio - Projet 1** - Calculatrice responsive avec fonctions scientifiques

## 📋 Table des Matières

- [🎯 Présentation](#-présentation)
- [🚀 Technologies Utilisées](#-technologies-utilisées)
- [📱 Fonctionnalités](#-fonctionnalités)
- [🔄 Historique des Versions](#-historique-des-versions)
- [🛠️ Installation](#️-installation)
- [💻 Utilisation](#-utilisation)

- [📚 Documentation Technique](#-documentation-technique)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)

## 🎯 Présentation

Cette calculatrice scientifique a été développée dans le cadre de ma formation **Developpeur MERN**. 
Le projet simule une calculatrice scientifique avec une interface réaliste et des fonctionnalités avancées, fin de cycle 1.

### Objectifs de Formation

- Découverte, apprentissage progressif et solidification des compétences en HTML/CSS/JavaScript

## 🚀 Technologies Utilisées

### Front-End

- **HTML5** - Structure sémantique moderne : balises sémentiques, attributs Aria, balises méta, preconnect/preload, script defer.
- **CSS3** - Interface utilisateur responsive, stylisée, accessible : FlexBox, Grid, container, components, media-queries, keyframes
- **JavaScript ES6+** - Logique métier et interactions : Variables, primitives, objets, tableaux, fonctions, boucles, conditions, asynchronicité, algorythmie, regex, gestion du DOM.

### Frameworks & Bibliothèques

- **Font Awesome 6.4.0** - Icônes vectorielles
- **Google Fonts** - Typographies (Inter, JetBrains Mono)

### Outils de Développement

- **Git** - Contrôle de version
- **GitHub** - Hébergement du code source
- **VS Code** - Environnement de développement

### Standards & Accessibilité

- **WCAG 2.1 AA** - Accessibilité web
- **ARIA 1.1** - Attributs d'accessibilité
- **HTML5 Semantic** - Structure sémantique
- **Responsive Design** - Adaptation multi-écrans

## 📱 Fonctionnalités

### Opérations de Base

- ✅ Addition, soustraction, multiplication, division
- ✅ Gestion des nombres décimaux
- ✅ Priorité des opérateurs mathématiques
- ✅ Parenthèses automatiques et manuelles

### Fonctions Scientifiques

- ✅ Fonctions trigonométriques (sin, cos, tan)
- ✅ Logarithme base 10 (log)
- ✅ Racine carrée (√)
- ✅ Puissance au carré (x²)
- ✅ Constante Pi (π)
- ✅ Pourcentages (%)

### Interface Utilisateur

- ✅ Écran multi-lignes avec historique
- ✅ Affichage en temps réel des calculs
- ✅ Design responsive (mobile → desktop)
- ✅ Animations fluides et feedback visuel
- ✅ Mode sombre automatique

### Accessibilité

- ✅ Navigation clavier complète
- ✅ Support des lecteurs d'écran
- ✅ Contrastes élevés
- ✅ Réduction des animations (prefers-reduced-motion)

## 🔄 Historique des Versions

### 📅 Version 1.0 - Mars 2025 (Commit Initial)

#### Fonctionnalités Calculatrice 

- **Opérations de base** : +, -, ×, ÷ avec priorité mathématique correcte (utilise `eval()`)
- **Fonctions scientifiques** : sin, cos, tan, log, √, x², π, %
- **Gestion des parenthèses** : fermeture automatique des parenthèses ouvertes
- **Affichage multi-lignes** : 3 lignes d'historique + zone résultat séparée
- **Fonction Ans** : réutilisation du dernier résultat calculé

#### Fonctionnalités Avancées 

- **Parenthèses automatiques** : `sin(30` → `sin(30)` au moment du calcul
- **Historique des calculs** : système de défilement des 3 dernières opérations
- **Gestion du zéro** : `0 + 5` donne `5` (comportement mathématiquement correct)
- **Opérateurs en début** : `+ 5` devient automatiquement `0 + 5`
- **Formatage intelligent** : limitation à 12 caractères, notation scientifique si dépassement
- **Réutilisation résultat** : bouton Ans récupère le dernier résultat affiché
- **Gestion des décimales** : validation des points décimaux (un seul par nombre)
- **Gestion d'erreurs** : division par zéro, expressions invalides → "Erreur"
  
### 🚀 Version 2.0 - Juin 2025 (Améliorations Mineures)

**Modifications Techniques Réellement Apportées**

#### 🎨 Refonte HTML & CSS

- **Restructuration du CSS** : organisation en 14 sections commentées
- **Refonte de la structure HTML** pour une meilleure sémentique
- **Attributs ARIA** pour l'accessibilité (aria-label, aria-live, role)
- **Métadonnées SEO** et Open Graph intégrées

#### 🔧 Correctifs JavaScript Mineurs

- **Suppression code dupliqué** : nettoyage de quelques lignes redondantes
- **Amélioration sélection boutons** : optimisation des sélecteurs DOM
- **Optimisation affichage π** : réduction de 12 à 8 décimales pour l'affichage

#### 📝 Documentation

- **README complet** : création de cette documentation projet
- **Commentaires techniques** : explication du code existant

#### 🎯 Projets Futurs (Non Implémentés Actuellement)

- **Extension historique** : plus de 3 lignes d'affichage
- **Sauvegarde localStorage** : persistance des calculs entre sessions
- **Extention des opérations scientifiques** : x^y , 1/x , ln , e^x
- **Déploiement sur mobiles store via Capacitor** : apprentissage de capacitor

## 🛠️ Installation

### Prérequis

- Navigateur web moderne (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Serveur web local (optionnel pour le développement)

### Installation Locale

1. **Cloner le repository**

```bash
git clone https://github.com/JaySkills/calculator-project.git
cd calculator-project
```

2. **Lancer un serveur local** (optionnel)

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve .

# Avec PHP
php -S localhost:8000
```

3. **Ouvrir dans le navigateur**

```
http://localhost:8000
```

### Déploiement

Le projet peut être déployé sur :

- GitHub Pages
- Netlify
- Vercel

## 💻 Utilisation

### Interface Principale

```
┌─────────────────────────────────────┐
│ Casyoh © fx-Collège v2.0      🔋 🧪 │
├─────────────────────────────────────┤
│ Ligne 1: 5 + 3 =                   │
│ Ligne 2: 8 × 2 =                   │
│ Ligne 3: 16 - 4                    │
│                              = 12  │
├─────────────────────────────────────┤
│ log sin cos tan │ π  √  x² %       │
│ C   Del Ans  ÷  │ 7  8  9  ×       │
│ 4   5   6   -   │ 1  2  3  +       │
│ 0       .   =   │                  │
└─────────────────────────────────────┘
```

### Raccourcis Clavier

- **Chiffres** : 0-9
- **Opérateurs** : +, -, \*, /
- **Fonctions** : s (sin), c (cos), t (tan), l (log)
- **Contrôles** : Entrée (=), Échap (Clear), Backspace (Del)

### Exemples d'Utilisation

#### Calculs de Base

```
2 + 3 × 4 = 14
(2 + 3) × 4 = 20
√(16) = 4
3² = 9
```

#### Fonctions Scientifiques

```
sin(0) = 0
cos(π) = -1
log(100) = 2
50% = 0.5
```

## 📚 Documentation Technique

### Architecture du Projet

```
calculator-project/
├── index.html              # Structure HTML5 sémantique
├── styles/
│   └── style.css           # Styles CSS3 avec commentaires
├── scripts/
│   └── app.js              # Logique JavaScript ES6+
└── README.md
```

### Compatibilité Navigateurs

| Navigateur | Version Min | Support    |
| ---------- | ----------- | ---------- |
| Chrome     | 90+         | ✅ Complet |
| Firefox    | 88+         | ✅ Complet |
| Safari     | 14+         | ✅ Complet |
| Edge       | 90+         | ✅ Complet |


## 👨‍🎓 Contexte de Formation

### Formation

**Fullstack Javascript Developer - MERN/Next**  
Année : 2025

### Compétences Développées

- **Développement Front-End** : HTML5, CSS3, JavaScript ES6+
- **Design UX/UI** : Interface utilisateur responsive
- **Accessibilité** : Standards WCAG 2.1
- **Bonnes pratiques** : Code sémantique et maintenable

## 📄 Licence

Ce projet est sous licence MIT.

---

## 🙏 Remerciements

- **OpenClassrooms & IBM** pour la formation
- **Communauté MDN** pour la documentation
- **Font Awesome** pour les icônes
- **Google Fonts** pour les typographies

---

<div align="center">

**Calculatrice Scientifique Casyoh fx-Collège v2.0**  
_Développé par JaySkills_


</div>
