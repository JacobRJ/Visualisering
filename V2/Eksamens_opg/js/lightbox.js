"use strict"

var galleri = document.querySelector(".gallery")

galleri.addEventListener("click", function(e)
{
    // if element pressed is an img tag and screen is more than 1000px in width
    if(e.target.tagName == "IMG" && window.matchMedia("(min-width: 1000px)").matches)
    {
        var newSrc = e.target.src.split("-")

        var overlay = document.createElement("div")
        overlay.classList.add("overlay")
        document.body.appendChild(overlay)

        var newImage = document.createElement("img")
        newImage.setAttribute("src", newSrc[0] + "-" + newSrc[1] + ".jpg")

        overlay.appendChild(newImage)

        overlay.addEventListener("click", function()
        {
            if (overlay)
            {
                overlay.remove()
            }
        })
    }
})