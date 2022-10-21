let input = document.querySelectorAll('#value')

function showData() {
    let totalMinutes = 0
    for(var x = 0; x < input.length; x++) {
        a = parseInt(input[x].value)
        i = x%2
        if(i == 0) {
            totalMinutes += a * 60
        } else {
            totalMinutes += a
        }
    }

    hour = parseInt((2400 - totalMinutes) / 60)
    minutes = parseInt(((2400 - totalMinutes) % 60))

    alert("Restam: " + hour + "h" + minutes)

}