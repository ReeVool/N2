var header = document.getElementsByTagName('header')[0];
        header.style.backgroundColor = 'transparent';

        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 300) {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
                header.style.color = '#fff';
                } 

            else if(scroll >= 300) {
                header.style.backgroundColor = 'white';
                header.style.boxShadow = '0px 20px 20px rgba(0, 0, 0, 0.05)';
                header.style.color = '#000';
            }
        }