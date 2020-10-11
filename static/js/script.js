
        $(document).ready(function() {
            $('.menu').on('click', function(){
		        $(this).toggleClass('change');
            });
        });
        $(function() { // Shorthand for $( document ).ready()
            $('.menu').on('click', function(){
		        $('.munu_color').toggleClass('change');
            });
        });
        $(function() { 
            $('.red').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_red');
                $('i, .bold, .regular').removeClass(' set_yellow set_green set_black set_blue');
            });
        });

        $(function() {
            $('.blue').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_blue');
                $('i, .bold, .regular').removeClass('set_red set_yellow set_green set_black ');
            });
        });

        $(function() {
            $('.yellow').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_yellow');
                $('i, .bold, .regular').removeClass('set_red set_green set_black set_blue');
            });
        });
        $(function() {
            $('.green').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_green');
                $('i, .bold, .regular').removeClass('set_red set_yellow set_black set_blue');
            });
        });

        $(function() {
            $('.black').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_black');
                $('i, .bold, .regular').removeClass('set_red set_yellow set_blue set_blue');
            });
        });

        $(function() {
            $('#light').click(function() {
                if( $(this).is(':checked')) {
                    $('body').removeClass('change_body1');
                    $('body').addClass('change_body');
                }
            }); 
        }); 
        $(function() {
            $('#dark').click(function() {
                if( $(this).is(':checked')) {
                    $('body').removeClass('change_body');
                    $('body').addClass('change_body1');
                }
            }); 
        });
 