$(document).ready(function(){
    var yerler = $.getJSON("/api/yerler");
    
    yerler
    .then(yerlerEkle);

    $("#bizimInput").keypress((e)=>{
        if(e.which == 13){
            // alert("haha");
            yeniSehirEkle();
        }
    });
    
    $('.yerler').on('click','.fa',function(){
        var tiklanan = $(this).parent().parent();
        var silinenURL = '/api/yerler/' + tiklanan.data('id');
        // console.log(tiklanan);
        // console.log(tiklanan.data('id'));
        $.ajax({
            method:'DELETE',
            url: silinenURL
        })
        .then((silinenData)=>{
            console.log(silinenData);
            tiklanan.remove();
        })
    });

    $('.yerler').on('click','li',function(){
        //alert("test");
        // console.log($(this).data('ziyaretDurumu'));
        ziyaretDurumuGuncelle($(this));
        
    });
});

function yerlerEkle(yerler){
    yerler.forEach(function(yer){
      yerEkle(yer);
    });
}

function yerEkle(yer){
    var yeniYer =  $('<li class="yerlerimiz">'+yer.isim+ ' <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>');
    
    //silinmesi icin gereken gizli bir id.
    yeniYer.data('id', yer._id);
    // console.log(yer._id);

    //ziyaret edilme durumunu kontrol etmek icin olusturdugumuz data
    yeniYer.data('ziyaretDurumu', yer.ziyaret);
   

    if(yer.ziyaret == true){
        $(yeniYer).addClass("ziyaretEdilmis");
    }
    $('.yerler').append(yeniYer);
}

function yeniSehirEkle(){
    var yeniSehir = $('#bizimInput').val();
    // console.log(yeniSehir);
    $.post('/api/yerler', {isim : yeniSehir})
    .then((yeniEklenenSehir)=>{
        yerEkle(yeniEklenenSehir);
        $('#bizimInput').val('');
    })
}

function ziyaretDurumuGuncelle(yer){
    var guncellemeURL = '/api/yerler/' + yer.data('id');
    var ziyaretDurumu = yer.data('ziyaretDurumu');
    // console.log(ziyaretDurumu);
    var guncelle = {ziyaret: !ziyaretDurumu}
    console.log(guncelle); 
    $.ajax({    
        method: 'PUT',
        url : guncellemeURL,
        data : guncelle
    })
    .then((guncellenmisYer)=>{
        console.log(guncellenmisYer)
        yer.toggleClass("ziyaretEdilmis");
    });
}


