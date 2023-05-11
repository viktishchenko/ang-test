## swith to a new empty branch

```javascript
git switch --orphan heroes
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin heroes
```

```javascript
New-Item README.md
New-Item .gitignore
mkdir heroes
cd heroes
ng new heroes --directory ./
```

![Alt text](heroes/src/readmeAssets/init-app.png)

### add css(scss)

![Alt text](heroes/src/readmeAssets/init-app-w-css.png)

### add component, Angular Material, 2 way binding

```javascript
ng g c views/heroes --skip-tests --dry-run

ng add @angular/material
```

![Alt text](heroes/src/readmeAssets/add-material.png)

### add mock, display data list, select data, conditionally HTML, toggle CSS with class binding

![Alt text](heroes/src/readmeAssets/hero-upd.png)
