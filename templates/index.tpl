<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140251925-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-140251925-1');
  </script>

    <!--- basic page needs
    ================================================== -->
    <meta charset="utf-8">
    <title>{{ site.title }}</title>
    <meta name="description" content="{{ site.description }}">
    <meta name="author" content="{{ site.author }}">

    <!-- mobile specific metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/vendor.css">
    <link rel="stylesheet" href="css/main.css">

    <!-- script
    ================================================== -->
    <script src="js/modernizr.js"></script>

    <!-- favicons
    ================================================== -->
    <!-- <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
 -->
</head>

<body id="top">

    <!-- preloader
    ================================================== -->
    <div id="preloader">
        <div id="loader" class="dots-fade">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>


    <!-- header
    ================================================== -->
    <header class="s-header header">



        <a class="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>
        <nav class="header__nav-wrap">

            <h2 class="header__nav-heading h6">Navigate to</h2>

            <ul class="header__nav">
                <li class="current"><a href="index.html" title="Agout me" class="current">About me</a></li>
                <li><a href="https://twitter.com/jkeznikl" title="Twitter">Twitter</a></li>
                <li><a href="https://medium.com/@jkeznikl" title="Blog">Blog</a></li>
                <li><a href="https://github.com/keznikl" title="GitHub">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/keznikl/" title="LinkedIn">LinkedIn</a></li>

            </ul> <!-- end header__nav -->

            <a href="#0" title="Close Menu" class="header__overlay-close close-mobile-menu">Close</a>

        </nav> <!-- end header__nav-wrap -->

    </header> <!-- s-header -->


    <!-- s-content
    ================================================== -->
    <section class="s-content s-content--top-padding">

        <div class="row narrow">
            <div class="col-full s-content__header">
                <h1 class="display-1 display-1--with-line-sep">{{ header.title }}</h1>
                <p class="lead">{{ header.subtitle }}</p>
            </div>
            <div class="social__nav col-full text-center">
                    <ul>
                        <li><a href="https://twitter.com/jkeznikl" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://github.com/keznikl" title="GitHub"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://medium.com/@jkeznikl" title="Blog"><i class="fab fa-medium"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/keznikl/" title="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
        </div>

        <div class="row narrow">
            <div class="col-full s-content__main">
                <p>
                <img src="{{ header.image }}"
                     sizes="(max-width: 2000px) 100vw, 2000px" alt="{{ header.image_alt }}">
                </p>
            </div>
        </div>


        <div class="row narrow add-top-padding .s-content--narrow">

            <div class="">
                <h1>{{ content.title }}</h1>
                <p>{{ content.subtitle }}</p>
            </div>

        </div> <!-- end row -->

        <div class="row entries-wrap add-top-padding narrow">
            <div class="entries">
            {% for e in content.entries %}
                <article class="col-block">
                    <div class="item-entry" data-aos="zoom-in">
                        <div class="item-entry__text">
                            <div class="item-entry__cat">
                                <a href="{{ e.link }}">{{ e.category }}</a>
                            </div>

                            <h1 class="item-entry__title"><a href="{{ e.link }}">{{ e.title }}</a></h1>

                            {% for p in e.paragraphs %}
                            <p>{{ p.text -}}</p>
                            {% endfor %}
                            {% if e.links %}
                            <p>
                                {% for l in e.links %}
                                <a href="{{ l.link }}">{{ l.text }}</a>
                                {% endfor %}
                            </p>
                            {% endif %}
                            <div class="item-entry__date">
                                <a href="single-standard.html">{{ e.footer }}</a>
                            </div>
                        </div>
                    </div> <!-- item-entry -->

                </article> <!-- end article -->
            {% endfor %}
            </div> <!-- end entries -->
        </div> <!-- end entries-wrap -->

            </div> <!-- s-content__main -->
        </div> <!-- end row -->

    </section> <!-- end s-content -->

    <!-- s-footer
    ================================================== -->
    <footer class="s-footer">



        <div class="s-footer__bottom">
            <div class="row">
                <div class="col-full text-center">
                    <ul class="footer-social">
                        <li><a href="https://twitter.com/jkeznikl" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://medium.com/@jkeznikl" title="Blog"><i class="fab fa-medium"></i></a></li>
                        <li><a href="https://github.com/keznikl" title="GitHub"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/keznikl/" title="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-full text-center">
                    <div class="s-footer__copyright">
                        <span><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</span>
                    </div>
                </div>

            </div>
        </div> <!-- end s-footer__bottom -->

        <div class="go-top">
            <a class="smoothscroll" title="Back to Top" href="#top"></a>
        </div>

    </footer> <!-- end s-footer -->


    <!-- Java Script
    ================================================== -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

</body>

</html>
