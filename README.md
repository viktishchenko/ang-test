# base Angular tutorial

### swith to a new empty branch

```javascript
git switch --orphan <new branch>
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin <new branch>

```

### init project

```javascript
New-Item README.md
ng new base-routing
cd base-routing
ng serve --open

```
