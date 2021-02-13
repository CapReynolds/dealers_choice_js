const games = [
    { id: 1, title: "Jet Grind Radio",  Developer: ["Smilebit", "BitWorks"], Publisher: "Sega", 
    content: "Jet Set Radio is a 2000 action game developed by Smilebit and published by Sega for the Dreamcast. The player controls a member of a youth gang, the GGs, as they use inline skates to traverse Tokyo, spraying graffiti and evading authorities. Development was headed by director Masayoshi Kikuchi, with art by Ryuta Ueda.", gameArt: "JetGrindRadio.jpg", releaseDate: new Date(2001,6,11).toDateString() },
    { id: 2, title: "Soul Calibur", Developer: ["Project Soul", "Namco"], Publisher: "Namco, BANDAI Entertainment",
    content: "Soulcalibur is a weapon-based 3D fighting game developed by Project Soul and produced by Namco. It is the second game in the Soulcalibur series, preceded by Soul Edge in December 1995. Originally released in arcades on July 30, 1998, it ran on the Namco System 12 hardware.", gameArt: "SoulCalibur.jpg", releaseDate: new Date(1998,7,30).toDateString() },
    { id: 3, title: "Sonic Adventure 2", Developer: ["Sega", "Sonic Team"], Publisher: "Sega",  
    content: "Sonic Adventure 2 is a 2001 platform game developed by Sonic Team USA and published by Sega. It was the final Sonic the Hedgehog game for the Dreamcast after Sega discontinued the console", gameArt: "SonicAdventure.jpg", releaseDate: new Date(2001,6,18).toDateString() },
    { id: 4, title: "Marvel vs Capcom 2: New Age of Heroes", Developer: ["Capcom"], Publisher: "Capcom",  
    content: "Marvel vs. Capcom 2: New Age of Heroes is a crossover fighting game developed and published by Capcom. It is the fourth installment in the Marvel vs. Capcom series, which features characters from both Capcom's video game franchises and comic book series published by Marvel Comics", gameArt: "MarvelvsCapcom2.jpg", releaseDate: new Date(2000,2,4).toDateString() },
    { id: 5, title: "Power Stone 2", Developer: ["Capcom"], Publisher: "Capcom",  
    content: "Power Stone 2 is a multiplayer fighting game that built on the innovative gameplay introduced by its predecessor, Power Stone. Power Stone 2 allows up to four players to choose from multiple characters and utilize items such as tables, chairs, and rocks in battle.", gameArt: "PowerStone2.jpg", releaseDate: new Date(2000,4,1).toDateString() },
    { id: 6, title: "Crazy Taxi 2", Developer: ["Sega Hitmaker"], Publisher: "Sega",
    content: "Crazy Taxi 2 is a 2001 racing video game and the second installment of the Crazy Taxi series. It was released for the Dreamcast and was later ported to the PSP as part of Crazy Taxi: Fare Wars in 2007. It is the last Crazy Taxi game to be released for the Dreamcast after it was discontinued on March 31, 2001.", gameArt: "CrazyTaxi2.jpg", releaseDate: new Date(2001,5,28).toDateString() },
    { id: 7, title: "Sonic Adventure", Developer: ["Sega", "Sonic Team"], Publisher: "Sega", 
    content: "Sonic Adventure is a 1998 platform game for Sega's Dreamcast and the first main Sonic the Hedgehog game to feature 3D gameplay.", gameArt: "SonicAdventure.jpg", releaseDate: new Date(1998,12,23).toDateString() },
    { id: 8, title: "San Fransico Rush 2049", Developer: ["Atari Games", "BitWorks"], Publisher: "Midway Games", 
    content: "San Francisco Rush 2049 is a racing video game developed and published by Atari Games for arcades. It was ported to the Nintendo 64, Game Boy Color, and Dreamcast by Midway Games. It was released on September 7, 2000 in North America and November 17, 2000 in Europe.", gameArt: "Rush2049.jpg", releaseDate: new Date(1999,10,1).toDateString() },
    { id: 9, title: "Ready 2 Rumble", Developer: ["Point of View", "Midway Games", "Crawfish Interactive"], Publisher: "Midway Games",
    content: "Ready 2 Rumble Boxing is a boxing video game developed by Midway Studios San Diego, published by Midway Games in 1999 for the Dreamcast, PlayStation, Game Boy Color, and Nintendo 64. The success of the Dreamcast version led to it becoming one of the few Sega All Stars titles.", gameArt: "Ready2Rumble.jpg", releaseDate: new Date(1999,9,8).toDateString() },
    { id: 10, title: "Tony Hawk Pro Skater 2", Developer: ["Neversoft", "Activision"], Publisher: "Activision",
    content: "Tony Hawk's Pro Skater 2 is a skateboarding video game developed by Neversoft and published by Activision. It is the second installment in the Tony Hawk's series of sports games and was released for the PlayStation in 2000, with subsequent ports to Microsoft Windows, Game Boy Color, and Dreamcast the same year.", gameArt: "TonyHawk.jpg", releaseDate: new Date(2000,11,19).toDateString() }
  ];

  const list = () => {
      return [...games];
  }

  const find = (id) => {
    var foundGame;
    games.forEach(game => {
        if(game.id === +id)
            foundGame = game;
    });
    return {...foundGame};
  }


  //module.exports = {list, find};
  module.exports = { list: list, find: find };