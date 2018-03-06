# angular 框架搭建步骤
我们的计划为：

 - 一个模块中包含多个页面 
	 - a 
		 - a.module.ts(一次性加载所有组件)
		 - a1Component
		 - a2Componenta
	 - b
		 - b.module.ts（懒加载所有组件）
		 - b1Component
		 - b2Component

```
ng new myPro0001
ng g c main --spec=false
ng g c main/content --spec=false
ng g c main/footer --spec=false
ng g c main/header --spec=false
ng g c main/navbar --spec=false
```
主体框架搭建好 开始content内部搭建

```
ng g m main/content/a
ng g c main/content/a/a1Component --spec=false
ng g c main/content/a/a2Component --spec=false

ng g m main/content/b
ng g c main/content/b/b1Component --spec=false
ng g c main/content/b/b2Component --spec=false

ng g m main/content/c
ng g m main/content/c/c1

```


*app.component.html*
```
<app-main></app-main>
```
*app.module.ts*

> 导入MainModule

*main.module.ts*
> 导出MainComponent 
> 导入RouterModule   是因为content.component.html用到了router-outlet

```
imports:[
RouterModule
],
  exports:[
    MainComponent,
  ]
```

