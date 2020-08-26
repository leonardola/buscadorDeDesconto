import '../css/app.css';
import {BrowserMultiFormatReader, NotFoundException} from "@zxing/library";
import $ from "jquery";
$('.productscreen').hide();
$('.scannerscreen').hide();

window.addEventListener('load', function () {
    let idProduct;
    let selectedDeviceId;
    let countreviews = 0;
    function codeindb(){

        document.getElementById('displayProduct').style="display: block";
        document.getElementById('casefalse').style="display: none";
        document.getElementById('Cadastrar').style="display: none";
        document.getElementById('review').style="display: block";


    }
    function codenotindb(){
        document.getElementById('casefalse').style="display: block";
        document.getElementById('displayProduct').style="display: none";
        document.getElementById('review').style="display: none";
    }

    function offers(){

        $.get("/getsales", function (data){
            var html = "" ;
            var i;

            for (i=0;i<data.length;i++){
                html +=  "<p style='text-align: center'>"+data[i].name+"</p>" +"<br>" +"<img src='"+data[i].image+"' id='prodimage'>"+"<br>" + "<p style='text-align: center'>"+data[i].description+"</p>" +"<br>";

            }
            $("#displaySales").html(html);
        })

    }
    offers();

    const codeReader = new BrowserMultiFormatReader()
    codeReader.listVideoInputDevices()
        .then((videoInputDevices) => {
            const cam = videoInputDevices.length -1;
            selectedDeviceId = videoInputDevices[cam].deviceId

            $('.barcode').on('click', function (){
                codeReader.reset()
                document.getElementById('result').textContent = '';
                codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
                    if (result) {
                        document.getElementById('result').textContent = result.text
                        document.getElementById('code').value = result.text

                        $.get("/getProductByCode/"+ result.text, function (data,datareview){
                            var html = "";
                            console.log(data)

                            idProduct= data.id;

                            html +=  "<p style='text-align: center'>"+data.name+"</p>" +"<br>" +"<img src='"+data.image+"' id='prodimg'>"+"<br>" + "<p style='text-align: center'>"+data.description+"</p>" +"<br>";
                            if(html.search("undefined")==-1) {
                                countreviews=data["reviews"].length;

                                for (var i=0;i<=countreviews;i++){
                                    if (!data.reviews.hasOwnProperty(i)){
                                        continue;
                                    }
                                    html +=  " usuario: "+ data.reviews[i].username+"<br>" + " data: " + data.reviews[i].dateTime+"<br>" + " review: " + data.reviews[i].review +"<br>"+ data.reviews[i].score +"<br>"+" R$"+ data.reviews[i].price +"<br>";
                                }}

                            if (html.search("undefined")==-1){
                                codeindb();
                            }else {
                                codenotindb();
                            }

                            $("#displayProduct").html(html);
                            $('.firstscreen').slideUp();
                            $('.productscreen').slideDown();
                            $('.scannerscreen').slideUp();
                        })

                    }
                    if (err && !(err instanceof NotFoundException)) {
                        console.error(err)
                        document.getElementById('result').textContent = err
                    }
                })
                console.log(`Started continuous decode from camera with id ${selectedDeviceId}`)
            })

        })
        .catch((err) => {
            console.error(err)
        })




    document.getElementById('add').addEventListener('click', () => {
        document.getElementById('Cadastrar').style="display: block";
        document.getElementById('casefalse').style="display: none";
    })
    $('.barcode').on('click', function (){
        $('.firstscreen').slideUp();
        $('.productscreen').slideUp();
        $('.scannerscreen').slideDown();
    })
    $('.back').on('click', function (){
        $('.firstscreen').slideDown();
        $('.productscreen').slideUp();
        $('.scannerscreen').slideUp();
    })
    $('.pricetag').on('click', function (){
        $('.firstscreen').slideDown();
        $('.productscreen').slideUp();
        $('.scannerscreen').slideUp();
    })




    $("#Cadastrar").submit(function (e){
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('review').style="display: block";
        var form = new FormData();
        var files = $('#file')[0].files[0];

        $(this).find("input").each(function(){
            form.append($(this).attr('name'), $(this).val());
        })
        form.append('file',files);



        $.ajax({
            url: "/registerProduct",
            contentType: false,
            processData: false,
            data: form,
            type: 'post',
            success: function (data) {
                alert("enviado");
            }
        });

        
    })

    $("#review").submit(function (e){
        e.preventDefault();
        e.stopPropagation();
        var form = new FormData();

        $(this).find("input").each(function(){
            form.append($(this).attr('name'), $(this).val());
        })

        $.ajax({
            url: "/registerReview/"+ idProduct,
            contentType: false,
            processData: false,
            data: form,
            type: 'post',
            success: function (data) {
                alert("enviado");
            }
        });
    })
})

