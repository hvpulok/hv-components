# hv-navbar usage:
Expected Features:
- On Mouse hover an detailed info bar will show (animated in and out)
- Innovative responsive navbar
- In small screen, the navbar should hide, a floating icon bar should show in right bottom corner
    - On mouse hover or click, the nav info should show up

```html
<hv-navbar [navBarConfig] = "navBarConfig" ></hv-navbar>
```
```js
navBarConfig = {
    navClass : '' // possible values: '', 'fixed-top', 'fixed-bottom
}
```

- Usage without fixed navbar. body and html must have zero margin.
```css
html, body{
    margin: 0;
    padding: 0;
}
```