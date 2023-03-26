var header = document.getElementsByTagName('header')[0];

        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 100) {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
                }

            else if(scroll >= 100) {
                header.style.backgroundColor = '#fff';
                header.style.boxShadow = '0px 20px 20px rgba(0, 0, 0, 0.05)';
            }
        }
