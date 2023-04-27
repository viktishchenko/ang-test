## swith to a new empty branch

```javascript
git switch --orphan <new branch>
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin <new branch>
```

```javascript
New-Item README.md
mkdir front-shop
cd front-shop
ng new front-shop --directory ./
ng add @angular/material
```

```javascript
npm run start

```

### init w mat

![Alt text](front-shop/src/readmeAssets/init-w-material.png)

```javascript
mkdir views
ng g c  views/top-bar --dry-run

ng g c views/product-list --dry-run
```

![Alt text](front-shop/src/readmeAssets/top-bar.png)

### add routing

```javascript
ng generate module app-routing --flat --module=app
```

### structural directives

![Alt text](front-shop/src/readmeAssets/structural-directives.png)

### pass data to a child component

```javascript
ng generate component views/product-alerts --dry-run

```

`src/app/product-alerts/product-alerts.component.ts`

```javascript
  @Input() product!: IPoduct;

```

![Alt text](front-shop/src/readmeAssets/from-parent-to-child.png)
