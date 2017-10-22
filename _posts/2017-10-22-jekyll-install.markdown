---
layout: post
title:  "Jekyll, установка на ОС Windows"
subtitle: "В этом уроке все будет максимально просто, выполняешь пункты инструкции, получаешь профит."
description: "У многих пользователей Windows, особенно не знакомых с работой в терминале и командной строке, установка Jekyll может оказаться веской причиной отказаться от его изучения, так как это немного сложнее чем установка этого генератора на Linux и Mac."
date: 2017-10-22
categories: Education
tag: "Обучение Jekyll"
author: Данил
image_path: /assets/images/post2/j1.jpg
img: /assets/images/post2/j2.jpg
alt-img: gallery01
---

{% include img.html %}

----------

## 1. Установка Ruby на ОС Windows

<a href="/assets/images/post2/j3.jpg" class="library item">
  <img src="/assets/images/post2/j3.jpg" alt="step1">
</a>

----------

1. **Переходим на сайт** установочника Ruby для Windows <a href="https://rubyinstaller.org/" target="_blank">rubyinstaller.org</a>
2. **Скачиваем установочник**, который соответствует разряднности вашей системы (32x или 64x)
3. **Запуcкаем установочник**, в окне на тапе выбора дополнительных параметров проставляем все галочки и устанавливаем Ruby
4. После завершения установки **запускаем командную строку** (Такое окошко с черным фоном и белыми буквами). Можно запустить четырьмя способами:
- Зажимаем кнопку "Win" и нажимаем "R" > вводим короткую команду "cmd"
- Меню "Пуск" > В Windows 10 выбираем пункт "Служебные" > "Выполнить" > вводим короткую команду "cmd"
- Зажимаем клавишу "Shift" и нажимаеи правую кнопку мыши > в выпадающем при этом меню нажимаем пункт "Открыть/Запустить команндную строку", рядом с этим пунктом будет характерный значек
- в нужной нам открытой папке в верхней адресной строке вводим короткую команду "cmd" и нажимаем "Enter"

5. В открывшемся окне команндной строки **проверяем установку ruby и gem**. По очереди вводим эти две команды, если всё установилось, то в окне вы увидите версии установленных Ruby и Gem:
	{% highlight ruby %} 
	 	ruby -v
		gem -v
	{% endhighlight %}

----------

## 2. Установка Jekyll

<a href="/assets/images/post2/j4.jpg" class="library item">
  <img src="/assets/images/post2/j4.jpg" alt="step2">
</a>

### Решение проблеммы с сертификатом сервера

Очень коротко, вводим по почереди 2 команды:
	{% highlight ruby %} 
	 	gem sources --remove https://rubygems.org/
		gem sources -a http://rubygems.org/
	{% endhighlight %}

### Устанавливаем Jekyll

**Снова только команды:**

**Утановка:**
	{% highlight ruby %} 
	 	gem install jekyll bundler
	{% endhighlight %}

С учетом того что мы устранили ошибку сертификатов сервера, Jekyll должен установиться без ошибок и проблем

**Проверка версий и краткая сводка по доступным командам**
	{% highlight ruby %} 
	 	jekyll -v
	 	jekyll -h
	{% endhighlight %}

После ввода этих команнд вы увидете версию Jekyll, которая установилась на ваш компьютер. На момент написания это **jekyll 3.6.0**.

А так же после ввода команды **jekyll -h** вы увидите список команд доступных для ввода и работы с Jekyll.

<a href="/assets/images/post2/j5.png" class="library item">
  <img src="/assets/images/post2/j5.png" alt="step3">
</a>

<a href="/assets/images/post2/j6.png" class="library item">
  <img src="/assets/images/post2/j6.png" alt="step4">
</a>

**Вуаля!!!** 

Jekyll установлен, дальше будем учиться его запускать и работать с файлами проекта.

{% include mgpopup.html %}