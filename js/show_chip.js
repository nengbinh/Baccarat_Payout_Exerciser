
function show_chip(data) {
    console.log(data)
    let seats = $('.seat');
    seats.each(function(index) {

        if (index === 0) { return }

        // 对象
        let chips_obj = $(this).find('.chips')
        // 清空旧数据
        chips_obj.html('');
        // 添加
        data[index - 1].forEach(function(element) {

            if (element === 1) {
                chips_obj.append(
                `<div class="chip">
                            <div class="white"></div>
                            <div class="blue"></div>
                            <div class="white"></div>
                            <div class="blue"></div>
                            <div class="white"></div>
                       </div>`)
            }

            if (element === 5) {
                chips_obj.append(
                `<div class="chip">
                            <div class="white"></div>
                            <div class="yellow"></div>
                            <div class="white"></div>
                            <div class="yellow"></div>
                            <div class="white"></div>
                       </div>`)
            }

            if (element === 25) {
                chips_obj.append(
                `<div class="chip">
                            <div class="white"></div>
                            <div class="purple"></div>
                            <div class="white"></div>
                            <div class="purple"></div>
                            <div class="white"></div>
                       </div>`)
            }

            if (element === 100) {
                chips_obj.append(
                `<div class="chip">
                            <div class="purple"></div>
                            <div class="white"></div>
                            <div class="purple"></div>
                            <div class="white"></div>
                            <div class="purple"></div>
                       </div>`)
            }

        });
    });
}