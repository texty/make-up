/**
 * Created by yevheniia on 16.03.20.
 */


d3.xml("img/words2.svg").then(function(data) {


        d3.select("#zoom").node().append(data.documentElement);
        const svg = d3.select('#zoom svg') ;
        const width = document.querySelector("#zoom").getBoundingClientRect().width;
        svg.attr("width", width);
        const height = document.querySelector("#zoom svg").getBoundingClientRect().height;

        var canvas = d3.select("canvas")
           // .append("canvas")
            .attr("width", width)
            .attr("height", height);

        var context = canvas.node().getContext("2d");

        var DOMURL = window.URL || window.webkitURL || window;
        var svgString = domNodeToString(svg.node());

        var image = new Image();
        var svgBlob = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
        var url = DOMURL.createObjectURL(svgBlob);

        image.onload = function () {
            context.drawImage(image, 0, 0);
            DOMURL.revokeObjectURL(url);
        };

        image.src = url;


        /* додаємо зум */
        canvas.call(d3.zoom()
            .scaleExtent([1, 17])
            .on("zoom", zoom));


        function zoom() {
            var transform = d3.event.transform;
            context.save();
            context.clearRect(0, 0, width, height);
            context.translate(transform.x, transform.y);
            context.scale(transform.k, transform.k);
            context.drawImage(image, 0, 0);
            context.restore();
        }


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", console.log("hi"), resizeCanvas);



});

function domNodeToString(domNode) {
    var element = document.createElement("div");
    element.appendChild(domNode);
    return element.innerHTML;
}
