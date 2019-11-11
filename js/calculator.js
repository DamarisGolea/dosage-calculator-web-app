window.dosageCalculator = {
    API_BASE_URL: "http://localhost:8086",

    getByProcedureAndWeight: function (procedureType, weight) {
        if($('msw').value=='bone'){$('thw').innerHTML='bone';
        }else{$('thw').innerHTML=' (thyroid)';};
    }

var $=function( id ){return document.getElementById(id);};
function msystem() {if($(value=='bone'){$('thw').innerHTML=' (Cms)';
}else{$('thw').innerHTML=' (inches)';};
if($('msm').value=='metric'){$('thm').innerHTML=' (Cms)';$('twm').innerHTML=' (Kgs)';}
else{$('thm').innerHTML=' (inches)';$('twm').innerHTML=' (lbs)';};
if($('msf').value=='metric'){$('thf').innerHTML=' (Cms)';$('tneck').innerHTML=' (Cms)';$('twaist').innerHTML=' (Cms)';$('thips').innerHTML=' (Cms)';}
else{$('thf').innerHTML=' (inches)';$('tneck').innerHTML=' (inches)';$('twaist').innerHTML=' (inches)';$('thips').innerHTML=' (inches)';}}

function bmass (){var ms=$('msm').value;
var height=$('hm').value;
var weight=$('wm').value;if(height==null || height.length==0 || weight==null || weight.length==0 ){$('bmi').value="Pl. enter data.";}
else{$('bmi').value="";}
if(ms=='metric'&&height>0){$('bmi').value=Math.round(weight/(height*height/10000)*100)/100+" kg/m2 " }
else if(ms=='us'&&height>0){$('bmi').value=Math.round(703*weight/(height*height)*100)/100+" kg/m2 " }}</script>
