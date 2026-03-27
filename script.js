(function() {
    // ---------- ДАННЫЕ ПОЛЬЗОВАТЕЛЕЙ ----------
    let users = JSON.parse(localStorage.getItem('vinyl_users')) || [
        { login: 'admin', pass: '1234', role: 'администратор' },
        { login: 'user', pass: '1111', role: 'пользователь' },
        { login: 'moderator', pass: 'mod123', role: 'модератор' },
        { login: 'guest', pass: 'guest', role: 'гость' },
        { login: 'alice', pass: 'alice2023', role: 'пользователь' },
        { login: 'bob', pass: 'bobpass', role: 'пользователь' }
    ];

    function saveUsers() {
        localStorage.setItem('vinyl_users', JSON.stringify(users));
    }

    // ---------- ТОВАРЫ (ОСНОВНОЙ КАТАЛОГ) ----------
    const products = [
        // --- Ранее добавленные альбомы (Kanye, Frank, Billie и др.) ---
        { id: 'p1', title: 'My Beautiful Dark Twisted Fantasy', artist: 'Kanye West', format: 'vinyl', price_rub: 7500, imageFile: 'https://cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/1000x1000.jpg', 
          description_ru: 'Шедевр Канье Уэста, сочетающий хип-хоп, соул и оркестровые элементы. Содержит хиты "Power" и "Runaway".',
          tracklist: ['Dark Fantasy', 'Gorgeous', 'Power', 'All of the Lights', 'Monster', 'So Appalled', 'Devil in a New Dress', 'Runaway', 'Hell of a Life', 'Blame Game', 'Lost in the World', 'Who Will Survive in America'], 
          manufacturer: 'Universal Music', model: 'V-001', year: 2010, label: 'Roc-A-Fella', country: 'USA' },
        { id: 'p2', title: 'Blonde', artist: 'Frank Ocean', format: 'vinyl', price_rub: 7200, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/250px-Blonde_-_Frank_Ocean.jpeg',
          description_ru: 'Признанный критиками альбом Фрэнка Оушена с интроспективными текстами и инновационным продакшеном.',
          tracklist: ['Nikes', 'Ivy', 'Pink + White', 'Be Yourself', 'Solo', 'Skyline To', 'Self Control', 'Good Guy', 'Nights', 'Solo (Reprise)', 'Pretty Sweet', 'Facebook Story', 'Close to You', 'White Ferrari', 'Seigfried', 'Godspeed', 'Futura Free'], 
          manufacturer: 'Boys Don\'t Cry', model: 'B-002', year: 2016, label: 'Boys Don\'t Cry', country: 'USA' },
        { id: 'p3', title: 'Happier Than Ever', artist: 'Billie Eilish', format: 'vinyl', price_rub: 7000, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/4/45/Billie_Eilish_-_Happier_Than_Ever.png',
          description_ru: 'Второй альбом Билли Айлиш, демонстрирующий её зрелый авторский подход и эклектичный стиль.',
          tracklist: ['Getting Older', 'I Didn\'t Change My Number', 'Billie Bossa Nova', 'my future', 'Oxytocin', 'Goldwing', 'Lost Cause', 'Halley\'s Comet', 'Not My Responsibility', 'OverHeated', 'Everybody Dies', 'Your Power', 'NDA', 'Therefore I Am', 'Happier Than Ever', 'Male Fantasy'], 
          manufacturer: 'Darkroom', model: 'BE-003', year: 2021, label: 'Interscope', country: 'USA' },
        { id: 'p4', title: 'Channel Orange', artist: 'Frank Ocean', format: 'vinyl', price_rub: 6900, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/2/28/Channel_ORANGE.jpg',
          description_ru: 'Дебютный студийный альбом Фрэнка Оушена, сочетающий R&B, соул и психоделические звуки.',
          tracklist: ['Start', 'Thinkin Bout You', 'Fertilizer', 'Sierra Leone', 'Sweet Life', 'Super Rich Kids', 'Pilot Jones', 'Crack Rock', 'Pyramids', 'Lost', 'White', 'Monks', 'Bad Religion', 'Pink Matter', 'Forrest Gump', 'End'], 
          manufacturer: 'Def Jam', model: 'FO-001', year: 2012, label: 'Def Jam', country: 'USA' },
        { id: 'p5', title: 'Graduation', artist: 'Kanye West', format: 'vinyl', price_rub: 7300, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/7/70/Graduation_%28album%29.jpg',
          description_ru: 'Третий студийный альбом Канье Уэста, включающий электронные и стадионные звучания.',
          tracklist: ['Good Morning', 'Champion', 'Stronger', 'I Wonder', 'Good Life', 'Can\'t Tell Me Nothing', 'Barry Bonds', 'Drunk and Hot Girls', 'Flashing Lights', 'Everything I Am', 'The Glory', 'Homecoming', 'Big Brother'], 
          manufacturer: 'Roc-A-Fella', model: 'KW-003', year: 2007, label: 'Roc-A-Fella', country: 'USA' },
        { id: 'p6', title: 'IGOR', artist: 'Tyler, the Creator', format: 'vinyl', price_rub: 7100, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/e/e4/Tyler%2C_the_Creator_-_Igor.jpg/330px-Tyler%2C_the_Creator_-_Igor.jpg',
          description_ru: 'Концептуальный альбом Тайлера, создателя, рассказывающий историю любви и разбитого сердца.',
          tracklist: ['IGOR\'S THEME', 'EARFQUAKE', 'I THINK', 'EXACTLY WHAT YOU RUN FROM YOU END UP CHASING', 'RUNNING OUT OF TIME', 'NEW MAGIC WAND', 'A BOY IS A GUN*', 'PUPPET', 'WHAT\'S GOOD', 'GONE, GONE / THANK YOU', 'I DON\'T LOVE YOU ANYMORE', 'ARE WE STILL FRIENDS?'], 
          manufacturer: 'Columbia', model: 'TC-001', year: 2019, label: 'Columbia', country: 'USA' },
        { id: 'p7', title: 'Astroworld', artist: 'Travis Scott', format: 'vinyl', price_rub: 7800, imageFile: 'https://avatars.mds.yandex.net/get-entity_search/941977/350991411/S600xU',
          description_ru: 'Третий студийный альбом Трэвиса Скотта, вдохновлённый закрытым парком развлечений Six Flags AstroWorld.',
          tracklist: ['STARGAZING', 'CAROUSEL', 'SICKO MODE', 'R.I.P. SCREW', 'STOP TRYING TO BE GOD', 'NO BYSTANDERS', 'SKELETONS', 'WAKE UP', '5% TINT', 'NC-17', 'ASTROTHUNDER', 'YOSEMITE', 'CAN\'T SAY', 'WHO? WHAT!', 'BUTTERFLY EFFECT', 'HOUSTONFORNICATION', 'COFFEE BEAN'], 
          manufacturer: 'Epic', model: 'TS-002', year: 2018, label: 'Epic', country: 'USA' },
        { id: 'p8', title: 'Norman F***ing Rockwell!', artist: 'Lana Del Rey', format: 'vinyl', price_rub: 7000, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/25/NormanFuckingRockwell_Artwork.jpg/330px-NormanFuckingRockwell_Artwork.jpg',
          description_ru: 'Шестой студийный альбом Ланы Дель Рей, отмеченный за написание песен и ностальгическую эстетику Америки.',
          tracklist: ['Norman fucking Rockwell', 'Mariners Apartment Complex', 'Venice Bitch', 'Fuck it I love you', 'Doin’ Time', 'Love song', 'Cinnamon Girl', 'How to disappear', 'California', 'The Next Best American Record', 'The greatest', 'Bartender', 'Happiness is a butterfly', 'hope is a dangerous thing for a woman like me to have - but i have it'], 
          manufacturer: 'Interscope', model: 'LDR-006', year: 2019, label: 'Interscope', country: 'USA' },
        { id: 'p9', title: 'The Life of Pablo', artist: 'Kanye West', format: 'cassette', price_rub: 2800, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/f/f4/The_Life_of_Pablo_%28Tidal_Front_Cover%29.png',
          description_ru: 'Седьмой студийный альбом Канье Уэста с хаотичным и госпел-звучанием.',
          tracklist: ['Ultralight Beam', 'Father Stretch My Hands Pt. 1', 'Pt. 2', 'Famous', 'Feedback', 'Low Lights', 'Highlights', 'Freestyle 4', 'I Love Kanye', 'Waves', 'FML', 'Real Friends', 'Wolves', 'Frank\'s Track', 'Siiiiiiiiilver Surffffeeeeer Intermission', '30 Hours', 'No More Parties in LA', 'Facts (Charlie Heat Version)', 'Fade', 'Saint Pablo'], 
          manufacturer: 'GOOD Music', model: 'KW-007', year: 2016, label: 'GOOD Music', country: 'USA' },
        { id: 'p11', title: 'dont smile at me', artist: 'Billie Eilish', format: 'cassette', price_rub: 2100, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Billie_Eilish_-_Don%27t_Smile_at_Me.png/250px-Billie_Eilish_-_Don%27t_Smile_at_Me.png',
          description_ru: 'Дебютный EP Билли Айлиш, включающий её прорывной сингл "Ocean Eyes".',
          tracklist: ['COPYCAT', 'idontwannabeyouanymore', 'my boy', 'watch', 'party favor', 'bellyache', 'ocean eyes', 'hostage', '&burn'], 
          manufacturer: 'Darkroom', model: 'BE-001', year: 2017, label: 'Interscope', country: 'USA' },
        { id: 'p12', title: 'Flower Boy', artist: 'Tyler, the Creator', format: 'cassette', price_rub: 2500, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png/250px-Tyler%2C_the_Creator_-_Flower_Boy.png',
          description_ru: 'Четвёртый студийный альбом Тайлера, создателя, ознаменовавший переход к более мелодичному звучанию.',
          tracklist: ['Foreword', 'Where This Flower Blooms', 'Sometimes...', 'See You Again', 'Who Dat Boy', 'Pothole', 'Garden Shed', 'Boredom', 'I Ain\'t Got Time!', '911 / Mr. Lonely', 'Droppin\' Seeds', 'November', 'Glitter', 'Enjoy Right Now, Today'], 
          manufacturer: 'Columbia', model: 'TC-002', year: 2017, label: 'Columbia', country: 'USA' },
        { id: 'p15', title: 'Yeezus', artist: 'Kanye West', format: 'cd', price_rub: 1600, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Yeezus_album_cover.png/250px-Yeezus_album_cover.png',
          description_ru: 'Шестой студийный альбом Канье Уэста, известный своим абразивным, индустриальным звучанием.',
          tracklist: ['On Sight', 'Black Skinhead', 'I Am a God', 'New Slaves', 'Hold My Liquor', 'I\'m In It', 'Blood on the Leaves', 'Guilt Trip', 'Send It Up', 'Bound 2'], 
          manufacturer: 'Roc-A-Fella', model: 'KW-006', year: 2013, label: 'Roc-A-Fella', country: 'USA' },
        { id: 'p16', title: 'Nostalgia, Ultra', artist: 'Frank Ocean', format: 'cd', price_rub: 1400, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Frank_Ocean_-_Nostalgia%2C_Ultra.png/250px-Frank_Ocean_-_Nostalgia%2C_Ultra.png',
          description_ru: 'Дебютный микстейп Фрэнка Оушена, содержащий сэмплы Coldplay, MGMT и других.',
          tracklist: ['Street Fighter', 'Strawberry Swing', 'Novacane', 'We All Try', 'Bitches Talkin\'', 'Songs for Women', 'Lovecrimes', 'Goldeneye', 'There Will Be Tears', 'Swim Good', 'Dust', 'American Wedding'], 
          manufacturer: 'Self-released', model: 'FO-000', year: 2011, label: 'Self-released', country: 'USA' },
        { id: 'p17', title: 'When We All Fall Asleep, Where Do We Go?', artist: 'Billie Eilish', format: 'cd', price_rub: 1800, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png',
          description_ru: 'Дебютный студийный альбом Билли Айлиш, получивший несколько премий Грэмми.',
          tracklist: ['!!!!!!!', 'bad guy', 'xanny', 'you should see me in a crown', 'all the good girls go to hell', 'wish you were gay', 'when the party\'s over', '8', 'my strange addiction', 'bury a friend', 'ilomilo', 'listen before i go', 'i love you', 'goodbye'], 
          manufacturer: 'Darkroom', model: 'BE-002', year: 2019, label: 'Interscope', country: 'USA' },
        { id: 'p18', title: 'Donda', artist: 'Kanye West', format: 'vinyl', price_rub: 8900, imageFile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Almost_black_square_020305.svg/330px-Almost_black_square_020305.svg.png',
          description_ru: 'Десятый студийный альбом Канье Уэста, включающий госпел-элементы и множество приглашённых звёзд.',
          tracklist: ['Donda Chant', 'Jail', 'God Breathed', 'Off the Grid', 'Hurricane', 'Praise God', 'Jonah', 'Ok Ok', 'Junya', 'Believe What I Say', '24', 'Remote Control', 'Moon', 'Heaven and Hell', 'Donda', 'Keep My Spirit Alive', 'Jesus Lord', 'New Again', 'Tell the Vision', 'Lord I Need You', 'Pure Souls', 'Come to Life', 'No Child Left Behind', 'Jail pt 2', 'Ok Ok pt 2', 'Junya pt 2', 'Jesus Lord pt 2'], 
          manufacturer: 'GOOD Music', model: 'KW-010', year: 2021, label: 'Def Jam', country: 'USA' },
        { id: 'p19', title: '808s & Heartbreak', artist: 'Kanye West', format: 'vinyl', price_rub: 7100, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/808s_%26_Heartbreak.png/250px-808s_%26_Heartbreak.png',
          description_ru: 'Четвёртый студийный альбом, ознаменовавший отход от хип-хопа в сторону электроники и автотюна.',
          tracklist: ['Say You Will', 'Welcome to Heartbreak', 'Heartless', 'Amazing', 'Love Lockdown', 'Paranoid', 'RoboCop', 'Street Lights', 'Bad News', 'See You in My Nightmares', 'Coldest Winter', 'Pinocchio Story'], 
          manufacturer: 'Roc-A-Fella', model: 'KW-004', year: 2008, label: 'Roc-A-Fella', country: 'USA' },
        { id: 'p20', title: 'Late Registration', artist: 'Kanye West', format: 'vinyl', price_rub: 7200, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Late_registration_cd_cover.jpg/250px-Late_registration_cd_cover.jpg',
          description_ru: 'Второй студийный альбом, расширивший звучание дебюта за счёт живых инструментов и оркестровок.',
          tracklist: ['Wake Up Mr. West', 'Heard \'Em Say', 'Touch the Sky', 'Gold Digger', 'Skit #1', 'Drive Slow', 'My Way Home', 'Crack Music', 'Roses', 'Bring Me Down', 'Addiction', 'Skit #2', 'Diamonds from Sierra Leone', 'We Major', 'Skit #3', 'Hey Mama', 'Celebration', 'Skit #4', 'Gone', 'Diamonds from Sierra Leone (Remix)'], 
          manufacturer: 'Roc-A-Fella', model: 'KW-002', year: 2005, label: 'Roc-A-Fella', country: 'USA' },
        { id: 'p21', title: 'The College Dropout', artist: 'Kanye West', format: 'vinyl', price_rub: 7000, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Kanyewest_collegedropout.jpg/250px-Kanyewest_collegedropout.jpg',
          description_ru: 'Дебютный альбом, изменивший хип-хоп благодаря соуловым семплам и остроумным текстам.',
          tracklist: ['Intro', 'We Don\'t Care', 'Graduation Day', 'All Falls Down', 'I\'ll Fly Away', 'Spaceship', 'Jesus Walks', 'Never Let Me Down', 'Get Em High', 'Workout Plan', 'The New Workout Plan', 'Slow Jamz', 'Breathe In Breathe Out', 'School Spirit', 'School Spirit Skit 1', 'School Spirit Skit 2', 'Lil Jimmy Skit', 'Two Words', 'Through the Wire', 'Family Business', 'Last Call'], 
          manufacturer: 'Roc-A-Fella', model: 'KW-001', year: 2004, label: 'Roc-A-Fella', country: 'USA' },
        { id: 'p22', title: 'Dear April', artist: 'Frank Ocean', format: 'vinyl', price_rub: 3500, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Dear_April_Frank_Ocean.jpg/250px-Dear_April_Frank_Ocean.jpg',
          description_ru: 'Сингл, выпущенный ограниченным тиражом на виниле, с акустической и инструментальной версиями.',
          tracklist: ['Dear April (Side A - Acoustic)', 'Dear April (Side B - Instrumental)'], 
          manufacturer: 'Blonded', model: 'FO-003', year: 2020, label: 'Blonded', country: 'USA' },
        { id: 'p23', title: 'Cayendo', artist: 'Frank Ocean', format: 'vinyl', price_rub: 3500, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Cayendo_Frank_Ocean.jpg/250px-Cayendo_Frank_Ocean.jpg',
          description_ru: 'Сингл, выпущенный ограниченным тиражом на виниле, с акустической и инструментальной версиями.',
          tracklist: ['Cayendo (Side A - Acoustic)', 'Cayendo (Side B - Instrumental)'], 
          manufacturer: 'Blonded', model: 'FO-004', year: 2020, label: 'Blonded', country: 'USA' },
        { id: 'p24', title: 'Boys Don\'t Cry', artist: 'Frank Ocean', format: 'vinyl', price_rub: 5000, imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/15/The_Cure_Boys_Don%27t_Cry.jpeg/330px-The_Cure_Boys_Don%27t_Cry.jpeg',
          description_ru: 'Винил с музыкой, выпущенный вместе с альбомом Blonde, содержит эксклюзивные треки.',
          tracklist: ['Magazine content', 'Exclusive tracks not specified'], 
          manufacturer: 'Boys Don\'t Cry', model: 'FO-005', year: 2016, label: 'Boys Don\'t Cry', country: 'USA' },
        { id: 'p25', title: 'Guitar Songs', artist: 'Billie Eilish', format: 'vinyl', price_rub: 4000, imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Billie_Eilish_-_Guitar_Songs.png/250px-Billie_Eilish_-_Guitar_Songs.png',
          description_ru: 'EP из двух акустических песен, выпущенный неожиданно в 2022 году.',
          tracklist: ['TV', 'The 30th'], 
          manufacturer: 'Darkroom', model: 'BE-004', year: 2022, label: 'Interscope', country: 'USA' },
        { id: 'p26', title: 'Live at Third Man Records', artist: 'Billie Eilish', format: 'vinyl', price_rub: 4500, 
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Live_at_Third_Man_Records_-_Billie_Eilish_%28Record_Store_Day_edition%29.jpg/250px-Live_at_Third_Man_Records_-_Billie_Eilish_%28Record_Store_Day_edition%29.jpg',
          description_ru: 'Концертный альбом, записанный в студии Third Man Records, с акустическими версиями песен.',
          tracklist: ['Copycat', 'Idontwannabeyouanymore', 'My Boy', 'Watch', 'Party Favor', 'Bellyache', 'Ocean Eyes', 'Hostage', '&burn'], 
          manufacturer: 'Third Man', model: 'BE-005', year: 2019, label: 'Third Man', country: 'USA' },

        // --- Новые альбомы (30 штук) ---
        { id: 'p31', title: 'The Dark Side of the Moon', artist: 'Pink Floyd', format: 'vinyl', price_rub: 8900,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/15/The_Dark_Side_of_the_Moon.png/330px-The_Dark_Side_of_the_Moon.png',
          description_ru: 'Легендарный альбом Pink Floyd, один из самых продаваемых в истории рока.',
          tracklist: ['Speak to Me', 'Breathe', 'On the Run', 'Time', 'The Great Gig in the Sky', 'Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse'],
          manufacturer: 'Harvest Records', model: 'PF-001', year: 1973, label: 'Harvest', country: 'UK' },
        { id: 'p32', title: 'Nevermind', artist: 'Nirvana', format: 'vinyl', price_rub: 7500,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg',
          description_ru: 'Второй студийный альбом Nirvana, сделавший гранж мейнстримом.',
          tracklist: ['Smells Like Teen Spirit', 'In Bloom', 'Come as You Are', 'Breed', 'Lithium', 'Polly', 'Territorial Pissings', 'Drain You', 'Lounge Act', 'Stay Away', 'On a Plain', 'Something in the Way'],
          manufacturer: 'DGC Records', model: 'NIR-002', year: 1991, label: 'DGC', country: 'USA' },
        { id: 'p33', title: 'Thriller', artist: 'Michael Jackson', format: 'vinyl', price_rub: 8200,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/5/59/Thriller_cover.jpg',
          description_ru: 'Самый продаваемый альбом всех времён, включающий хиты "Billie Jean", "Beat It" и заглавный трек.',
          tracklist: ['Wanna Be Startin\' Somethin\'', 'Baby Be Mine', 'The Girl Is Mine', 'Thriller', 'Beat It', 'Billie Jean', 'Human Nature', 'P.Y.T. (Pretty Young Thing)', 'The Lady in My Life'],
          manufacturer: 'Epic Records', model: 'MJ-001', year: 1982, label: 'Epic', country: 'USA' },
        { id: 'p34', title: 'Back in Black', artist: 'AC/DC', format: 'vinyl', price_rub: 7800,
          imageFile: 'https://avatars.mds.yandex.net/i?id=960a0ab8762344900f2264f65a1387edbbed1eed-5235191-images-thumbs&n=13',
          description_ru: 'Один из самых ярких хард-рок альбомов, посвящённый памяти Бона Скотта.',
          tracklist: ['Hells Bells', 'Shoot to Thrill', 'What Do You Do for Money Honey', 'Given the Dog a Bone', 'Let Me Put My Love Into You', 'Back in Black', 'You Shook Me All Night Long', 'Have a Drink on Me', 'Shake a Leg', 'Rock and Roll Ain\'t Noise Pollution'],
          manufacturer: 'Albert Productions', model: 'ACDC-001', year: 1980, label: 'Albert', country: 'Australia' },
        { id: 'p35', title: 'Rumours', artist: 'Fleetwood Mac', format: 'vinyl', price_rub: 7100,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/e/e3/Rumours.jpg/330px-Rumours.jpg',
          description_ru: 'Один из величайших альбомов о любви и расставании.',
          tracklist: ['Second Hand News', 'Dreams', 'Never Going Back Again', 'Don\'t Stop', 'Go Your Own Way', 'Songbird', 'The Chain', 'You Make Loving Fun', 'I Don\'t Want to Know', 'Oh Daddy', 'Gold Dust Woman'],
          manufacturer: 'Warner Bros.', model: 'FM-001', year: 1977, label: 'Warner Bros.', country: 'USA' },
        { id: 'p36', title: 'To Pimp a Butterfly', artist: 'Kendrick Lamar', format: 'vinyl', price_rub: 8600,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png',
          description_ru: 'Мастер-класс от Кендрика Ламара, сочетающий джаз, фанк и хип-хоп.',
          tracklist: ['Wesley\'s Theory', 'For Free?', 'King Kunta', 'Institutionalized', 'These Walls', 'u', 'Alright', 'For Sale?', 'Momma', 'Hood Politics', 'How Much a Dollar Cost', 'Complexion', 'The Blacker the Berry', 'You Ain\'t Gotta Lie', 'i', 'Mortal Man'],
          manufacturer: 'Top Dawg', model: 'KL-002', year: 2015, label: 'TDE', country: 'USA' },
        { id: 'p37', title: 'good kid, m.A.A.d city', artist: 'Kendrick Lamar', format: 'vinyl', price_rub: 8300,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/03/Good_Kid%2C_M.A.A.D_City.jpg/330px-Good_Kid%2C_M.A.A.D_City.jpg',
          description_ru: 'Концептуальный дебют Кендрика, история взросления в Комптоне.',
          tracklist: ['Sherane a.k.a Master Splinter’s Daughter', 'Bitch, Don’t Kill My Vibe', 'Backseat Freestyle', 'The Art of Peer Pressure', 'Money Trees', 'Poetic Justice', 'good kid', 'm.A.A.d city', 'Swimming Pools', 'Sing About Me', 'Real', 'Compton'],
          manufacturer: 'Top Dawg', model: 'KL-001', year: 2012, label: 'TDE', country: 'USA' },
        { id: 'p38', title: 'Swimming', artist: 'Mac Miller', format: 'vinyl', price_rub: 7900,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Mac_Miller_-_Swimming.png/250px-Mac_Miller_-_Swimming.png',
          description_ru: 'Последний прижизненный альбом Мак Миллера, полный мелодичного хип-хопа.',
          tracklist: ['Come Back to Earth', 'Hurt Feelings', 'What’s the Use?', 'Perfecto', 'Self Care', 'Wings', 'Ladders', 'Small Worlds', 'Conversation Pt. 1', 'Dunno', 'Jet Fuel', '2009', 'So It Goes'],
          manufacturer: 'Warner Bros.', model: 'MM-003', year: 2018, label: 'Warner', country: 'USA' },
        { id: 'p39', title: 'Astroworld', artist: 'Travis Scott', format: 'vinyl', price_rub: 7800,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/e/e0/Travis_Scott_Astroworld.jpg/330px-Travis_Scott_Astroworld.jpg',
          description_ru: 'Третий студийный альбом Трэвиса Скотта, вдохновлённый парком развлечений.',
          tracklist: ['STARGAZING', 'CAROUSEL', 'SICKO MODE', 'R.I.P. SCREW', 'STOP TRYING TO BE GOD', 'NO BYSTANDERS', 'SKELETONS', 'WAKE UP', '5% TINT', 'NC-17', 'ASTROTHUNDER', 'YOSEMITE', 'CAN\'T SAY', 'WHO? WHAT!', 'BUTTERFLY EFFECT', 'HOUSTONFORNICATION', 'COFFEE BEAN'],
          manufacturer: 'Epic', model: 'TS-002', year: 2018, label: 'Epic', country: 'USA' },
        { id: 'p40', title: 'Ctrl', artist: 'SZA', format: 'vinyl', price_rub: 7600,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/SZA_-_Ctrl_cover.png/250px-SZA_-_Ctrl_cover.png',
          description_ru: 'Дебютный альбом SZA, ставший современной классикой R&B.',
          tracklist: ['Supermodel', 'Love Galore', 'Doves in the Wind', 'Drew Barrymore', 'Prom', 'The Weekend', 'Go Gina', 'Garden (Say It Like Dat)', 'Broken Clocks', 'Anything', 'Wavy', 'Normal Girl', 'Pretty Little Birds', '20 Something'],
          manufacturer: 'Top Dawg', model: 'SZA-001', year: 2017, label: 'TDE', country: 'USA' },
        // Альбом Renaissance удалён
        { id: 'p42', title: 'After Hours', artist: 'The Weeknd', format: 'vinyl', price_rub: 8000,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png',
          description_ru: 'Альбом, подаривший нам мегахит "Blinding Lights".',
          tracklist: ['Alone Again', 'Too Late', 'Hardest to Love', 'Scared to Live', 'Snowchild', 'Escape from LA', 'Heartless', 'Faith', 'Blinding Lights', 'In Your Eyes', 'Save Your Tears', 'Repeat After Me', 'After Hours', 'Until I Bleed Out'],
          manufacturer: 'XO', model: 'TW-003', year: 2020, label: 'Republic', country: 'Canada' },
        { id: 'p43', title: 'Future Nostalgia', artist: 'Dua Lipa', format: 'vinyl', price_rub: 7200,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/3/38/Future_Nostalgia.png',
          description_ru: 'Поп-альбом с ярким звучанием в стиле диско.',
          tracklist: ['Future Nostalgia', 'Don\'t Start Now', 'Cool', 'Physical', 'Levitating', 'Pretty Please', 'Hallucinate', 'Love Again', 'Break My Heart', 'Good in Bed', 'Boys Will Be Boys'],
          manufacturer: 'Warner', model: 'DL-002', year: 2020, label: 'Warner', country: 'UK' },
        { id: 'p44', title: 'Fine Line', artist: 'Harry Styles', format: 'vinyl', price_rub: 7400,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Harry_Styles_-_Fine_Line.png/250px-Harry_Styles_-_Fine_Line.png',
          description_ru: 'Второй сольный альбом Гарри Стайлса, полный поп-рока и фолка.',
          tracklist: ['Golden', 'Watermelon Sugar', 'Adore You', 'Lights Up', 'Cherry', 'Falling', 'To Be So Lonely', 'She', 'Sunflower, Vol. 6', 'Canyon Moon', 'Treat People with Kindness', 'Fine Line'],
          manufacturer: 'Columbia', model: 'HS-002', year: 2019, label: 'Columbia', country: 'UK' },
        { id: 'p45', title: 'Whole Lotta Red', artist: 'Playboi Carti', format: 'cassette', price_rub: 3000,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Playboi_Carti_-_Whole_Lotta_Red.png/250px-Playboi_Carti_-_Whole_Lotta_Red.png',
          description_ru: 'Экспериментальный трэп-альбом, ставший культовым.',
          tracklist: ['Rockstar Made', 'Go2DaMoon', 'Stop Breathing', 'Beno!', 'JumpOutTheHouse', 'M3tamorphosis', 'Slay3r', 'No Sl33p', 'New Tank', 'Teen X', 'Meh', 'Vamp Anthem', 'New N3on', 'Control', 'Punk Monk', 'On That Time', 'King Vamp', 'Place', 'Sky', 'Over', 'ILoveUIHateU', 'Die4Guy'],
          manufacturer: 'AWGE', model: 'PC-002C', year: 2020, label: 'Interscope', country: 'USA' },
        { id: 'p46', title: 'Eternal Atake', artist: 'Lil Uzi Vert', format: 'cd', price_rub: 1700,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Eternal_Atake_Lil_Uzi_Vert.jpg/250px-Eternal_Atake_Lil_Uzi_Vert.jpg',
          description_ru: 'Космическая концепция и футуристический звук.',
          tracklist: ['Baby Pluto', 'Lo Mein', 'Silly Watch', 'Pop', 'You Better Move', 'Homecoming', 'I\'m Sorry', 'Celebration Station', 'Bigger Than Life', 'Chrome Heart Tags', 'Bust Me', 'Prices', 'Urgency', 'Venetia', 'Secure the Bag', 'P2', 'Futsal Shuffle 2020', 'That Way'],
          manufacturer: 'Generation Now', model: 'LUV-002', year: 2020, label: 'Atlantic', country: 'USA' },
        { id: 'p47', title: 'Legends Never Die', artist: 'Juice WRLD', format: 'cassette', price_rub: 2800,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/0/04/Legends_Never_Die.png',
          description_ru: 'Посмертный альбом, полный эмоций и хитов.',
          tracklist: ['Anxiety', 'Conversations', 'Titanic', 'Bad Energy', 'Righteous', 'Blood on My Jeans', 'Tell Me U Luv Me', 'Hate the Other Side', 'Get Through It', 'Life\'s a Mess', 'Come & Go', 'I Want It', 'Fighting Demons', 'Wishing Well', 'Screw Juice', 'Up Up and Away', 'The Man, The Myth, The Legend', 'Stay High', 'Can\'t Die', 'Man of the Year', 'Juice WRLD Speaks'],
          manufacturer: 'Grade A', model: 'JW-002', year: 2020, label: 'Interscope', country: 'USA' },
        { id: 'p48', title: 'Led Zeppelin IV', artist: 'Led Zeppelin', format: 'vinyl', price_rub: 8700,
          imageFile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Zeppelin_IV.jpg/250px-Zeppelin_IV.jpg',
          description_ru: 'Четвёртый альбом Led Zeppelin, содержащий легендарный "Stairway to Heaven".',
          tracklist: ['Black Dog', 'Rock and Roll', 'The Battle of Evermore', 'Stairway to Heaven', 'Misty Mountain Hop', 'Four Sticks', 'Going to California', 'When the Levee Breaks'],
          manufacturer: 'Atlantic Records', model: 'LZ-004', year: 1971, label: 'Atlantic', country: 'UK' },
        { id: 'p49', title: 'Hotel California', artist: 'Eagles', format: 'vinyl', price_rub: 7600,
          imageFile: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Hotel_California_by_the_Eagles_US_vinyl_single.png/250px-Hotel_California_by_the_Eagles_US_vinyl_single.png',
          description_ru: 'Один из самых продаваемых альбомов всех времён, заглавный трек стал визитной карточкой группы.',
          tracklist: ['Hotel California', 'New Kid in Town', 'Life in the Fast Lane', 'Wasted Time', 'Victim of Love', 'Pretty Maids All in a Row', 'Try and Love Again', 'The Last Resort'],
          manufacturer: 'Asylum Records', model: 'EAG-001', year: 1976, label: 'Asylum', country: 'USA' },
        { id: 'p50', title: 'Appetite for Destruction', artist: 'Guns N\' Roses', format: 'vinyl', price_rub: 8000,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/2/21/Appetite_for_Destruction.png',
          description_ru: 'Дебютный альбом Guns N\' Roses, один из самых успешных дебютов в истории рока.',
          tracklist: ['Welcome to the Jungle', 'It\'s So Easy', 'Nightrain', 'Out ta Get Me', 'Mr. Brownstone', 'Paradise City', 'My Michelle', 'Think About You', 'Sweet Child o\' Mine', 'You\'re Crazy', 'Anything Goes', 'Rocket Queen'],
          manufacturer: 'Geffen Records', model: 'GNR-001', year: 1987, label: 'Geffen', country: 'USA' },
        { id: 'p51', title: '1989', artist: 'Taylor Swift', format: 'vinyl', price_rub: 7900,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Taylor_Swift_-_1989.png',
          description_ru: 'Первый официальный поп-альбом Тейлор Свифт, принёсший ей две «Грэмми».',
          tracklist: ['Welcome to New York', 'Blank Space', 'Style', 'Out of the Woods', 'All You Had to Do Was Stay', 'Shake It Off', 'I Wish You Would', 'Bad Blood', 'Wildest Dreams', 'How You Get the Girl', 'This Love', 'I Know Places', 'Clean'],
          manufacturer: 'Big Machine', model: 'TS-005', year: 2014, label: 'Big Machine', country: 'USA' },
        { id: 'p52', title: 'Lover', artist: 'Taylor Swift', format: 'vinyl', price_rub: 7700,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5c/Lover_%28album_cover%29.jpg/330px-Lover_%28album_cover%29.jpg',
          description_ru: 'Седьмой студийный альбом, наполненный романтикой и оптимизмом.',
          tracklist: ['I Forgot That You Existed', 'Cruel Summer', 'Lover', 'The Man', 'The Archer', 'I Think He Knows', 'Miss Americana & the Heartbreak Prince', 'Paper Rings', 'Cornelia Street', 'Death by a Thousand Cuts', 'London Boy', 'Soon You\'ll Get Better', 'False God', 'You Need to Calm Down', 'Afterglow', 'Me!', 'It\'s Nice to Have a Friend', 'Daylight'],
          manufacturer: 'Republic Records', model: 'TS-007', year: 2019, label: 'Republic', country: 'USA' },
        { id: 'p53', title: 'Thank U, Next', artist: 'Ariana Grande', format: 'vinyl', price_rub: 7100,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/7/71/Thank_U%2C_Next_%28альбом%29.jpg',
          description_ru: 'Пятый студийный альбом Арианы Гранде, ставший мировым хитом.',
          tracklist: ['Imagine', 'Needy', 'NASA', 'Bloodline', 'Fake Smile', 'Bad Idea', 'Ghostin', 'In My Head', '7 Rings', 'Thank U, Next', 'Break Up with Your Girlfriend, I\'m Bored'],
          manufacturer: 'Republic Records', model: 'AG-005', year: 2019, label: 'Republic', country: 'USA' },
        { id: 'p54', title: 'DAMN.', artist: 'Kendrick Lamar', format: 'vinyl', price_rub: 8200,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Kendrick_Lamar_Damn_cover.jpg/330px-Kendrick_Lamar_Damn_cover.jpg',
          description_ru: 'Пулитцеровский альбом Кендрика, сочетающий хардкор-рэп и размышления о жизни.',
          tracklist: ['Blood', 'DNA', 'Yah', 'Element', 'Feel', 'Loyalty', 'Pride', 'Humble', 'Lust', 'Love', 'XXX', 'Fear', 'God', 'Duckworth'],
          manufacturer: 'Top Dawg', model: 'KL-003', year: 2017, label: 'TDE', country: 'USA' },
        { id: 'p55', title: 'Scorpion', artist: 'Drake', format: 'vinyl', price_rub: 8300,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Drake_—_Scorpion.jpg/330px-Drake_—_Scorpion.jpg',
          description_ru: 'Двойной альбом Дрейка, побивший рекорды стриминга.',
          tracklist: ['Survival', 'Nonstop', 'Elevate', 'Emotionless', 'God\'s Plan', 'I\'m Upset', '8 Out of 10', 'Mob Ties', 'Can\'t Take a Joke', 'Sandra\'s Rose', 'Talk Up', 'Is There More', 'Peak', 'Summer Games', 'Jaded', 'Nice for What', 'Finesse', 'Ratchet Happy Birthday', 'That\'s How You Feel', 'Blue Tint', 'In My Feelings', 'Don\'t Matter to Me', 'After Dark', 'Final Fantasy', 'March 14'],
          manufacturer: 'Young Money', model: 'DR-005', year: 2018, label: 'Republic', country: 'Canada' },
        { id: 'p56', title: 'Rodeo', artist: 'Travis Scott', format: 'vinyl', price_rub: 7900,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/9/93/Rodeo_TS.jpg',
          description_ru: 'Дебютный студийный альбом Трэвиса Скотта, определивший его фирменное звучание.',
          tracklist: ['Pornography', 'Oh My Dis Side', '3500', 'Wasted', '90210', 'Pray 4 Love', 'Nightcrawler', 'Piss on Your Grave', 'Antidote', 'Impossible', 'Maria I\'m Drunk', 'Flying High', 'I Can Tell', 'Apple Pie'],
          manufacturer: 'Epic', model: 'TS-001', year: 2015, label: 'Epic', country: 'USA' },
        { id: 'p57', title: 'Die Lit', artist: 'Playboi Carti', format: 'vinyl', price_rub: 7600,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c6/Die_Lit_by_Playboi_Carti.jpg/330px-Die_Lit_by_Playboi_Carti.jpg',
          description_ru: 'Дебютный студийный альбом Playboi Carti, известный энергичными треками.',
          tracklist: ['Long Time', 'R.I.P.', 'Lean 4 Real', 'Old Money', 'Love Hurts', 'Shoota', 'Right Now', 'Poke It Out', 'Home', 'Fell in Luv', 'Foreign', 'Pull Up', 'Mileage', 'FlatBed Freestyle', 'No Time', 'Middle of the Summer', 'Choppa Won\'t Miss', 'R.I.P. Fredo', 'Top', 'Nickelodeon'],
          manufacturer: 'AWGE', model: 'PC-001', year: 2018, label: 'Interscope', country: 'USA' },
        { id: 'p58', title: 'AM', artist: 'Arctic Monkeys', format: 'vinyl', price_rub: 7300,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2a/Arctic_Monkeys_AM_cover.jpg/330px-Arctic_Monkeys_AM_cover.jpg',
          description_ru: 'Пятый студийный альбом Arctic Monkeys, вдохновлённый хип-хопом и R&B.',
          tracklist: ['Do I Wanna Know?', 'R U Mine?', 'One for the Road', 'Arabella', 'I Want It All', 'No. 1 Party Anthem', 'Mad Sounds', 'Fireside', 'Why\'d You Only Call Me When You\'re High?', 'Snap Out of It', 'Knee Socks', 'I Wanna Be Yours'],
          manufacturer: 'Domino', model: 'AM-005', year: 2013, label: 'Domino', country: 'UK' },
        // Альбом Is This It удалён
        { id: 'p60', title: 'Random Access Memories', artist: 'Daft Punk', format: 'vinyl', price_rub: 9000,
          imageFile: 'https://upload.wikimedia.org/wikipedia/ru/2/26/Daft_Punk_-_Random_Access_Memories.png',
          description_ru: 'Альбом, получивший «Грэмми» за лучший альбом года, с хитом "Get Lucky".',
          tracklist: ['Give Life Back to Music', 'The Game of Love', 'Giorgio by Moroder', 'Within', 'Instant Crush', 'Lose Yourself to Dance', 'Touch', 'Get Lucky', 'Beyond', 'Motherboard', 'Fragments of Time', 'Doin\' It Right', 'Contact'],
          manufacturer: 'Columbia', model: 'DP-004', year: 2013, label: 'Columbia', country: 'France' }
    ];

    const coverTexts = {
        p1: "MBDTF · Kanye West",
        p2: "Blonde · Frank Ocean",
        p3: "Happier Than Ever",
        p4: "Channel Orange",
        p5: "Graduation",
        p6: "IGOR",
        p7: "Astroworld",
        p8: "NFR!",
        p9: "TLOP",
        p10: "Endless",
        p11: "dont smile at me",
        p12: "Flower Boy",
        p15: "Yeezus",
        p16: "Nostalgia, Ultra",
        p17: "WWAFAWDWG?",
        p18: "Donda",
        p19: "808s & Heartbreak",
        p20: "Late Registration",
        p21: "The College Dropout",
        p22: "Dear April",
        p23: "Cayendo",
        p24: "Boys Don't Cry",
        p25: "Guitar Songs",
        p26: "Live at Third Man",
        p31: "Dark Side of the Moon",
        p32: "Nevermind",
        p33: "Thriller",
        p34: "Back in Black",
        p35: "Rumours",
        p36: "To Pimp a Butterfly",
        p37: "good kid, m.A.A.d city",
        p38: "Swimming",
        p39: "Astroworld",
        p40: "Ctrl",
        p42: "After Hours",
        p43: "Future Nostalgia",
        p44: "Fine Line",
        p45: "Whole Lotta Red",
        p46: "Eternal Atake",
        p47: "Legends Never Die",
        p48: "Led Zeppelin IV",
        p49: "Hotel California",
        p50: "Appetite for Destruction",
        p51: "1989",
        p52: "Lover",
        p53: "Thank U, Next",
        p54: "DAMN.",
        p55: "Scorpion",
        p56: "Rodeo",
        p57: "Die Lit",
        p58: "AM",
        p60: "Random Access Memories"
    };

    function generateAlbumCover(id, artist, title) {
        let displayText = coverTexts[id] || (title + ' · ' + artist);
        const words = displayText.split(' ');
        let lines = [], currentLine = '';
        for (let word of words) {
            if ((currentLine + ' ' + word).length <= 22) {
                currentLine += (currentLine ? ' ' : '') + word;
            } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;
            }
        }
        if (currentLine) lines.push(currentLine);
        lines = lines.slice(0, 3);
        const gradientStart = '#3a3a3c', gradientEnd = '#1c1c1e', textColor = '#f5f5f7';
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${gradientStart}"/><stop offset="100%" stop-color="${gradientEnd}"/></linearGradient></defs><rect width="200" height="200" fill="url(#grad)"/>`;
        const yStart = 70, lineHeight = 25;
        lines.forEach((line, i) => svg += `<text x="100" y="${yStart + i * lineHeight}" font-family="Arial" font-size="14" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${line}</text>`);
        svg += `<circle cx="100" cy="100" r="40" fill="none" stroke="#ffffff20" stroke-width="1" stroke-dasharray="4 4"/></svg>`;
        return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
    }

    function getProductImageUrl(product) {
        return product.imageFile || generateAlbumCover(product.id, product.artist, product.title);
    }

    function getRussianFormat(format) {
        switch(format) {
            case 'vinyl': return 'винил';
            case 'cassette': return 'кассета';
            case 'cd': return 'CD';
            default: return format;
        }
    }

    function getProductDescription(product) {
        return product.description_ru || 'Нет описания';
    }

    // ---------- ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ----------
    const themeSwitcher = document.getElementById('themeSwitcher');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeSwitcher) {
            const icon = themeSwitcher.querySelector('i');
            if (icon) icon.className = 'fa-regular fa-moon';
        }
    }

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            const icon = themeSwitcher.querySelector('i');
            if (icon) {
                icon.className = isDark ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
            }
        });
    }

    // ---------- АВТОРИЗАЦИЯ ----------
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    const accountBtn = document.getElementById('accountBtn');
    const authModal = document.getElementById('authModal');
    const authModalClose = document.getElementById('authModalClose');
    const authModalContainer = document.getElementById('authModalContainer');
    const overlay = document.getElementById('overlay');

    let cart = [];
    let favorites = [];

    function loadUserData(login) {
        const savedCart = localStorage.getItem(`cart_${login}`);
        const savedFav = localStorage.getItem(`favorites_${login}`);
        cart = savedCart ? JSON.parse(savedCart) : [];
        favorites = savedFav ? JSON.parse(savedFav) : [];
        updateCounts();
        renderCartSidebar();
        renderFavSidebar();
        renderProducts();
    }

    function saveCart() {
        if (currentUser) {
            localStorage.setItem(`cart_${currentUser.login}`, JSON.stringify(cart));
        }
    }

    function saveFavorites() {
        if (currentUser) {
            localStorage.setItem(`favorites_${currentUser.login}`, JSON.stringify(favorites));
        }
    }

    function updateAuthUI() {
        const existingGreeting = document.querySelector('.user-greeting');
        if (existingGreeting) existingGreeting.remove();

        if (currentUser) {
            const greeting = document.createElement('span');
            greeting.className = 'user-greeting';
            greeting.textContent = `👤 ${currentUser.login}`;
            greeting.addEventListener('click', logout);
            if (accountBtn) {
                accountBtn.insertAdjacentElement('afterend', greeting);
            }
            accountBtn.innerHTML = '<i class="fa-regular fa-circle-user"></i>';
            loadUserData(currentUser.login);
        } else {
            accountBtn.innerHTML = '<i class="fa-regular fa-user"></i>';
            cart = [];
            favorites = [];
            updateCounts();
            renderCartSidebar();
            renderFavSidebar();
            renderProducts();
        }
    }

    function openAuthModal() {
        if (authModal) {
            authModal.classList.add('open');
            if (overlay) overlay.classList.add('show');
            renderAuthModal();
        }
    }

    function closeAuthModal() {
        if (authModal) {
            authModal.classList.remove('open');
            if (overlay) overlay.classList.remove('show');
        }
    }

    function renderAuthModal() {
        if (!authModalContainer) return;
        authModalContainer.innerHTML = `
            <div class="auth-tabs">
                <div class="auth-tab active" id="modalLoginTab">Вход</div>
                <div class="auth-tab" id="modalRegisterTab">Регистрация</div>
            </div>
            <div id="modalAuthFormContainer"></div>
        `;
        document.getElementById('modalLoginTab').addEventListener('click', () => {
            document.getElementById('modalLoginTab').classList.add('active');
            document.getElementById('modalRegisterTab').classList.remove('active');
            renderModalLoginForm();
        });
        document.getElementById('modalRegisterTab').addEventListener('click', () => {
            document.getElementById('modalRegisterTab').classList.add('active');
            document.getElementById('modalLoginTab').classList.remove('active');
            renderModalRegisterForm();
        });
        renderModalLoginForm();
    }

    function renderModalLoginForm() {
        const container = document.getElementById('modalAuthFormContainer');
        if (!container) return;
        container.innerHTML = `
            <div class="auth-form">
                <input type="text" id="modalLogin" placeholder="Логин" autocomplete="off">
                <input type="password" id="modalPassword" placeholder="Пароль">
                <div class="auth-error" id="modalAuthError"></div>
                <button class="auth-btn" id="modalLoginBtn">Войти</button>
            </div>
        `;
        document.getElementById('modalLoginBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const login = document.getElementById('modalLogin')?.value.trim();
            const pass = document.getElementById('modalPassword')?.value;
            if (!login || !pass) {
                document.getElementById('modalAuthError').textContent = 'Введите логин и пароль';
                return;
            }
            const user = users.find(u => u.login === login && u.pass === pass);
            if (user) {
                currentUser = { login: user.login, role: user.role };
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                closeAuthModal();
                updateAuthUI();
                showToast(`Добро пожаловать, ${user.login}!`);
            } else {
                document.getElementById('modalAuthError').textContent = 'Неверный логин или пароль';
            }
        });
    }

    function renderModalRegisterForm() {
        const container = document.getElementById('modalAuthFormContainer');
        if (!container) return;
        container.innerHTML = `
            <div class="auth-form">
                <input type="text" id="modalRegLogin" placeholder="Логин" autocomplete="off">
                <input type="password" id="modalRegPassword" placeholder="Пароль">
                <input type="password" id="modalRegPasswordConfirm" placeholder="Пароль (подтверждение)">
                <div class="auth-error" id="modalRegError"></div>
                <button class="auth-btn" id="modalRegisterBtn">Зарегистрироваться</button>
            </div>
        `;
        document.getElementById('modalRegisterBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const login = document.getElementById('modalRegLogin')?.value.trim();
            const pass = document.getElementById('modalRegPassword')?.value;
            const passConfirm = document.getElementById('modalRegPasswordConfirm')?.value;
            if (!login || !pass || !passConfirm) {
                document.getElementById('modalRegError').textContent = 'Заполните все поля';
                return;
            }
            if (pass !== passConfirm) {
                document.getElementById('modalRegError').textContent = 'Пароли не совпадают';
                return;
            }
            if (users.find(u => u.login === login)) {
                document.getElementById('modalRegError').textContent = 'Пользователь уже существует';
                return;
            }
            users.push({ login, pass, role: 'пользователь' });
            saveUsers();
            currentUser = { login, role: 'пользователь' };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            closeAuthModal();
            updateAuthUI();
            showToast(`Регистрация успешна, ${login}!`);
        });
    }

    function logout() {
        if (confirm('Вы уверены, что хотите выйти?')) {
            currentUser = null;
            localStorage.removeItem('currentUser');
            updateAuthUI();
            showToast('Вы вышли из аккаунта');
            closeAllPanels();
        }
    }

    if (accountBtn) {
        accountBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentUser) {
                logout();
            } else {
                openAuthModal();
            }
        });
    }

    if (authModalClose) {
        authModalClose.addEventListener('click', closeAuthModal);
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            closeAuthModal();
            closeAllPanels();
        });
    }

    // ---------- КОРЗИНА И ИЗБРАННОЕ ----------
    const cartBadge = document.getElementById('cartBadge');
    const favBadge = document.getElementById('favBadge');
    const cartPanel = document.getElementById('cartPanel');
    const favPanel = document.getElementById('favoritesPanel');
    const cartItemsList = document.getElementById('cartItemsList');
    const favItemsList = document.getElementById('favItemsList');
    const cartTotalSpan = document.getElementById('cartTotal');
    const closeCart = document.getElementById('closeCart');
    const closeFav = document.getElementById('closeFav');
    const cartPanelBtn = document.getElementById('cartPanelBtn');
    const favPanelBtn = document.getElementById('favoritesPanelBtn');

    function updateCounts() {
        const cartQty = cart.reduce((acc, item) => acc + item.quantity, 0);
        if (cartBadge) cartBadge.textContent = cartQty;
        if (favBadge) favBadge.textContent = favorites.length;
    }

    function addToCart(productId) {
        if (!currentUser) {
            showToast('Пожалуйста, войдите');
            openAuthModal();
            return;
        }
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1, product });
        }
        saveCart();
        updateCounts();
        renderCartSidebar();
        showToast('Добавлено в корзину');
    }

    function updateCartQuantity(productId, delta) {
        const idx = cart.findIndex(item => item.id === productId);
        if (idx === -1) return;
        const item = cart[idx];
        const newQuantity = item.quantity + delta;
        if (newQuantity <= 0) {
            cart.splice(idx, 1);
        } else {
            item.quantity = newQuantity;
        }
        saveCart();
        updateCounts();
        renderCartSidebar();
    }

    function removeCartItem(productId) {
        const idx = cart.findIndex(item => item.id === productId);
        if (idx !== -1) {
            cart.splice(idx, 1);
            saveCart();
            updateCounts();
            renderCartSidebar();
        }
    }

    function toggleFavorite(productId) {
        if (!currentUser) {
            showToast('Пожалуйста, войдите');
            openAuthModal();
            return;
        }
        const index = favorites.indexOf(productId);
        if (index === -1) {
            favorites.push(productId);
        } else {
            favorites.splice(index, 1);
        }
        saveFavorites();
        renderProducts();
        updateCounts();
        renderFavSidebar();
    }

    function renderCartSidebar() {
        if (!cartItemsList) return;
        if (cart.length === 0) {
            cartItemsList.innerHTML = `<div style="text-align:center; color:var(--text-secondary); margin-top:2rem;"><i class="fa-regular fa-bag-shopping"></i> корзина пуста</div>`;
            if (cartTotalSpan) cartTotalSpan.textContent = '0 ₽';
            return;
        }
        let total = 0;
        const html = cart.map(item => {
            const subtotal = item.product.price_rub * item.quantity;
            total += subtotal;
            const imageUrl = getProductImageUrl(item.product);
            return `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-img"><img src="${imageUrl}" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='${generateAlbumCover(item.product.id, item.product.artist, item.product.title)}';"></div>
                    <div class="cart-item-details">
                        <div class="item-title">${item.product.title}</div>
                        <div class="item-meta">${item.product.price_rub} ₽ за шт.</div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.3rem;">
                            <button class="cart-qty-btn" data-id="${item.id}" data-delta="-1">−</button>
                            <span>${item.quantity}</span>
                            <button class="cart-qty-btn" data-id="${item.id}" data-delta="1">+</button>
                        </div>
                    </div>
                    <div style="font-weight:500;">${subtotal} ₽</div>
                    <button class="cart-item-remove" data-id="${item.id}" title="Удалить">×</button>
                </div>
            `;
        }).join('');
        cartItemsList.innerHTML = html;
        if (cartTotalSpan) cartTotalSpan.textContent = `${total} ₽`;

        cartItemsList.querySelectorAll('.cart-qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                const delta = parseInt(btn.dataset.delta);
                updateCartQuantity(id, delta);
            });
        });
        cartItemsList.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                removeCartItem(id);
            });
        });
    }

    function renderFavSidebar() {
        if (!favItemsList) return;
        const favProducts = products.filter(p => favorites.includes(p.id));
        if (favProducts.length === 0) {
            favItemsList.innerHTML = `<div style="text-align:center; color:var(--text-secondary); margin-top:2rem;"><i class="fa-regular fa-heart"></i> нет избранного</div>`;
            return;
        }
        favItemsList.innerHTML = favProducts.map(p => {
            const imageUrl = getProductImageUrl(p);
            const russianFormat = getRussianFormat(p.format);
            return `
                <div class="fav-item" data-id="${p.id}">
                    <div class="cart-item-img"><img src="${imageUrl}" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='${generateAlbumCover(p.id, p.artist, p.title)}';"></div>
                    <div style="flex:1"><strong>${p.title}</strong> <span style="color:var(--text-secondary);">${p.artist} · ${russianFormat}</span></div>
                    <div>${p.price_rub} ₽</div>
                    <button class="add-cart" style="padding:0.2rem 0.7rem;" data-id="${p.id}"><i class="fa-solid fa-bag-shopping"></i> добавить</button>
                    <button class="fav-remove" data-id="${p.id}" style="background:none; border:none; color:var(--fav-active); font-size:1.2rem; cursor:pointer;">×</button>
                </div>
            `;
        }).join('');

        favItemsList.querySelectorAll('.add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(btn.dataset.id);
            });
        });
        favItemsList.querySelectorAll('.fav-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                toggleFavorite(id);
            });
        });
    }

    function closeAllPanels() {
        if (cartPanel) cartPanel.classList.remove('open');
        if (favPanel) favPanel.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
    }

    if (cartPanelBtn) {
        cartPanelBtn.addEventListener('click', () => {
            closeAllPanels();
            cartPanel.classList.add('open');
            overlay.classList.add('show');
            renderCartSidebar();
        });
    }
    if (favPanelBtn) {
        favPanelBtn.addEventListener('click', () => {
            closeAllPanels();
            favPanel.classList.add('open');
            overlay.classList.add('show');
            renderFavSidebar();
        });
    }
    if (closeCart) {
        closeCart.addEventListener('click', closeAllPanels);
    }
    if (closeFav) {
        closeFav.addEventListener('click', closeAllPanels);
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Корзина пуста');
                return;
            }
            showToast('✨ Заказ оформлен (демо)');
            cart = [];
            saveCart();
            updateCounts();
            renderCartSidebar();
            closeAllPanels();
        });
    }

    // ---------- ФИЛЬТРЫ И СОРТИРОВКА ----------
    let priceMin = null;
    let priceMax = null;
    let sortBy = 'default';

    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');
    const sortSelect = document.getElementById('sortSelect');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');

    function filterAndSortProducts(originalProducts) {
        let filtered = [...originalProducts];
        if (priceMin !== null && !isNaN(priceMin) && priceMin >= 0) {
            filtered = filtered.filter(p => p.price_rub >= priceMin);
        }
        if (priceMax !== null && !isNaN(priceMax) && priceMax >= 0) {
            filtered = filtered.filter(p => p.price_rub <= priceMax);
        }
        if (sortBy === 'name_asc') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'name_desc') {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortBy === 'price_asc') {
            filtered.sort((a, b) => a.price_rub - b.price_rub);
        } else if (sortBy === 'price_desc') {
            filtered.sort((a, b) => b.price_rub - a.price_rub);
        }
        return filtered;
    }

    function updateFilters() {
        const minVal = priceMinInput.value.trim();
        const maxVal = priceMaxInput.value.trim();
        priceMin = minVal === '' ? null : parseFloat(minVal);
        priceMax = maxVal === '' ? null : parseFloat(maxVal);
        sortBy = sortSelect.value;
        renderProducts();
    }

    function resetFilters() {
        if (priceMinInput) priceMinInput.value = '';
        if (priceMaxInput) priceMaxInput.value = '';
        if (sortSelect) sortSelect.value = 'default';
        priceMin = null;
        priceMax = null;
        sortBy = 'default';
        renderProducts();
    }

    if (priceMinInput) priceMinInput.addEventListener('input', updateFilters);
    if (priceMaxInput) priceMaxInput.addEventListener('input', updateFilters);
    if (sortSelect) sortSelect.addEventListener('change', updateFilters);
    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetFilters);

    // ---------- ГЛАВНАЯ СТРАНИЦА ----------
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryChips = document.querySelectorAll('.category-chip');

    let currentFilter = 'all';

    function renderProducts() {
        if (!productGrid) return;

        let filteredByCategory = currentFilter === 'all' ? products : products.filter(p => p.format === currentFilter);
        let finalProducts = filterAndSortProducts(filteredByCategory);

        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        if (searchTerm) {
            finalProducts = finalProducts.filter(p => p.title.toLowerCase().includes(searchTerm));
        }

        productGrid.innerHTML = finalProducts.map(p => {
            const isFav = favorites.includes(p.id);
            const imageUrl = getProductImageUrl(p);
            const russianFormat = getRussianFormat(p.format);
            return `
                <div class="product-card" data-id="${p.id}" data-format="${p.format}" style="animation-delay: ${Math.random() * 0.3}s;">
                    <div class="product-image-container">
                        <img src="${imageUrl}" class="product-image" alt="${p.title}" onerror="this.onerror=null; this.src='${generateAlbumCover(p.id, p.artist, p.title)}';">
                    </div>
                    <div class="product-title">${p.title}</div>
                    <div class="product-format">${p.artist} · ${russianFormat}</div>
                    <div class="price-row">
                        <span class="price">${p.price_rub} ₽</span>
                        <button class="add-cart" data-id="${p.id}"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                    <button class="fav-btn ${isFav ? 'favorited' : ''}" data-id="${p.id}"><i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i></button>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(btn.dataset.id);
            });
        });
        document.querySelectorAll('.fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(btn.dataset.id);
            });
        });
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('button')) return;
                openProductModal(card.dataset.id);
            });
        });
    }

    if (categoryChips.length) {
        categoryChips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                categoryChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentFilter = chip.dataset.filter;
                renderProducts();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => renderProducts());
    }

    // ---------- СЛАЙДЕР ----------
    const sliderTrack = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    if (sliderTrack && prevBtn && nextBtn) {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        if (totalSlides > 0) {
            const updateSlider = () => {
                sliderTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
            };
            prevBtn.addEventListener('click', () => {
                slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
            nextBtn.addEventListener('click', () => {
                slideIndex = (slideIndex + 1) % totalSlides;
                updateSlider();
            });
        }
    }

    // ---------- МОДАЛЬНОЕ ОКНО ТОВАРА ----------
    const productModal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalContent = document.getElementById('modalContent');

    function openProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product || !productModal || !modalContent) return;
        const isFav = favorites.includes(product.id);
        const imageUrl = getProductImageUrl(product);
        const description = getProductDescription(product);
        const russianFormat = getRussianFormat(product.format);
        const tracklistHtml = product.tracklist ? product.tracklist.map(t => `<li>· ${t}</li>`).join('') : `<li>нет данных</li>`;

        modalContent.innerHTML = `
            <div class="modal-image">
                <img src="${imageUrl}" alt="${product.title}" onerror="this.onerror=null; this.src='${generateAlbumCover(product.id, product.artist, product.title)}';">
            </div>
            <div class="modal-info">
                <h2>${product.title}</h2>
                <h3>${product.artist} · ${russianFormat}</h3>
                <div class="modal-description">${description}</div>
                
                <div class="modal-details-tracklist">
                    <div class="modal-details-column">
                        <div class="modal-details">
                            <div class="detail-item"><span class="detail-label">Производитель</span><span class="detail-value">${product.manufacturer || '—'}</span></div>
                            <div class="detail-item"><span class="detail-label">Модель</span><span class="detail-value">${product.model || '—'}</span></div>
                            <div class="detail-item"><span class="detail-label">Год</span><span class="detail-value">${product.year || '—'}</span></div>
                            <div class="detail-item"><span class="detail-label">Лейбл</span><span class="detail-value">${product.label || '—'}</span></div>
                            <div class="detail-item"><span class="detail-label">Страна</span><span class="detail-value">${product.country || '—'}</span></div>
                        </div>
                    </div>
                    <div class="modal-tracklist-column">
                        <div class="modal-tracklist">
                            <strong>Треклист</strong>
                            <ul>${tracklistHtml}</ul>
                        </div>
                    </div>
                </div>

                <div class="modal-price">${product.price_rub} ₽</div>
                <div class="modal-actions">
                    <button class="modal-btn" id="modalAddToCart"><i class="fa-solid fa-bag-shopping"></i> добавить</button>
                    <button class="modal-btn modal-fav ${isFav ? 'favorited' : ''}" id="modalToggleFav"><i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i> ${isFav ? 'В избранном' : 'В избранное'}</button>
                </div>
            </div>
        `;
        productModal.classList.add('open');
        overlay.classList.add('show');

        document.getElementById('modalAddToCart').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
            closeModal();
        });
        document.getElementById('modalToggleFav').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(product.id);
            const newFav = favorites.includes(product.id);
            const btn = document.getElementById('modalToggleFav');
            btn.innerHTML = `<i class="fa-${newFav ? 'solid' : 'regular'} fa-heart"></i> ${newFav ? 'В избранном' : 'В избранное'}`;
            btn.classList.toggle('favorited', newFav);
        });
    }

    function closeModal() {
        if (productModal) productModal.classList.remove('open');
        overlay.classList.remove('show');
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // ---------- ГАЛЕРЕЯ ----------
    const galleryContainer = document.getElementById('galleryContainer');
    if (galleryContainer) {
        const galleryItems = products.slice(0, 16);
        galleryContainer.innerHTML = galleryItems.map(p => {
            const imageUrl = getProductImageUrl(p);
            return `
                <figure class="gallery-item">
                    <img src="${imageUrl}" alt="${p.title}" onerror="this.onerror=null; this.src='${generateAlbumCover(p.id, p.artist, p.title)}';">
                    <figcaption>${p.artist} — ${p.title} (${getRussianFormat(p.format)})</figcaption>
                </figure>
            `;
        }).join('');
    }

    // ---------- ФОРМА ОБРАТНОЙ СВЯЗИ ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName')?.value.trim();
            const email = document.getElementById('contactEmail')?.value.trim();
            const message = document.getElementById('contactMessage')?.value.trim();
            if (!name || !email || !message) {
                showToast('Пожалуйста, заполните все поля');
                return;
            }
            if (!email.includes('@')) {
                showToast('Введите корректный email');
                return;
            }
            showToast('Сообщение отправлено (демо)');
            contactForm.reset();
        });
    }

    // ---------- ТОСТ ----------
    const toast = document.getElementById('toast');
    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 1500);
    }
    window.showToast = showToast;

    // ---------- ИНИЦИАЛИЗАЦИЯ ----------
    updateAuthUI();
    renderProducts();
    updateCounts();
    renderCartSidebar();
    renderFavSidebar();

    if (!overlay) {
        const newOverlay = document.createElement('div');
        newOverlay.id = 'overlay';
        newOverlay.className = 'overlay';
        document.body.appendChild(newOverlay);
    }
})();