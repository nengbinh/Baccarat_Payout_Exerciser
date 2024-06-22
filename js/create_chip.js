
let MyChip = [1, 1, 1, 5, 5, 5, 25, 25, 25, 100]

const get_random_chip = () => MyChip[Math.floor((Math.random()*MyChip.length))];

function getRandom(min, max) {
    const floatRandom = Math.random()
    const difference = max - min
    // 介于 0 和差值之间的随机数
    const random = Math.round(difference * floatRandom)
    const randomWithinRange = random + min
    return randomWithinRange
}

function create_chip_data() {
    let mychip_data = [];
    let total_value = 0;
    let chip_value;

    while (true) {
        mychip_data = [];
        total_value = 0;

        // 循环7个桌子
        for (let i = 0; i < 7; i++) {
            let table_data = [];

            // 取筹码个数
            for (let a = 0; a < getRandom(4, 6); a++) {
                chip_value = get_random_chip();
                table_data.push(chip_value);
                total_value += chip_value;
            }

            // 将本桌的筹码按升序排序
            table_data.sort((a, b) => a - b);
            mychip_data.push(table_data);
        }

        if (total_value <= 700) {
            break;
        }
    }

    return {
        'total_value': total_value,
        'chip_data': mychip_data
    }
}