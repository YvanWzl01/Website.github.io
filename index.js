function transition() {
    // Récupérer l'élément avec l'id 'bienvenue'
    var bienvenue = document.getElementById('bienvenue');

    // Ajouter une classe pour déclencher la transition
    bienvenue.classList.add('transition-effect');
   
}

       
       
       function afficherHtml() {
            cacherTousLesTextes(); // cache tous les textes
            document.querySelector('.container_hidden').style.display = 'block';
            document.getElementById('afficherHtml').style.display = 'block'; 
            // '.style' = appliquer le css à l'élément.   
            // '.display = block' = l'élément à afficher devient block

        }

        function afficherCss() {
            cacherTousLesTextes();
            document.querySelector('.container_hidden').style.display = 'block';
            document.getElementById('afficherCss').style.display = 'block';

            
        }

        function afficherJs() {
            cacherTousLesTextes();
            document.querySelector('.container_hidden').style.display = 'block';
            document.getElementById('afficherJs').style.display = 'block';
            
        }

        function afficherNode() {
            cacherTousLesTextes();
            document.querySelector('.container_hidden').style.display = 'block';
            document.getElementById('afficherNode').style.display = 'block';
        }

        function afficherSql() {
            cacherTousLesTextes();
            document.querySelector('.container_hidden').style.display = 'block';
            document.getElementById('afficherSql').style.display = 'block';
        }

        function afficherPhp() {
            cacherTousLesTextes();
            document.querySelector('.container_hidden').style.display = 'block';
            document.getElementById('afficherPhp').style.display = 'block';
        }



        // Fonction pour cacher tous les textes
        function cacherTousLesTextes() {
            var textes = document.querySelectorAll('.hidden_text'); // selectionne tous elements avec la classe '.hidden_text'
            document.querySelector('.container_hidden').style.display = 'none';
            textes.forEach(function (texte) { // parcours tous les éléments 'hidden_text'
                texte.style.display = 'none'; // applique à tous les élément le css et display none
            });
        }
    
        let currentIndex = 0;
        const slider = document.querySelector('.slider');
        const totalSlides = document.querySelectorAll('slider img').length;

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }
        
        function updateSlider() {
            const translateValue = -currentIndex * 100 + '%';
            slider.style.transform = 'translateX(' + translateValue + ')';
        }







        


// slide projets
document.addEventListener("DOMContentLoaded", function () {
    var nbr = 0; // Initialiser la position du slider à 0
    var totalSlides = 4; // Nombre total d'images
    var container = document.querySelector('.slider');
    var g = document.getElementById('boutonG');
    var d = document.getElementById('boutonD');
    g.style.visibility = 'hidden';

    g.addEventListener('click', function () {
        if (nbr > 0) { // Vérifier si la position actuelle est supérieure à 0
            nbr--;
            updateSliderPosition();
            masquer();
            display();
        }
    });

    d.addEventListener('click', function () {
        if (nbr < totalSlides - 1) { // Vérifier si la position actuelle est inférieure au nombre total de slides
            nbr++;
            updateSliderPosition();
            masquer();
            display();
        }
    });

    function updateSliderPosition() {
        container.style.transform = "translate(" + nbr * -90.3 + "vw)";
    }

    function masquer() {
        d.style.visibility = (nbr === totalSlides - 1) ? 'hidden' : 'visible';
        g.style.visibility = (nbr === 0) ? 'hidden' : 'visible';
    }

    function display() {
        // Masquer tous les éléments masquer
        document.querySelectorAll('.masquer').forEach(function (element) {
            element.style.display = 'none';
        });

        document.getElementById('container-txt-projet').style.display = 'none';

        // Afficher le texte en fonction de la position du slider
        switch (nbr) {
            case 0:
                document.getElementById('txt-bubble').style.display = 'block';
                break;
            case 1:
                document.getElementById('txt-zelda').style.display = 'block';
                break;
            case 2:
                document.getElementById('txt-form').style.display = 'block';
                break;
            case 3:
                document.getElementById('txt-irc').style.display = 'block';
                break;
            default:
                break;
        }

        document.getElementById('container-txt-projet').style.display = 'block';
    }

    display();
});




   
   