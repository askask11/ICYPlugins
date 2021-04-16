$(document).ready(() => {
    //check if it is array
    if (typeof MENGHUA_IMAGES === "undefined" || MENGHUA_IMAGES.constructor !== new Array().constructor)
    {
        MENGHUA_IMAGES = [
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/cherry-blossom.svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/snowflake (1).svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/heart.svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/pawprint.svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/cherry-blossom (1).svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/snowflake.svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/sakura (2).svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/cherry-blossom (2).svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/sakura.svg",
            "https://cdn.jsdelivr.net/gh/askask11/ICYPlugins@master/Images/snowflake (2).svg"
        ]
    }
    //Load the stylesheet for the snowflakes
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://file.jianqinggao.com/r/SnowFlake.css"
    $("head")[0].appendChild(link) // inject required CSS file.


    //set attribute for the parent div which to hold all image divs
    var snowflakes = document.createElement("div")
    snowflakes.classList.add("snowflakes")
    snowflakes.setAttribute("aria-hidden", "true")

    //loop through all the images
    for (var i = 0, maxi = MENGHUA_IMAGES.length > 10 ? 10 : MENGHUA_IMAGES.length; i < maxi; i++)
    {
        var imageObj = MENGHUA_IMAGES[i] // get the object of the image from image array
        var imageWidth = 18;
        var imageDivDOM = document.createElement("div") // the div which to hold the image
        var imageDOM = document.createElement("img") // the image itself
        imageDivDOM.classList.add("snowflake")
        //do a type check, to see if user define the image type or just want to use default value
        if (imageObj.constructor === [].constructor)
        {
            imageWidth = imageObj[1]
            imageObj = imageObj[0] // overwrite the array with string, the URL of the image
        }
        //all set, set the attribute of the image itself
        imageDOM.src = imageObj
        imageDOM.width = imageWidth
        imageDivDOM.appendChild(imageDOM) // put the image DOM inside of the image div
        snowflakes.appendChild(imageDivDOM) // append the imageDivDOM into the parent div
    }
    $("body")[0].appendChild(snowflakes)
});