function handleResize() {
    var screenWidth = window.innerWidth;
    
    if (screenWidth <= 600) {
      
        document.querySelector('header').style.fontSize = '24px';
        var navLinks = document.querySelectorAll('nav ul li a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.padding = '5px';
        }
        var teamMembers = document.querySelectorAll('.team-member');
        for (var j = 0; j < teamMembers.length; j++) {
            teamMembers[j].style.margin = '10px';
        }
        var teamMemberImages = document.querySelectorAll('.team-member img');
        for (var k = 0; k < teamMemberImages.length; k++) {
            teamMemberImages[k].style.width = '150px';
            teamMemberImages[k].style.height = '150px';
        }
    } else {
        
        document.querySelector('header').style.fontSize = '';
        var navLinks = document.querySelectorAll('nav ul li a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.padding = '';
        }
        var teamMembers = document.querySelectorAll('.team-member');
        for (var j = 0; j < teamMembers.length; j++) {
            teamMembers[j].style.margin = '';
        }
        var teamMemberImages = document.querySelectorAll('.team-member img');
        for (var k = 0; k < teamMemberImages.length; k++) {
            teamMemberImages[k].style.width = '';
            teamMemberImages[k].style.height = '';
        }
    }
}
