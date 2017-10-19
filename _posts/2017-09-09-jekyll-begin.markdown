---
layout: post
title:  "Jekyll сайт. Начало."
subtitle: "Генератор статических сайтов, обучение для чайников и не програмистов."
description: "В этом блоге в будущем будут опубликованы статьи на тему того, как создать статический сайт с помощью генератора статических сайтов Jekyll. Весь материал будет излогаться максимально просто, для продвижения этой крутой темы в массы.)))"
date:   2017-10-19
categories: Jekyll-learning
author: Данил
image_path: /assets/images/background514.jpg
images:
- image_path: /assets/images/background514.jpg
  alt: "1"
- image_path: /assets/images/0212.jpg
  alt: "2"
- image_path: /assets/images/gallery05.jpg
  alt: "3"
- image_path: /assets/images/2.jpg
  alt: "4"
- image_path: /assets/images/gallery01.jpg
  alt: "5"
- image_path: /assets/images/gallery00.jpg
  alt: "6"
- image_path: /assets/images/1.jpg
  alt: "7"
- image_path: /assets/images/01.jpg
  alt: "8"
- image_path: /assets/images/3.jpg
  alt: "9"
img: /assets/images/gallery00.jpg
alt-img: gallery01
---


{% include img-plus-gallery.html %}

## Здравствуйте уважаемые посетители ##

### Сегодя поговрим в первую очередь почему всё таки статика, статические сайты ###

Сегодня мы с вами говорим о такой вещи как веб-сайты, они бывают статическими и динамическими, и сегодня мы в принципе будем говорить о том, в чем разница, в чем заключается преимущество одного вида над другим и поговорим немного о недостатках.

В сети интернет на данный момент существует великое множество различных ресурсов, множество различных проектов и все они в браузере отображаются в виде статического **html** документа, эти статические файлы могут быть сверстаными вручную либо могут генерироваться динамически на стороне сервера, в этом собственные заключается различие между статическими и динамическими веб-сайтами.

Статический сайт - сетевой ресурс, который включает в себя статические страницы, которые составляют в итоге единый целостный ресурс, объединённые ссылками между собой. Может иметь мультимедиа контент, то есть аудио, видео файлы, изображения.

Способ вставки в текст кода и снипетов для демонстрации:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}



{% include gallery.html %}

Способ вставки ссылок в текст:

{% highlight ruby %}
Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
{% endhighlight %}

{% include mgpopup.html %}




