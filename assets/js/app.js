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

import { BrowserQRCodeReader } from '@zxing/library';

const codeReader = new BrowserQRCodeReader();

codeReader
  .listVideoInputDevices()
  .then(videoInputDevices => {
    videoInputDevices.forEach(device =>
      console.log(`${device.label}, ${device.deviceId}`)
    );
  })
  .catch(err => console.error(err));

 const firstDeviceId = videoInputDevices[0].deviceId;

codeReader
  .decodeOnceFromVideoDevice(firstDeviceId, 'video')
  .then(result => console.log(result.text))
  .catch(err => console.error(err));
