// TODO: skip btn, save message progress, scroll down on msg
let channels = {
    "Home":[
        '<h2>Welcome to my portfolio website!</h2> You can use the channels on the left to navigate through different sections. If you want a quick overview, click my profile on the bottom of the channel list.', 
        'If you want to skip the typing messages at any time, hit the skip button in the bottom right to show all the messages of a channel.'
    ],
    "About Me":[
        "My name is Jeven Shirrell, and I'm currently a junior in high school. My main hobbies are drums, game development and music production",
        "I've always had a passion for coding and programming, making some of my first websites at just 9 years old and a few games at 11."
    ],
    "Skills":[
        '<h2>Game development</h2>I\'ve been making video games since I was 11 years old on scratch. I moved from a modded version known as Turbowarp, to Godot in mid-2025 and have been working with it ever since. You can see some of my projects <span class="link" onclick="switchChannel(\'Projects\')">here.</span>',
        '<h2>Web Development</h2>I am currently enrolled in the Coding program at West-MEC. In this program we have covered HTML, CSS, and JS to an indermediate level and created many projects with these skills. The program also provides us with Information Technology Specialist OD 301 HTML/CSS and Information Technology Specialist OD 302 Java Script certifications.',
        '<h2>Music</h2>I have been playing the drums for over 5 years and producing for around 7. I have played drums in a band and for my church as well. I have hopped around DAWs for many years until I landed on Ableton in 2024 for production.'
    ],
    "Projects":[
        // TODO: VVVVV publish homepahe to github VVVVV
        '<h2><a class="link" href="#">Personal Homepage</a></h2>A personal replacement for the new tab on my browser. This was one of my West-MEC projects.',
        '<h2><a class="link" href="https://livingwaterstudios.itch.io/brushed">Brushed</a></h2>A short game made in 2 weeks for the <a class="link" href="https://itch.io/jam/quebles-jam-2026">Queble Game Jam 2026.</a> Made in Godot 4, you play as a character trying to escape a colorless world by painting it.',
        '<h2><a class="link" href="https://jevenshirrell.github.io/pc_store_website/">PC Store Website</a></h2>Another West-MEC project that tested our teamwork skills. Two other classmates and I made a multi-page website for a fictional PC store.',
        '<h2><a class="link" href="https://jevenshirrell.github.io/snacks_manager/">Snack Manager</a></h2>A more simpler app made to manage a shopping list style snack list. I mainly tried to showcase my design skills with this project. Made for another West-MEC assignment.',
    ],
    "Resume":[
        // TODO: VVVVV pdf link VVVVVV
        '<h2><a class="link" href="#">PDF Link</a></h2>',
        '<h2>Jeven R. Shirrell</h2>jrslivingwaterstudios@gmail.com',
        '<h2>Skills</h2>- Web development<br>- Game development<br>- Music production<br>- Drumming',
        '<h2>Experience</h2><strong>Founder</strong> - AAA 3D Printing Solutions<br>January 2025 - July 2025<br>- Create and sell 3D printed products online<br>- Design and produce custom-ordered 3D printed items<br><br><strong>Freelance Game Developer</strong> - Fiverr<br>August 2023 - August 2024<br>- Create, code, and develop video games based on customer description on Fiverr',
        '<h2>Education</h2><strong>North Valley Christian Academy, Phoenix, AZ</strong> - High School Diploma (In Progress)<br>August 2023 - May 2027<br><br><strong>West-MEC Northeast Campus, Phoenix, AZ</strong><br>July 2025 - May 2027',
        '<h2>Accomplishments</h2>- NVCA Principal’s Honors<br>- Served in Jamaica mission trip in 2023 and 2024 and Ecuador mission trip in 2025 and 2026<br>- Won Best Safe Driving PSA Arizona in the 2025 Streets, Art, SAFE Film Competition<br>',
    ],
    "Contact":[
        '<strong>Email: </strong><a href="mailto:jrslivingwaterstudios@gmail.com" class="link">jrslivingwaterstudios@gmail.com<a>'
    ],
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
        $('.channel').removeClass('activeChannel')
        $(this).addClass('activeChannel')
        switchChannel(this.textContent)
    } 
})

// add support for checking like previous lines
function switchChannel(channel) {
    typing = true
    activeChannel = channel

    $('#messagesWrapper').children().each(function() {
        $(this).fadeOut(150, () => {
            $(this).remove()
        })
    })
    setTimeout(() => {
        $('#channelName h3').html(channel)
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
// skip button


// on start
$(document).on('DOMContentLoaded', () => {
    switchChannel('Home')
})