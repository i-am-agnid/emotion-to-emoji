var prediction_1 = "";
var prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 85,
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id ="capture_image" src="' + data_uri + '">'
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier("", model_loaded);

function model_loaded() {
    console.log('model_loaded')
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classifie(img, gotresult());
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name1").innerhtml = results[0].label;
        document.getElementById("result_emotion_name2").innerhtml = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label = "happy") {
            document.getElementById("update_emoji1").innerHTML = "&#128522";
        }
        if (results[0].label = "sad") {
            document.getElementById("update_emoji1").innerHTML = "&#128548";
        }
        if (results[0].label = "angry") {
            document.getElementById("update_emoji1").innerHTML = "&#128545";
        }
        if (results[1].label = "happy") {
            document.getElementById("update_emoji1").innerHTML = "&#128522";
        }
        if (results[1].label = "sad") {
            document.getElementById("update_emoji1").innerHTML = "&#128548";
        }
        if (results[1].label = "angry") {
            document.getElementById("update_emoji1").innerHTML = "&#128545";
        }

    }
}