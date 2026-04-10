let channels = {
    "Home":['one', 'i'],
    "About Me":[],
    "Skills":[],
    "Projects":[],
    "Resume":[],
    "Contact":[],
}
let activeChannel = ''
let typing = false


// profile popup
$('#miniProf').on('click', function() {
    $('#profilePopup').fadeToggle(150);
})
// channels
// messages
$('.channel').on('click', function() {
    if (!typing && activeChannel != this.textContent) {
        switchChannel(this.textContent)
    } 
})

function switchChannel(channel) {
    typing = true
    activeChannel = channel
    $('.channel').removeClass('activeChannel')
    $(this).addClass('activeChannel')

    $('#messagesWrapper').children().each(function() {
        $(this).fadeOut(150, () => {
            $(this).remove()
        })
    })
    setTimeout(() => {
        $('#animWrapper').fadeIn(150).css({'display':'flex'})
        $.each(channels[activeChannel], (index, value) => {
            setTimeout(() => {
                $('#messagesWrapper').append(`<div class="msg card">
                    <img src="./imgs/pfp.png" alt="Profile Picture">
                    <div class="textWrapper">
                        <h3 class="headerFont">Jeven Shirrell</h3>
                        <p>${value}</p>
                    </div>
                </div>`)
                $('#messagesWrapper').children().last().hide().delay(1000).fadeIn(150)
            }, 1150 * index)
        })
        setTimeout(() => {
            $('#animWrapper').fadeOut(150)
            typing = false
        }, 1150 * channels[activeChannel].length)
    }, 150)
}

// on start
$(document).on('DOMContentLoaded', () => {
    switchChannel('Home')
})