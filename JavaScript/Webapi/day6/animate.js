function animate(obj, target,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值取整 Math.ceil()
        obj.step = (target - obj.offsetLeft) / 10;
        obj.step = obj.step > 0 ? Math.ceil(obj.step) : Math.floor(obj.step);
        if (div.offsetLeft == target) {
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + obj.step + 'px';
    }, 30)
}