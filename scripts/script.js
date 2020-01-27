function search() {

    let aC = document.getElementById('foo');
    let ac1 = aC.getElementsByTagName('a');
    
    for (let i = 0; i < ac1.length; i++) {
      let s = document.getElementById('wiSearch').value;
      let sU = s.toUpperCase();
      if (s.trim().length == 0) {
        aC.style.display = "none";
      } else {
        aC.style.display = "block";
      }
      if (ac1[i].textContent.toUpperCase().indexOf(sU) > -1) {
        ac1[i].style.display = "block";
      } else {
        ac1[i].style.display = "none";
      }
    }
    
    }


    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("menuBtn1");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
      let aC = document.getElementById('foo');
      aC.style.display = "none";
    }

    /*function showModal() {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("menuBtn1");
        modal.style.display = "block";
    }*/
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    //function closeModal() {
        //var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    var d = new Date();
    var d1 = new Date().getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    document.getElementById("pulseTitle").innerText = months[d.getMonth()] + " " + d1;