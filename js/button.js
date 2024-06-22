
function start_action() {
    let button = $('#mainButton')
    let button_text = button.text()

    // 开始游戏
    if (button_text === 'Start') {
        let chip = create_chip_data()
        // 显示筹码
        show_chip(chip.chip_data)
        // 保存答案
        $('#ch_answer').html(chip.total_value)
        // 更新按钮
        button.text('Answer')
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

            if (Number(user_answer) !== real_answer) {
                alert('(回答错误) - 正确答案是 ' + real_answer)
            }else{
                alert('Very Good (回答正确)')
            }
            
        }
    }

}