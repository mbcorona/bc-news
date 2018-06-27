(function() {
    'use strict';
    var app = {
        newsapi_key: 'db722839735b4cf18f495e1c76ca77ed',
        news: [],
        container: document.querySelector('.news-container'),
        articleTemplate: document.querySelector('.bc-new'),
    };


    app.displayNews = function() {
        // remove current news
        app.container.innerText = "";

        app.news.forEach(function(n) {
            var article = app.articleTemplate.cloneNode(true);
            article.querySelector('.bc-new-img').src = n.urlToImage || '';
            article.querySelector('.bc-news-title').textContent = n.title;
            article.querySelector('.bc-news-body').textContent = n.description;
            article.removeAttribute('hidden');
            app.container.appendChild(article);
        });

        document.body.classList.remove("loading");
    }

    app.loadnews = function() {
        document.body.classList.add("loading");
        app.news = [];

        var url = 'https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=' + app.newsapi_key;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                app.news = JSON.parse(this.response).articles;
                app.displayNews();
            }
        };

        xhttp.open("GET", url, true);
        xhttp.send();
    }

    app.init = function() {
        app.loadnews();
    }

    document.getElementById('reload-news-btn').addEventListener('click', function() {
        app.loadnews();
    })
    // start app
    app.init();


})();
