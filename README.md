# bootstrap.combobox
基于bootstrap2的一个可输入选择器

* HTML准备
```html
<link href="/view//css/bootstrap.min.css" rel="stylesheet" media="screen">
<script src="/view//js/jquery-1.8.3.min.js"></script>
<script src="/view//js/bootstrap.min.js"></script>
<input type="text" class="input-text">
```

* 调用
```javascript
$(".input-text").combobox({
  data:['item1','item2']
});
```
