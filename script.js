let channels = {
    "Home":[
        '<h2>Welcome to my portfolio website!</h2><p>You can use the channels on the left to navigate through different sections. If you want a quick overview, click my profile on the bottom of the channel list.</p>', 
    ],
    "About Me":[
        "<p>My name is Jeven Shirrell, and I'm currently a junior in high school. My main hobbies are drums, game development and music production</p>",
        "<p>I've always had a passion for coding and programming, making some of my first websites at just 9 years old and a few games at 11. Games and web dev have always been my strong suits.</p>",
        "<p>I'm also very passionate about music, whether that's listening or creating it. My favorite genres are Christian Hip Hop and RnB, and some of my favorite artists are Jon Keith and Torey D'Shaun. I've been making music for around 7 years and drumming for 5. I just recently wrote my first fully produced and recorded song called i need You.</p>",
        "<p>Some of my goals are to build a succesful career in web development and release a full game on Steam. I also want to be full time artist eventually.</p>",
    ],
    "Skills":[
        '<h2>Web Development</h2><p>I am currently enrolled in the Coding program at West-MEC. This program covers develpoment in HTML, CSS, JS, Jquery, Tailwind, Node, and react to an indermediate level and I have created many websites with these skills. I have also earned the following relevant certifications from this program:<ul><li>Information Technology Specialist in HTML and CSS</li><li>Information Technology Specialist in HTML5 Application Development</li></ul></p>',
        '<h2>Python</h2><p>The Coding program at West-MEC also covers python to an intermediate level. We focus on puzzles with the language covering topics like math, algorithms, regex, and recursion. By the end of the program I will have earned the following certifications:<ul><li>PCEP – Certified Entry-Level Python Programmer</li><li>PCAP – Certified Associate Python Programmer</li></ul></p>',
        '<h2>Music</h2><p>I have been playing the drums for over 5 years and producing for around 7. I have played drums in a band and for my church as well. I have hopped around DAWs for many years until I landed on Ableton in 2024 for production, which I continue to use. I have been writing music since June 2026, releasing my first song on August 28.</p>',
        '<h2>Game development</h2><p>I\'ve been making video games since I was 11 years old on scratch. I moved from a modded version known as Turbowarp, to Godot in mid-2025 and have been working with it ever since. You can see some of my projects <span class="link" onclick="switchChannel(\'Projects\')">here.</span></p>',
    ],
    "Projects":[
        '<h2><a class="link" href="https://github.com/jevenshirrell/homepage">Personal Homepage</a></h2><img src="./imgs/Screenshot 2026-04-10 105310.png" class="thumb"><p>A personal replacement for the new tab on my browser. This was one of my West-MEC projects made with HTML, CSS, and JS.</p>',
        '<h2><a class="link" href="https://livingwaterstudios.itch.io/reload">RELOAD</a></h2><img src="./imgs/Screenshot 2026-08-13 171743.png" class="thumb"><p>A roguelike game made in 4 days for the <a class="link" href="https://itch.io/jam/gmtk-jam-2026">GMTK Game Jam 2026.</a> Made in Godot 4, you try to reach the end of a medieval cyberpunk without running out of ammo.</p>',
        '<h2><a class="link" href="https://omegaquatics.com/">Omegaquatics</a></h2><img src="./imgs/Screenshot 2026-08-13 172330.png" class="thumb"><p>This website was a storefront I designed for my friend\'s coral business, Omegaquatics. I used Wordpress with the Elementor Pro and WooCommerce plugins to develop it.</p>',
        // '<h2><a class="link" href="https://jevenshirrell.github.io/snacks_manager/">Snack Manager</a></h2><img src="./imgs/Screenshot 2026-04-10 105802.png" class="thumb"><p>A more simpler app made to manage a shopping list style snack list. I mainly tried to showcase my design skills with this project. Made for another West-MEC assignment with HTML and CSS.</p>',
    ],
    "Resume":[
        '<h2><a class="link" target="_blank" href="https://docs.google.com/document/d/1X4ucaNnFKgA3Kagi_PBIr7B_dg8y4qgdT7mXaMCG27o/edit?usp=sharing">Document Link</a></h2>',
        '<h2>Jeven R. Shirrell</h2><p>jrslivingwaterstudios@gmail.com</p>',
        '<h2>Skills</h2><p>- Web development<br>- Game development<br>- Music production<br>- Drumming</p>',
        '<h2>Experience</h2><p><strong>Founder</strong> - AAA 3D Printing Solutions<br>January 2025 - July 2025<br>- Create and sell 3D printed products online<br>- Design and produce custom-ordered 3D printed items<br><br><p><strong>Junior High Coach</strong> - CCV Anthem<br>November 2025 - Present<br>- Challenge and lead 8th grade students to follow Christ<br><br><strong>Team Member</strong> - Shake Shack<br>July 2026 - Present<br>- Lead with genuine warmth and care for team members and guests<br>- Prepare and assemble food orders to Shake Shack standards</p>',
        '<h2>Education</h2><p><strong>North Valley Christian Academy, Phoenix, AZ</strong> - High School Diploma (In Progress)<br>August 2023 - May 2026<br><br><strong>Sunrise Mountain High School, Peoria, AZ</strong> - High School Diploma (In Progress)<br>August 2026 - May 2027<br><br><strong>West-MEC Northeast Campus, Phoenix, AZ</strong><br>July 2025 - May 2027</p>',
        '<h2>Accomplishments</h2><p>- NVCA Principal’s Honors<br>- Served in Jamaica mission trip in 2023 and 2024 and Ecuador mission trip in 2025 and 2026<br>- Won Best Safe Driving PSA Arizona in the 2025 Streets, Art, SAFE Film Competition<br></p>',
    ],
    "Contact":[
        '<p><strong>Email me here: </strong><a href="mailto:jrslivingwaterstudios@gmail.com" class="link">jrslivingwaterstudios@gmail.com<a></p>',
        `<p><strong>Or here:</strong></p>
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
    if ($(window).width() > 768) {
        switchChannel(this.textContent)
    } else {
        $('header').fadeOut(150)
        switchChannel(this.textContent)
        setTimeout(() => {
            $('main').css('display', 'flex').hide().fadeIn(150)
        }, 150)
    }
})

// messages
function switchChannel(channel) {
    if (!typing && activeChannel != channel) {
        let idx = Object.keys(channels).indexOf(channel)
        activeChannel = channel
        
        // active channel
        $('.channel').removeClass('activeChannel')
        $(`#channel${idx + 1}`).addClass('activeChannel')
        $('#channelName h3').html(channel)

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
            ${text}
        </div>
    </article>`)
}

// mobile functionailty
$('.backBtn').on('click', () => {
    if (!typing) {
        $('main').fadeOut(150)
        setTimeout(() => {
            $('header').css('display', 'flex').hide().fadeIn(300)
        }, 150)
    }
})

// on start
$(document).on('DOMContentLoaded', () => {
    switchChannel('Home')
})

$(window).resize(() => {
    if ($(window).width() > 768) {
        $('header').css('display', 'flex')
        $('main').css('display', 'flex')
        console.log('w')
    } else {
        $('header').css('display', 'flex')
        $('main').hide()
    }
})