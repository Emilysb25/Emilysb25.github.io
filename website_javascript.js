
  }
<script>
    var i = 0;
    var images =[];
    var time = 3000;

    images[0] = 'FF.jpg';
    images[1] = 'ME.jpg';
    images[2] = 'AA.jpg';


  function changeImg(){
      document.slide.src = images[i];
      if(i < images.length - 1){
        i++;
      } else {
        i=0;
      }
      setTimeout("changeImg()", time);
    }
    window.onload = changeImg;
<scipt>
