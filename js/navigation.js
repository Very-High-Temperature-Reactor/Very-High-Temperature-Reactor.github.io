function processBibliography(page) {
  var bibliography = '';
  var elements = [];
  var keyIndex = 1;
  for (var key in page.bibliography) {
    if (page.bibliography.hasOwnProperty(key)) {
      bibliography += '<li id="b_'+key+'">'+ page.bibliography[key] +'</li>';
      elements = document.getElementsByName('b_'+key);
      for(var i = 0; i < elements.length ; ++i) {
        elements[i].innerHTML = '['+keyIndex+']';
        elements[i].setAttribute('href','#b_'+key);
      }
    }
    ++keyIndex;
  }

  if(bibliography.length > 0) {
    document.getElementById('#content').innerHTML += '<h4>Bibliografia</h4>' + '<ol>' + bibliography + '</ol>';
  }
}


function loadContent(page) {
  document.getElementById('#content').innerHTML = page.text;
  document.getElementById('#caption').innerHTML = page.index + ". " + page.caption;
  currentPageIndex = page.index-1;

  if(page.bibliography != undefined)
    processBibliography(page);

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  });
}


function loadNext() {
  if(currentPageIndex < pageList.length-1) {
    loadContent(pageList[currentPageIndex+1]);
  }
}

function loadPrev() {
  if(currentPageIndex > 0) {
    loadContent(pageList[currentPageIndex-1]);
  }
}

function createPageList() {
  for (var key in contents) {
    if (contents.hasOwnProperty(key)) {
      pageList[contents[key].index-1] = contents[key];
    }
  }
}
