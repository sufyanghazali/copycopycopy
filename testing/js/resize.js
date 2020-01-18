const item = document.querySelector(".item");
let isResizing = false;

item.addEventListener("mousedown", mousedown);

function mousedown(e) {

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        if (!isResizing) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            // update position relative to origin
            const rect = item.getBoundingClientRect();
            item.style.left = rect.left - newX + "px";
            item.style.top = rect.top - newY + "px";

            prevX = e.clientX;
            prevY = e.clientY;
        }
    }

    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
}

const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
        currentResizer = e.target;
        isResizing = true;
        // position of cursor
        let prevX = e.clientX;
        let prevY = e.clientY;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
            const rect = item.getBoundingClientRect();
            const direction = getHandler(e.target);

            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            // update position relative to origin
            switch (direction) {
                case "se":
                    item.style.width = `${rect.width - newX}px`;
                    item.style.height = `${rect.height - newY}px`;
                    break;
                case "ne":
                    item.style.width = `${rect.width - newX}px`;
                    item.style.height = `${rect.height + newY}px`;
                    item.style.top = rect.top - newY + "px";
                    break;
                case "sw":
                    item.style.width = `${rect.width + newX}px`;
                    item.style.height = `${rect.height - newY}px`;
                    item.style.left = rect.left - newX + "px";
                    break;
                case "nw":
                    item.style.width = `${rect.width + newX}px`;
                    item.style.height = `${rect.height + newY}px`;
                    item.style.top = rect.top - newY + "px";
                    item.style.left = rect.left - newX + "px";
                    break;
                default:
                    break;
            }

            prevX = e.clientX;
            prevY = e.clientY;
        }

        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }

        function getHandler(handler) {
            const direction = handler.className.slice(-2);
            return direction;
        }
    }


}