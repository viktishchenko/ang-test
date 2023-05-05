## swith to a new empty branch

```javascript
git switch --orphan <new branch>
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin <new branch>
```

```javascript
New-Item README.md
New-Item .gitignore
mkdir city-app
cd city-app
ng new front-shop --directory ./
```

## add bootstrap

```javascript
npm i bootstrap
npm i bootstrap-icons

```

`styles.scss`

```javascript
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~bootstrap-icons/font/bootstrap-icons.css";

```

### init with bootstrap

![Alt text](city-app/src/readmeAssets/init-w-bootstrap.png)

### add home comp w css

```javascript
ng g c views/home --inline-template --skip-tests --dry-run

```

![Alt text](city-app/src/readmeAssets/home-comp.png)

### add housing-location comp w css

```javascript
ng g c views/housingLocation --inline-template --skip-tests --dry-run
```

### add models

```javascript
ng g i models/housinglocation  --dry-run
```

![Alt text](city-app/src/readmeAssets/location-comp.png)

### send data from parent

```javascript
<app-housing-location
    *ngFor="let housingLocationsss of housingLocationList"
    [housingLocation]="housingLocationsss"
></app-housing-location>
```

![Alt text](city-app/src/readmeAssets/ngFor-eg.png)

### add service

```javascript
ng g s services/housing --skip-tests --dry-run
```

### add comp

```javascript
ng g c views/details --inline-style --inline-template --skip-tests --dry-run
```

### add routing

```javascript
ng generate module app-routing --flat --module=app --dry-run
```
