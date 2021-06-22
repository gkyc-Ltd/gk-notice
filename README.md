# [iziToast](http://izitoast.dolce.ninja)
Elegant, responsive, flexible and lightweight notification plugin with no dependencies.

[**izitoast**.marcelodolce.com](http://izitoast.marcelodolce.com)

![capa](http://i.imgur.com/NKk7Rxm.png)

[logo]: http://i.imgur.com/hCYIhep.png "Check icon"
[new]: http://i.imgur.com/41zuVDk.png "New label"
[bug]: http://i.imgur.com/92lu4ln.png "Bug label"

Fast | Responsive | Animated | Lightweight | Customizable | No dependencies | Retina
:-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: 
![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo] | ![alt text][logo]


- All modern browsers are supported (Tested in Chrome, Firefox, Opera, Safari, IE10+ and Edge).
- Bugs? create an issue [here](https://github.com/dolce/iziToast/issues).


___
- ### [Changelog](http://izitoast.marcelodolce.com/#Changelog)
- ### [Options](http://izitoast.marcelodolce.com/#Options)
- ### [Methods](http://izitoast.marcelodolce.com/#Methods)
- ### [Events](http://izitoast.marcelodolce.com/#Events)
- ### [Use](http://izitoast.marcelodolce.com/#Start)
___

#### Gulp Tasks
The default build task
```
gulp
```
Rerun the build task when a file changes
```
gulp watch
```
___


#### [NPM](https://www.npmjs.com/package/izitoast)
```
npm install izitoast --save
```
#### Yarn
```
yarn add izitoast --save
```
#### Bower
```
bower install izitoast --save
```

#### Angular 2 ([NPM](https://www.npmjs.com/package/ng2-izitoast), [Github](https://github.com/plauzul/ng2-izitoast))

```
npm install ng2-izitoast --save
```

#### Vue 2 ([NPM](https://www.npmjs.com/package/vue-izitoast), [Github](https://github.com/arthurvasconcelos/vue-izitoast))

```
npm install vue-izitoast --save
yarn add vue-izitoast
```

#### [GEM](https://github.com/BadAllOff/iziToast-rails)
```
https://github.com/BadAllOff/iziToast-rails
```



### ci cd  规范项目集成eslint commitlint 

npm install --save-dev @commitlint/config-conventional @commitlint/cli npm install husky --save-dev
https://blog.csdn.net/qq_38290251/article/details/111646491
这段配置告诉了git hooks，当我们在当前项目中执行 git commit -m '测试提交' 时将触发commit-msg事件钩子并通知husky，从而执行 commitlint -E HUSKY_GIT_PARAMS命令，也就是我们刚开始安装的./node_modules/.bin/commitlint，它将读取commitlint.config.js配置规则并对我们刚刚提交的测试提交这串文字进行校验，若校验不通过，则在终端输出错误，commit终止。


### webpack模块化打包彻底搞清楚javascript中的require、import和export
Requests that start with a name are treated as module requests and resolve within module directories (node_modules).