let channels = {
    "Home":['one', 'i'],
    "About Me":[],
    "Skills":[],
    "Projects":[],
    "Resume":[],
    "Contact":[],
}

// profile popup
$('#miniProf').on('click', function() {
    $('#profilePopup').fadeToggle(150);
})
// channels
// messages
$('.channel').on('click', function() {
    $('#messagesWrapper').children().each(function() {
        $(this).fadeOut(150, () => {
            $(this).remove()
        })
    })
    setTimeout(() => {
        $('#animWrapper').fadeIn(150).css({'display':'flex'})
        $.each(channels[this.textContent], (index, value) => {
            setTimeout(() => {
                $('#messagesWrapper').append(`<div class="msg card">
                    <img src="./imgs/pfp.png" alt="Profile Picture">
                    <div class="textWrapper">
                        <h3 class="headerFont">Jeven Shirrell</h3>
                        <p>${value}</p>
                    </div>
                </div>`)
                $('#messagesWrapper').children().last().hide().delay(1000).fadeIn(500)
            }, 1500 * index)
        })
        setTimeout(() => {$('#animWrapper').fadeOut(150)}, 1500 * channels[this.textContent].length)
        
    }, 150)
})