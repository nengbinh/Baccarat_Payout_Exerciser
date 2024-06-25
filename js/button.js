
let result =
    [
        ['0', '', ''],
        ['0', '', ''],
        ['0', '', ''],
        ['0', '', ''],
        ['0', '', ''],
    ]
let result_index = 0


//
$(document).ready(function () {
    show_result()
})

// 显示结果
function show_result() {
    // 获取对象
    let result_obj = $('.result .round')
    // 循环
    result.forEach(function(data, index){
        if (data[1] !== '') {
            result_obj.eq(index).html(`
                <span>#${index + 1}</span>
                <span>${formatTime(Number(data[0]))}</span>
                <span style="color: ${ data[2] === 'c' ? '#33c53e' : 'red' }">${data[1]}</span>
            `)
        }
    })
}

// 数字转换成文本
function formatTime(minutes) {
    // 计算小时和分钟
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;

    // 格式化输出
    let formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedMins = mins < 10 ? `0${mins}` : `${mins}`;

    return `${formattedHours}:${formattedMins}`;
}

// 启动计时器
setInterval(function () {
    let timer = $("#ch_timer")
    let clock = $("#ch_clock span")
    let timer_num = Number(timer.html())
    if (timer_num !== 0) {
        timer_num += 1
        timer.html(timer_num)
        clock.html(formatTime(timer_num))
    }
}, 1000);

// 按钮点击
function start_action() {
    let button = $('#mainButton')
    let button_text = button.text()
    let timer = $("#ch_timer")

    // 开始游戏
    if (button_text === 'Start' || button_text === 'Next') {
        let chip = create_chip_data()
        // 显示筹码
        show_chip(chip.chip_data)
        // 保存答案
        $('#ch_answer').html(chip.total_value)
        // 更新按钮
        button.text('Answer')
        // 更新时间
        timer.html('1')
    }

    // 进行回答
    if (button_text === 'Answer') {
        let ch_type = $('#ch_type').text()
        let ch_answer = $('#ch_answer').text()
        let ch_mult

        if (ch_type === 'panda') { ch_mult = 25 }
        if (ch_type === 'dragon') { ch_mult = 40 }

        let real_answer = Number(ch_answer) * ch_mult

        let user_answer = prompt("What is the answer?", "")
        if (user_answer != null) {

            // 更新结果
            if (Number(user_answer) !== real_answer) {
                alert(`
                (Wrong answer)
                Your answer: ${user_answer}
                Correct answer: ${real_answer}`)
                result[result_index] = [timer.html(), `${user_answer}_${real_answer}`, 'w']
            }else{
                alert('Good answer, you are right!')
                result[result_index] = [timer.html(), `${real_answer}_${real_answer}`, 'c']
            }
            result_index += 1
            show_result()
            // 判断游戏是否玩完了
            if (result_index === 5) {
                // 更新按钮
                button.text('Exit')
            }else{
                //
                alert(`
                Click Next to Continue 
                (点击按钮继续)
                `)
                // 更新按钮
                button.text('Next')
            }
            // 更新时间
            timer.html('0')
        }
    }

    // 退出游戏
    if (button_text === 'Exit'){
        location.reload()
    }

}

// 选择玩法
function select_game(game_type) {
    $('.selector').css('display', 'none')
    $('#table_container').css('display', 'flex')
    $('#ch_type').html(game_type)
    let img = $("#ch_clock img")
    if (game_type === 'panda') {
        img.attr('src', 'img/panda.jpg')
    }else{
        img.attr('src', 'img/dragon.png')
    }
    alert(`
    Click Bottom-Right Button to start exerciser.
    `)
}