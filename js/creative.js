jQuery(document).ready(function(){
    $( function() {
        $( "#slider-vertical" ).slider({
            orientation: "vertical",
            range: "min",
            value: 100,
            min: 100,
            max: 500,
            step: 100,
            change: refreshSwatch,
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
        $( "#amount" ).on( "slidechange", refreshSwatch() );

    } );
	// alert('test');
	// console.log(jQuery('#amount').val());

	jQuery('#amount').keyup(function () {
		console.log(jQuery('#amount').val());
    });



	function refreshSwatch() {
        var exp = document.getElementById("amount").value;
        var back = document.getElementById("vh_wrapper");
        var rocket = document.getElementById("rocket");


        if (exp >= 100 && exp <= 200) {
            back.style.cssText="background-position-y:100%;";
            rocket.style.cssText="top:30%;";
        } else if (exp >= 200 && exp <= 300) {
            back.style.cssText="background-position-y:75%;";
            rocket.style.cssText="top:18%;";
        } else if (exp == 300) {
            back.style.cssText="background-position-y:55%;";
            rocket.style.cssText="top:6%;";
        } else if (exp == 400) {
            back.style.cssText="background-position-y:30%;";
            rocket.style.cssText="top:-6%;";
        } else {
            back.style.cssText="background-position-y:0%;";
            rocket.style.cssText="top:-18%;";
        }
    }

});
