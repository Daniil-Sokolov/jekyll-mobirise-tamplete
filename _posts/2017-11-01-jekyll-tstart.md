---
layout: post
title: "Почему столько воды, а сути мало? Когда уже сайт будем создавать?!"
subtitle: "Ликбез на тему ^Почему так много подготовительных действий?^, с места в карьер было бы просто, но для полноты картины все же нужно немного и пофилосовствовать"
description: "4 базовых способа работы с Jekyll, пока что только теория ибо упоминание этих методов имеет место быть"
date: 2017-11-01
categories: Education
tag: "Размышления"
author: Данил
image_path: /assets/images/post4/j1.jpg
---

## Для чего столько программ установлено и заведен аккаунт на GitHub, если не показана суть работы с Jekyll?

----------

### Для этого есть одна веская причина, способов работы с Jekyll не один, их несколько. Я знаю 4.

----------

#### Основные способы работы с Jekyll:

----------

##### 1. Работа с Jekyll локально

В этом случае вы устанавливаете Ruby, Git, редактор кода, скачиваете возможно FTP-менеджер, устанавливаете Jekyll.

После вы работаете с Jekyll локально, работаете в редакторе кода, создаете или устанавливаете тему, пишите посты, а потом либо пушите все изменения в репозиторий на GitHub, либо выполняете команду **jekyll build** и сгенерированный из файлов проекта статический сайт загружаете к себе на сервер через FTP.

----------

##### 2. Работа с Jekyll локально с визуальным интерфейсом

Полностью повторяем первый вариант, но в дополнении устанавливаем плагин **jekyll-admin** и получаем визуальный интерфейс для написания постов и простейших манипуляций. 

Публикуется все так же как в первом варианте пуш на GitHub/ залив на сервер по FTP.

----------

##### 3. Работа с Jekyll без локальной установки, создаем сайт прямо в репозитории на GitHub

В этом случае нам достаточно аккаунта на GitHub.

Создаем аккаунт, выбираем тему форкаем её к себе, в настройках репозитория устанавливаем ветку данного репозитория в качестве GitHub Pages хостинга и получаем ссылку по которой будет отображаться сайт.

Таким образом мы получаем сайт, но работать над ним нужно прямо в GitHub репозитории.

----------

##### 4. Регистрируемся в сервисе с визуальным редактором для репозитория GitHub

Регистрируемся в сервисе, вводим данные от репозитория на GitHub и работаем с контентом, создаем посты в визуальном редакторе, как и в случае с плагином **jekyll-admin**, но с разницей в том что ничего локально устанавливать в такой ситуации не нужно.

----------

## ИМХО

Люди разные и для кого-то будет удобен один вариант, для кого-то другой, мне лично удобно работать по первому варианту, непосредственно с файлами.

Самые главные преимущества этого варианта заключаются в том, что у вас в таком случае есть полная творческая свобода, более быстрое обновление изменений локально и удобство в отправке обновлений в репозиторий или на сервер.