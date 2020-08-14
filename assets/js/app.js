/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

import {BrowserMultiFormatReader, NotFoundException} from "@zxing/library";
import $ from "jquery";

window.addEventListener('load', function () {
    let idProduct;
    let selectedDeviceId;
    const codeReader = new BrowserMultiFormatReader()
    console.log('ZXing code reader initialized')
    codeReader.listVideoInputDevices()
        .then((videoInputDevices) => {
            const sourceSelect = document.getElementById('sourceSelect')
            selectedDeviceId = videoInputDevices[0].deviceId
            if (videoInputDevices.length >= 1) {
                videoInputDevices.forEach((element) => {
                    const sourceOption = document.createElement('option')
                    sourceOption.text = element.label
                    sourceOption.value = element.deviceId
                    sourceSelect.appendChild(sourceOption)
                })

                sourceSelect.onchange = () => {
                    selectedDeviceId = sourceSelect.value;
                };

                const sourceSelectPanel = document.getElementById('sourceSelectPanel')
                sourceSelectPanel.style.display = 'block'
            }

            document.getElementById('startButton').addEventListener('click', () => {
                codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
                    if (result) {
                        console.log(result)
                        document.getElementById('result').textContent = result.text
                        document.getElementById('code').value = result.text

                        $.get("/getProductByCode/"+ result.text, function (data,datareview){
                            var html = "";

                            idProduct= data.id;
                                html +=  "id: "+data.id+"<br>"+" codigo: "+ data.code+"<br>" + " nome: " + data.name+"<br>" + " descricao: " + data.description +"<br>";
                            for (var i=0;i<=data["reviews"].length;i++){
                                html +=  " usuario: "+ data.reviews[i].username+"<br>" + " data: " + data.reviews[i].dateTime+"<br>" + " review: " + data.reviews[i].review +"<br>"+ data.reviews[i].score +"<br>";
                            }


                            $("#displayProduct").html(html);
                        })

                    }
                    if (err && !(err instanceof NotFoundException)) {
                        console.error(err)
                        document.getElementById('result').textContent = err
                    }
                })
                console.log(`Started continuous decode from camera with id ${selectedDeviceId}`)
            })



            document.getElementById('test').addEventListener('click', () => {
                document.getElementById('code').value = document.getElementById('codetest').value
                var codetest = document.getElementById('codetest').value
                $.get("/getProductByCode/"+ codetest , function (data,datareview){
                var html = "";

                idProduct= data.id;

                html +=  "id: "+data.id+"<br>"+" codigo: "+ data.code+"<br>" + " nome: " + data.name+"<br>" + " descricao: " + data.description +"<br>" +"foto: "+"<img src='"+data.image+"' id='prodimg'>"+"<br>";
                    console.log(data.image);
                    for (var i=0;i<=data["reviews"].length;i++){
                    if (!data.reviews.hasOwnProperty(i)){
                        continue;
                    }
                    html +=  " usuario: "+ data.reviews[i].username+"<br>" + " data: " + data.reviews[i].dateTime+"<br>" + " review: " + data.reviews[i].review +"<br>"+ data.reviews[i].score +"<br>"+ data.reviews[i].price +"<br>";
                }


                $("#displayProduct").html(html);
            })
            })



            document.getElementById('resetButton').addEventListener('click', () => {
                codeReader.reset()
                document.getElementById('result').textContent = '';
                console.log('Reset.')
            })

        })
        .catch((err) => {
            console.error(err)
        })
    document.getElementById('certo').addEventListener('click', () => {
        //mudar para a funcao codeindb true
        document.getElementById('prodlabel').style="display: block";
        document.getElementById('displayProduct').style="display: block";
        document.getElementById('casefalse').style="display: none";
        document.getElementById('Cadastrar').style="display: none";
        document.getElementById('review').style="display: block";
    })
    document.getElementById('errado').addEventListener('click', () => {
        //mudar para a funcao codeindb false
        document.getElementById('casefalse').style="display: block";
        document.getElementById('prodlabel').style="display: none";
        document.getElementById('displayProduct').style="display: none";
    })
    document.getElementById('add').addEventListener('click', () => {
        document.getElementById('Cadastrar').style="display: block";
        document.getElementById('casefalse').style="display: none";
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

