// count up
(function (Js, Win) {
  'use strict';

  Win.addEventListener('load', function () {
    var $countUp = Js.findAll('.count-up');
    Js.each($countUp, function (i, countUp) {
      
      var value = parseInt(countUp.innerHTML);
      countUp.innerHTML -= 1000;
      var interval = setInterval(function () {
        if (countUp.innerHTML >= value) {
          clearInterval(interval);
        }
        countUp.innerHTML = parseInt(countUp.innerHTML) + 7;
      }, 1);
    });
  });

}(Javascript, window));


// auto slug
(function (Js, Win) {
  'use strict';

  var AutoSlug = function (n, s) {
    var $name = Js.find(n);
    if ($name) {
      var $slug = Js.find(s);
      $name.on('input', function () {
        $slug.value = Js.removeDiacritics(this.value);
      });
    }
  };

  AutoSlug('#name', '#slug');
  AutoSlug('#category_name', '#category_slug');

}(Javascript, window));


// edit category
(function (Js) {
  'use strict';

  var EditCategory = {
    init: function () {
      return Js.each(this, function (index, trigger) {
        trigger.on('click', function () {
          var
            categoryId = this.getAttribute('data-id'),
            $modal = Js.find('#edit-form'),
            $form  = $modal.find('.form'),
            action = '/admin/categories/' + categoryId;
          
          $form.action = action;

          Js.ajax.get(action + '/edit', function (data) {
            var
              category = JSON.parse(data),
              $categoryName = Js.find('#category_name'),
              $categorySlug = Js.find('#category_slug'),
              $categoryParent = Js.find('#category_parent'),
              $parents = $categoryParent.findAll('option');

            $categoryName.value = category.name;
            $categorySlug.value = category.slug;

            Js.each($parents, function (index, option) {
              option.selected = (category.parent == parseInt(option.value)) ? true : false;
            });
          });
        });
      });
    }
  };

  EditCategory.init.apply(Js.findAll('.modal--trigger'));
}(Javascript));


// Galleries
(function (Js) {
  'use strict';

  // upload
  var $form = Js.find('#new_gallery');
  if ($form) {
    //$form.on('submit', function (event) {
      //event.preventDefault();
      //var data = new FormData(this);

      //Js.ajax.post(this.action, data, function (res) {
        //console.log(res);
      //});
    //});

    Js.find('#file').on('change', function (e) {
      $form.submit();
    });

    // delete
    var $galleries = Js.find('.galleries');
    var $deleteImageBtns = $galleries.findAll('.delete-image');

    Js.each($deleteImageBtns, function (index, deleteBtn) {
      deleteBtn.on('click', function () {
        var id = this.getAttribute('data-id');
        var url = $form.action + '/' + id;
        Js.ajax.post(url, 'DELETE', null, function (res) {
          console.log(res);
        });
        var parent = this.parentNode;
        parent.parentNode.removeChild(parent);
      });
    });
  }
}(Javascript));


(function (Js) {
  'use strict';

  var $uploads = Js.findAll('.image-upload');

  Js.each($uploads, function (index, upload) {
    upload.on('change', function () {
      if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          var $preview = this.parentNode.find('.image-preview');
          $preview.attr({ src: e.target.result });
        }.bind(this);
        
        reader.readAsDataURL(this.files[0]);
      }
    });
  });
}(Javascript));


  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['IE',     113],
      ['Safari',      244],
      ['Firefox',  242],
      ['Coccoc', 211],
      ['Chrome',    752]
    ]);

    var data1 = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Android',     200],
      ['iOS',      120],
      ['Windows Phone',  20]
    ]);

   var data2 = google.visualization.arrayToDataTable([
        ['Tracker', 'Visits', 'Unique visitor', 'Page views'],
        ['Sun', 675, 450, 2398],
        ['Mon', 500, 375, 1724],
        ['Tue', 560, 410, 2893],
        ['Wed', 700, 500, 4582],
        ['Thu', 800, 500, 1940],
        ['Fri', 850, 450, 3520],
        ['Sat', 750, 500, 3000]
    ]);

    var options = {
      title: 'Browser',
      colors: ['#4b4b67', '#e52c65', '#01c48c', '#ee534f', '#ffc85a']
    };

    var options1 = {
      title: 'Device',
      colors: ['#4b4b67', '#e52c65', '#01c48c', '#ee534f', '#ffc85a'],
    };

    var options2 = {
        title: 'Weekly',
        colors: ['#fbcb43', '#34b67a', '#77a7fb'],
        legend: 'bottom',
        bar: {
          groupWidth: '30%'
        },
        chartArea: {
          left: 50,
          top: 50,
          width: '100%'
        },
        hAxis: {
            title: ""
        },
        animation: {
            startup: true,
            duration: 350
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('browser'));
    var chart1 = new google.visualization.PieChart(document.getElementById('device'));
    var chart2 = new google.visualization.ColumnChart(document.getElementById('aaa'));


    chart.draw(data, options);

    chart1.draw(data1, options1);

    chart2.draw(data2, options2);

  }