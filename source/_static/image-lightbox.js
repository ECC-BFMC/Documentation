(function () {
    "use strict";

    function initializeLightbox() {
        var images = document.querySelectorAll(".rst-content img:not(.math)");

        if (!images.length) {
            return;
        }

        var lightbox = document.createElement("div");
        var preview = document.createElement("img");
        var closeButton = document.createElement("button");
        var activeTrigger = null;

        lightbox.className = "bfmc-lightbox";
        lightbox.hidden = true;
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-label", "Expanded image preview");
        lightbox.setAttribute("aria-modal", "true");

        preview.className = "bfmc-lightbox__image";
        preview.alt = "";

        closeButton.className = "bfmc-lightbox__close";
        closeButton.type = "button";
        closeButton.setAttribute("aria-label", "Close image preview");
        closeButton.textContent = "\u00d7";

        lightbox.appendChild(closeButton);
        lightbox.appendChild(preview);
        document.body.appendChild(lightbox);

        function closeLightbox() {
            if (lightbox.hidden) {
                return;
            }

            lightbox.hidden = true;
            document.body.classList.remove("bfmc-lightbox-open");
            preview.removeAttribute("src");

            if (activeTrigger) {
                activeTrigger.focus();
                activeTrigger = null;
            }
        }

        function openLightbox(image) {
            var link = image.closest("a.image-reference");
            var trigger = link || image;

            preview.src = link ? link.href : image.currentSrc || image.src;
            preview.alt = image.alt || "";
            activeTrigger = trigger;
            lightbox.hidden = false;
            document.body.classList.add("bfmc-lightbox-open");
            closeButton.focus();
        }

        Array.prototype.forEach.call(images, function (image) {
            var link = image.closest("a.image-reference");

            if (link) {
                link.setAttribute("aria-label", "Open expanded image preview");
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    openLightbox(image);
                });
            } else {
                image.classList.add("bfmc-lightbox-trigger");
                image.setAttribute("role", "button");
                image.setAttribute("tabindex", "0");
                image.setAttribute("aria-label", "Open expanded image preview");

                image.addEventListener("keydown", function (event) {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openLightbox(image);
                    }
                });

                image.addEventListener("click", function (event) {
                    event.preventDefault();
                    openLightbox(image);
                });
            }
        });

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox || event.target === preview) {
                closeLightbox();
            }
        });

        closeButton.addEventListener("click", closeLightbox);

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeLightbox();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeLightbox);
    } else {
        initializeLightbox();
    }
}());
