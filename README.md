# nb-formly-ui

This is a **Angular** package that provides [Nebular](https://github.com/akveo/nebular) based components to be used in [Formly](https://github.com/ngx-formly/ngx-formly) forms. In a nutshell, Nebular is a set of Angular components that follows [Eva Design Pattern](https://eva.design/). Formly is a angular library taht supports the dynamic configuration of forms. It provide several features to make it easy to create complex and configurable forms based on javascript objects.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

To check who this library is used, we highly recommend to check the project [izzy-front-2-backends](https://github.com/alessandrogurgel/izzy-front-2-backends) which provides demo pages for this package in a admin template. 

### Dependencies
- ngx-formly: 5.10.10
- nebular: 6.0.0
- ngx-mask: 11.1.4
- lodash: 4.17.21

### Components and Pipes
- NbFormlyCheckboxComponent
- NbFormlyInputComponent
- NbFormlyDatepickerComponent
- NbFormlySelectComponent
- NbFormlyWrapperPanelComponent
- NbFormlyWrapperStepperComponent
- SortByPipe

### Generate a new version

Generate the dist of the package.
```
ng build ngx-admin-formly-fields
```
We recommend to test in another application.
```
cp -r dist/ngx-admin-formly-fields ../application/node_modules/
```
Update the version in package.json.
Publish in NPM.
```
 npm publish --access public 
```

### Next Steps
- TBD
