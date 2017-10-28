---
layout: page
title: "Наши инструменты"
subtitle: "Необходимый инструментарий, для удобной работы с Jekyll"
description: "Будет просто гайд по программам которые я использую для работы с Jekyll, а так же список сайтов с большим количеством нужных нам статей"
permalink: /guide/
image_path: /assets/images/gallery00.jpg
links:
- link_path: https://rubyinstaller.org/ 
  title: 1. RubyInstaller
- link_path: https://git-scm.com/ 
  title: 2. Git
- link_path: https://desktop.github.com/ 
  title: 3. GitHub Desktop
- link_path: http://www.sublimetext.com/ 
  title: 4. Sublime text 3
- link_path: https://www.xnview.com/en/ 
  title: 5. XnView
- link_path: https://www.gimp.org/ 
  title: 6. Gimp
- link_path: http://paintnet.ru/
  title: 7. Paint.NET
- link_path: https://mobirise.com/ru/ 
  title: 8. Mobirise
- link_path: http://pingendo.com/ 
  title: 9. Pingendo
tlinks:
- tlink_path: https://github.com/ 
  ttitle: 1. GitHub
- tlink_path: https://jekyllrb.com/ 
  ttitle: 2. Jekyllrb
- tlink_path: https://learn.cloudcannon.com/ 
  ttitle: 3. CloudCannon Learn
- tlink_path: https://www.canva.com/ 
  ttitle: 4. Canva
- tlink_path: http://prgssr.ru/documentation/
  ttitle: 5. Прогрессор
- tlink_path: https://blog.webjeda.com/
  ttitle: 6. WebJeda Blog
- tlink_path: https://www.youtube.com/channel/UC92qVZrw91cEZBpfXamcawA
  ttitle: 7. Html blog
- tlink_path: https://www.youtube.com/channel/UCluPrVk5ACmv2aOXrxuFd-Q
  ttitle: 8. Kiviok
- tlink_path: https://www.youtube.com/user/agragregra
  ttitle: 9. WebDesing Master
---

## Пройдемся по списку нужных нам для обучения программ

<div class="archi-item">
{% for link in page.links %}
	<p><a href="{{ link.link_path }}" target="_blank">{{ link.title }}</a></p>
{% endfor %}
</div>

## Теперь список полезных сайтов и каналов на YouTube

<div class="archi-item">
{% for tlink in page.tlinks %}
	<p><a href="{{ tlink.tlink_path }}" target="_blank">{{ tlink.ttitle }}</a></p>
{% endfor %}
</div>


<style>
  .archi-item a {
    padding: 7px 18px;
    border: 1px solid #eee;
    margin-left: -2px;
    margin-right: -2px;
    background-color: #3396FF;
    display: inline-block;
    color: #fff;
  }

  .archi-item a:hover {    
    
        background-color: #e33;
        color: #fff;
   
 }
</style>