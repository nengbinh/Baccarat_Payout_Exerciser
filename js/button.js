
function start_action() {
    let button = $('#mainButton')
    let button_text = button.text()

    if (button_text === 'Start') {
        let chip = create_chip_data()
        show_chip(chip.chip_data)
        console.log(chip)
    }

}