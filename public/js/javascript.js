"use strict";
let app = new Vue({
    el: '#app',
    data: {
        message: 'Mr Giga Lich', email: 'giga.chad@meme.fi', phone: '044 1245 678',
        city: 'Espoo', color: '#000000',introduction: 'Hello this is person',
        items: [
            {
                Name: 'Prisma, Iso-Omena', time: '2018 - 2020', type: 'Hyllyttäjä',
                text: 'Olin kaksi vuotta prismalla töiussä.' +
                    ' In aliquet sapien aliquam lacus vulputate fringilla. In cursus sodales augue a mattis. ' +
                    'Aliquam consectetur mauris nec leo blandit, ut gravida massa imperdiet. In eget arcu id enim mattis ultrices. Mauris venenatis luctus luctus.'
            },
            {
                Name: 'Prisma, Iso-Omena', time: '2018 - 2020', type: 'Hyllyttäjä',
                text: 'Olin kaksi vuotta prismalla töiussä.' +
                    ' In aliquet sapien aliquam lacus vulputate fringilla. In cursus sodales augue a mattis. ' +
                    'Aliquam consectetur mauris nec leo blandit, ut gravida massa imperdiet. In eget arcu id enim mattis ultrices. Mauris venenatis luctus luctus.'
            }
        ]

    },
    methods: {

        saveFunc: function () {
            console.log("savetus");
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    console.log(xmlhttp.response);
                    console.log("Kaikki ok!")
                }
            };
            let jsonItems = JSON.stringify(this.items);
            xmlhttp.open("POST", "http://localhost:3000/api/" + this.message + "/" + this.email + "/" +
                this.phone + "/" + this.city + "/" + jsonItems, true);
            xmlhttp.send();
        },
        zippaus: function(){
            var zip = new JSZip();
            zip.file("Hello.txt", "Hello World\n");
            zip.file("Hello2.txt", "Hello World\n");
            var img = zip.folder("images");
            zip.file("gigachad.jpg",'.jpg');
            img.file("chad.webp").async("arraybuffer");
            zip.generateAsync({type:"blob"})
            .then(function(content) {
                // see FileSaver.js
                saveAs(content, "example.zip");
            });

        }

    }


});


/*
    // POST request using fetch with async/await
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataMessage
    };
    const response = await fetch("/api/submitting", requestOptions);
    const data = await response.json();
    this.postId = data.id;

});*/

//const db = require('cv-builder/server/db')


/*
app.get('cv-nuilder/personalia', (req, res) => {
    console.log("Somehting");
    res.end();
});

*/


//document.documentElement.style.setProperty('--border', 'red');
