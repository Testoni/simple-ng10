
npm install -g typescript
npm install -g @angular/cli

ng -v

---
- ng new first-project

- ng serve (build and run)
localhost:4200

// create component
ng g c my-component 

// create module
ng g m courses 
ng g c courses
ng g c courses/course-detail

// create service
ng g s courses/courses

// adding bootstrap in project
ng add @ng-bootstrap/ng-bootstrap

// sass
ng set defaults.styleExt scss

// ng lint
verify problems

// ng test
execute tests

// ng e2e
end to end test

// ng build (generate dist, project build)
// ng build --dev (build dev)
// ng build --prod (build min)

// npm install http-server -g
// run: http-server (run server)

