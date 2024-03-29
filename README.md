GoodData Resource Page
This project is a resource page created as part of the interview process for GoodData. It showcases a responsive web page with a hamburger menu, sticky header, and dynamic styling using SCSS and Gulp.

Features
Hamburger Menu:
The navigation menu is accessible via a hamburger icon.
Clicking the icon reveals a full-screen menu.

Responsive Design:
The entire page layout adapts to different screen sizes (mobile, tablet, desktop).
Media queries ensure optimal display across devices.

Sticky Header:
As the user scrolls down, the header remains fixed at the top of the viewport.
The background color of the header changes upon the scroll and gets back its original color at the top of the page.

SCSS Organization:
  SCSS files are organized into separate partials for better maintainability:
    _buttons.scss: Styles for buttons
    _colors.scss: Color variables
    _content.scss: Main text content on website
    _footer.scss: Footer styles
    _global_settings.scss: Global settings such as the width of main container
    _header.scss: Header styles
    _hero.scss: Hero section styles
    _mixin.scss: Reusable mixins
    _register-form.scss: Card with a registration form for a webinar 
    _typography.scss: Typography rules
  All these partials are imported into main.scss.
  
Gulp Workflow:
  Gulp is used to automate tasks such as:
    Compiling SCSS into CSS
    Concatenating and minifying CSS and JS files
    Generating a dist folder with optimized assets
