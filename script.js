let channels = {
    "Home":[
        '<h2>Welcome to my portfolio website!</h2> You can use the channels on the left to navigate through different sections. If you want a quick overview, click my profile on the bottom of the channel list.', 
    ],
    "About Me":[
        "My name is Jeven Shirrell, and I'm currently a junior in high school. My main hobbies are drums, game development and music production",
        "I've always had a passion for coding and programming, making some of my first websites at just 9 years old and a few games at 11. Games and web dev have always been my strong suits.",
        "I'm also very passionate about music, whether that's listening or creating it. My favorite genres are Christian Hip Hop and RnB, and some of my favorite artists are Jon Keith and Torey D'Shaun. I've been mkaing music for around 7 years and drumming for 5.",
        "Some of my goals are to build a succesful career in web development and release a full game on Steam. I also want to be able to do indie game development full time eventually.",
    ],
    "Skills":[
        '<h2>Game development</h2>I\'ve been making video games since I was 11 years old on scratch. I moved from a modded version known as Turbowarp, to Godot in mid-2025 and have been working with it ever since. You can see some of my projects <span class="link" onclick="switchChannel(\'Projects\')">here.</span>',
        '<h2>Web Development</h2>I am currently enrolled in the Coding program at West-MEC. In this program we have covered HTML, CSS, JS, and Jquery to an indermediate level and created many projects with these skills. The program also provides us with Information Technology Specialist OD 301 HTML/CSS and Information Technology Specialist OD 302 Java Script certifications.',
        '<h2>Music</h2>I have been playing the drums for over 5 years and producing for around 7. I have played drums in a band and for my church as well. I have hopped around DAWs for many years until I landed on Ableton in 2024 for production.'
    ],
    "Projects":[
        '<h2><a class="link" href="https://github.com/jevenshirrell/homepage">Personal Homepage</a></h2><img src="./imgs/Screenshot 2026-04-10 105310.png" class="thumb">A personal replacement for the new tab on my browser. This was one of my West-MEC projects.',
        '<h2><a class="link" href="https://livingwaterstudios.itch.io/brushed">Brushed</a></h2><img src="./imgs/Screenshot 2026-04-10 105712.png" class="thumb">A short game made in 2 weeks for the <a class="link" href="https://itch.io/jam/quebles-jam-2026">Queble Game Jam 2026.</a> Made in Godot 4, you play as a character trying to escape a colorless world by painting it.',
        '<h2><a class="link" href="https://jevenshirrell.github.io/pc_store_website/">PC Store Website</a></h2><img src="./imgs/Screenshot 2026-04-10 105737.png" class="thumb">Another West-MEC project that tested our teamwork skills. Two other classmates and I made a multi-page website for a fictional PC store.',
        '<h2><a class="link" href="https://jevenshirrell.github.io/snacks_manager/">Snack Manager</a></h2><img src="./imgs/Screenshot 2026-04-10 105802.png" class="thumb">A more simpler app made to manage a shopping list style snack list. I mainly tried to showcase my design skills with this project. Made for another West-MEC assignment.',
    ],
    "Resume":[
        '<h2><a class="link" href="https://docs.google.com/document/d/1X4ucaNnFKgA3Kagi_PBIr7B_dg8y4qgdT7mXaMCG27o/edit?usp=sharing">Document Link</a></h2>',
        '<h2>Jeven R. Shirrell</h2>jrslivingwaterstudios@gmail.com',
        '<h2>Skills</h2>- Web development<br>- Game development<br>- Music production<br>- Drumming',
        '<h2>Experience</h2><strong>Founder</strong> - AAA 3D Printing Solutions<br>January 2025 - July 2025<br>- Create and sell 3D printed products online<br>- Design and produce custom-ordered 3D printed items<br><br><strong>Freelance Game Developer</strong> - Fiverr<br>August 2023 - August 2024<br>- Create, code, and develop video games based on customer description on Fiverr',
        '<h2>Education</h2><strong>North Valley Christian Academy, Phoenix, AZ</strong> - High School Diploma (In Progress)<br>August 2023 - May 2027<br><br><strong>West-MEC Northeast Campus, Phoenix, AZ</strong><br>July 2025 - May 2027',
        '<h2>Accomplishments</h2>- NVCA Principal’s Honors<br>- Served in Jamaica mission trip in 2023 and 2024 and Ecuador mission trip in 2025 and 2026<br>- Won Best Safe Driving PSA Arizona in the 2025 Streets, Art, SAFE Film Competition<br>',
    ],
    "Contact":[
        '<strong>Email me here: </strong><a href="mailto:jrslivingwaterstudios@gmail.com" class="link">jrslivingwaterstudios@gmail.com<a>',
        `<strong>Or here:</strong>
        <form id="contactForm" action="https://formsubmit.co/421dd47bcd4036fc6f725c7098993d90" method="POST">
            <div class="row">
                <input type="text" id="formName" name="name" placeholder="Name" class="panel"></input>
                <input type="text" id="formEmail" name="email" placeholder="Email" class="panel"></input>
            </div>
            <textarea id="formMessage" name="message" placeholder="Message" class="panel" cols="10" rows="10"></textarea>
            <input type=submit class="button1"></input>
        </form>`,
    ],
}
let channelProgress = [0, 0, 0, 0, 0, 0]
let activeChannel = ''
let typing = false


// profile popup
$('#miniProf').on('click', function() {
    $('#profilePopup').fadeIn(150);
})
// close on outside click
$(document.body).on('click', () => {
    if (!$('#profilePopup').is(':hover') && $('#profilePopup').css('opacity') == '1') {
        $('#profilePopup').fadeOut(150);
    }
})

// channels
$('.channel').on('click', function() {
    switchChannel(this.textContent)
})

// messages
function switchChannel(channel) {
    if (!typing && activeChannel != channel) {
        let idx = Object.keys(channels).indexOf(channel)
        activeChannel = channel
        
        // active channel
        $('.channel').removeClass('activeChannel')
        $(`#channel${idx + 1}`).addClass('activeChannel')

        // close previous channel
        $('#messagesWrapper').children().each(function() {
            $(this).fadeOut(150, () => {
                $(this).remove()
            })
        })
        $('#messagesWrapper').scrollHeight = 0
        // load seen messages
        if (channelProgress[idx] > 0) {
            $.each(channels[activeChannel].slice(0, channelProgress[idx]), (index, value) => {
                setTimeout(() => {
                    newMessage(value)
                    $('#messagesWrapper').children().last().hide().fadeIn(150)
                }, 150)
            })
        }
        // load unseen messages
        if (channelProgress[idx] < channels[activeChannel].length) {
            typing = true
            setTimeout(() => {
                $('#channelName h3').html(channel)
                $('#animWrapper').fadeIn(150).css({'display':'flex'})
                $.each(channels[activeChannel].slice(channelProgress[idx], channels[activeChannel].length), (index, value) => {
                    setTimeout(() => {
                        newMessage(value)
                        $('#messagesWrapper').children().last().hide().delay(1000).fadeIn(150)
                        $('#messagesWrapper').delay(1000).animate({scrollTop: $('#messagesWrapper')[0].scrollHeight}, 300)
        
                        channelProgress[idx]++
                    }, 1150 * index)
                })
                setTimeout(() => {
                    $('#animWrapper').fadeOut(150)
                    typing = false
                }, 1150 * channels[activeChannel].length)
            }, 150 + (idx > 0 ? 150 : 0))
        }
    }
}
function newMessage(text) {
    $('#messagesWrapper').append(`<article class="msg card">
        <img src="./imgs/pfp.png" alt="Profile Picture" class="pfp">
        <div class="textWrapper">
            <h3 class="headerFont">Jeven Shirrell</h3>
            <p>${text}</p>
        </div>
    </article>`)
}

// on start
$(document).on('DOMContentLoaded', () => {
    switchChannel('Home')
})