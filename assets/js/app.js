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
                        document.getElementById('codigo').setAttribute('',result.text)


                        $.get("/getProductByCode/"+ result.text, function (data){
                            var html = "";


                                html +=  "id: "+data.id+"<br>"+" codigo: "+ data.code+"<br>" + " nome: " + data.name+"<br>" + " descricao: " + data.description ;


                            $("#displayProduct").html(html);
                        })

                    }
                    if (err && !(err instanceof NotFoundException)) {
                        console.error(err)
                        document.getElementById('result').textContent = err
                    }
                })
                console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
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
        var form = new FormData();

        $(this).find("input").each(function(){
            form.append($(this).attr('name'), $(this).val());
        })

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
})

