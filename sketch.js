
var bgimg
var gameState = "wait"
var bgimg1, logo, logoimg, about, level1item1, level1item2, level1item3, home
var level1item1img, level2item1img, level3item1img
var level1obs1, level1obs2, level1obs3, level1obs4, level1obs5
var level1obs1img, level1obs2img, level1obs3img, level1obs4img, level1obs5img
var player, engine, world, invisibleground
var life = 3
var level1img, heart, collect, start, startimg, gottime, gotbino, resizeCanvas
var lifeprint = "left"
var heartimg, reset
var heartallimg, heartlost1img, heartlost2img, heartlostallimg, l1collectall, l1collectmap, l1collecttime, l1collectbino, l1collectmaptime, l1collectmapbino
var l1collecttimebino, l1collectmap, playerwalk, playerdie, playerwalkleft
var count = 0
var count3 = 0
var levelup, levelupimg, level2grndimg, wall, wallimg, doorc, dooro, dooropen, doorclose
var fall = "no"
var gamesound,diesound,getsound
var metaldoor, metaldoorimg
var l2ob1, l2ob1img
var l2ob2, l2ob2img
var l2ob3, l2ob3img
var l2ob4, l2ob4img
var l2ob5, l2ob5img
var l2ob6, l2ob6img
var l2ob7, l2ob7img
var l2ob8, l2ob8img
var l2ob9, l2ob9img
var enemy1, enemy1img, rand, rand1, enemy1Group
var power1, count2 = 0, power1img
var l3obg1, l3obg1img
var l3obg2, l3obg2img
var l3obg3, l3obg3img
var l3obg4, l3obg4img
var l3obg5, l3obg5img
var l3obg6, l3obg6img
var l3obg7, l3obg7img
var popup
var wonimg,won
function preload() {
   // bgimg = loadImage("magicbook.gif")
    // metaldoorimg=loadAnimation("dm1.jpg","dm1.jpg","dm1.jpg","dm2.jpg","dm2.jpg","dm2.jpg","dm2.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm4.jpg","dm4.jpg","dm4.jpg","dm4.jpg","dm4.jpg")
    dooropen = loadImage("dr2.png")
    enemy1img = loadImage("sworddown.gif")
    doorclose = loadImage("dr1.png")
    level2grndimg = loadImage("bg.png")
    //wallimg = loadImage("castleasset4.png")
    levelupimg = loadImage("levelup.gif")
    level1img = loadImage("level1.png")
    level2img = loadImage("level2.png")
    level3img = loadImage("level3.png")
    bgimg1 = loadImage("mysterybg.jpg")
    logoimg = loadImage("logo.png")
    playbg = loadImage("bgcastle.jpg")
    level1item1img = loadImage("map.png")
    level1item2img = loadImage("time.png")
    level1item3img = loadImage("bino.png")
    level1obs1img = loadImage("obs2.png")
    level1obs2img = loadImage("obs3.png")
    level1obs3img = loadImage("obs5.png")
    heartallimg = loadAnimation("lifeall.png", "lifeall.png", "lifeall.png")
    heartlost1img = loadAnimation("lifelost1.png", "lifelost1.png", "lifelost1.png")
    heartlost2img = loadAnimation("lifelost2.png", "lifelost2.png", "lifelost2.png")
    heartlostallimg = loadAnimation("lifelostall.png", "lifelostall.png", "lifelostall.png")
    winbg = loadImage("winbg.jpg")

    collectionbar = loadImage("collectionbar.png")
    power1img = loadImage("shield.png")


    playerwalk = loadAnimation("image/wright/w1.png", "image/wright/w2.png", "image/wright/w3.png", "image/wright/w4.png", "image/wright/w5.png", "image/wright/w6.png", "image/wright/w7.png", "image/wright/w8.png", "image/wright/w9.png", "image/wright/w10.png")
    playerdie = loadAnimation("image/die/d7.png", "image/die/d7.png")
    playerwalkleft = loadAnimation("image/wleft/w1.png", "image/wleft/w2.png", "image/wleft/w3.png", "image/wleft/w4.png", "image/wleft/w5.png", "image/wleft/w6.png", "image/wleft/w7.png", "image/wleft/w8.png", "image/wleft/w9.png", "image/wleft/w10.png")

    startimg = loadImage("image/level1/start.png")
    winpopimg = loadImage("win.gif")
    l2ob1img = loadImage("l2o1.png")
   // l2ob2img = loadImage("l2l5.png")
    l2ob3img = loadImage("l2o4.png")
   // l2ob4img = loadImage("l2o6.png")
    l2ob5img = loadImage("l2o7.png")
    l2ob6img = loadImage("bottle.png")
    l2ob7img = loadImage("mbook.png")
   // l2ob8img = loadImage("l3o3.png")
    l2ob9img = loadImage("l3o5.png")
    level3bg = loadImage("fantasy.png")

    l3obg1img = loadImage("image/jmp2c.png")
    l3obg2img = loadImage("image/jmp4.png")
    l3obg3img = loadImage("image/jmp3d.png")
    l3obg4img = loadImage("image/jumpb.png")

    l3crownimg = loadImage("crown.gif")
    l3wandimg = loadImage("kingwand.png")
    l3throneimg = loadImage("throne.png")
//l3magicballimg = loadImage("magicball.png")
    popimg = loadImage("pop1.png")
    gameover = loadImage("lost.gif")
    wonimg=loadImage("won.png")


//sounds

gamesound=loadSound("gamemusic.mp3")
diesound=loadSound("lifelost.mp3")
getsound=loadSound("getitem.mp3")

    
}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 50)
    //  book=createSprite(width/4,height/1.25)
    //book.addImage(bgimg)
    //book.scale=.7

    gamesound.loop()


    invisibleground = createSprite(width / 2, height - 20, width, 10)
    invisibleground.visible = false

    logo = createSprite(width / 2, height / 2.5)
    logo.addImage(logoimg)
    logo.scale = 1.25

    levelup = createSprite(width / 2, height / 2.5)
    levelup.addImage(levelupimg)
    levelup.scale = 1.25
    levelup.visible = false

    level1item1 = createSprite((Math.round(random(250, width - 100))), (Math.round(random(100, height - 50))))
    level1item1.addImage(level1item1img)
    level1item1.scale = 0.2
    level1item1.visible = false


    level1item2 = createSprite((Math.round(random(100, width - 100))), (Math.round(random(100, height - 100))))
    level1item2.addImage(level1item2img)
    level1item2.scale = 0.35
    level1item2.visible = false

    level1item3 = createSprite((Math.round(random(80, width - 80))), (Math.round(random(100, height - 80))))
    level1item3.addImage(level1item3img)
    level1item3.scale = 0.35
    level1item3.visible = false



    level1obs1 = createSprite(100, height - 100)
    level1obs1.addImage(level1obs1img)
    level1obs1.scale = 0.5
    level1obs1.visible = false

    level1obs2 = createSprite((width - 100), height - 100)
    level1obs2.addImage(level1obs2img)
    level1obs2.scale = 0.5
    level1obs2.visible = false


    level1obs3 = createSprite((width / 2 + 100), height - 100)
    level1obs3.addImage(level1obs3img)
    level1obs3.scale = 0.5
    level1obs3.visible = false


    play = createImg("play.png")
    play.position(width / 3, height / 1.3)
    play.size(250, 150)

    reset = createImg("restart.png")
    reset.position(width / 2 - 115, height - 120)
    reset.size(230, 150)
    reset.hide()

    home = createImg("home.png")
    home.position(10, 40)
    home.size(230, 150)
    home.hide()

    about = createImg("about.png")
    about.position(width / 3 + 300, height / 1.3)
    about.size(230, 150)

    level1 = createSprite(150, 60)
    level1.addImage(level1img)
    level1.visible = false
    level1.scale = 0.7

    level2 = createSprite(150, 60)
    level2.addImage(level2img)
    level2.visible = false
    level2.scale = 0.7

    level3 = createSprite(150, 60)
    level3.addImage(level3img)
    level3.visible = false
    level3.scale = 0.5


    heart = createSprite(width - width / 8, 60)
    heart.addAnimation("all", heartallimg)
    heart.addAnimation("one", heartlost1img)
    heart.addAnimation("two", heartlost2img)
    heart.addAnimation("three", heartlostallimg)
    heart.visible = false
    heart.scale = 0.6

    player = createSprite(width / 4, height - 50, 50, 50)
    player.visible = false

    player.addAnimation("walk", playerwalk)
    player.addAnimation("walkleft", playerwalkleft)
    player.addAnimation("die", playerdie)
    player.setCollider("rectangle", 0, 0, player.width / 4, player.height / 2)


    collect = createSprite(width / 2 - 20, 60)
    collect.addImage(collectionbar)


    collect.visible = false
    collect.scale = 0.6
    //collect.debug=true
    collect.setCollider("rectangle", 0, 0, collect.width, collect.height)

    level1start = createSprite(width / 2, height / 2)
    level1start.addImage(startimg)
    level1start.visible = false


    gotmap = createSprite(collect.x + 50, collect.y + 10)
    gotmap.addImage(level1item1img)
    gotmap.scale = 0.15
    gotmap.visible = false

    gottime = createSprite((collect.x) - 50, collect.y + 10)
    gottime.addImage(level1item2img)
    gottime.scale = 0.3
    gottime.visible = false

    gotbino = createSprite(collect.x, collect.y + 10)
    gotbino.addImage(level1item3img)
    gotbino.scale = 0.3
    gotbino.visible = false



    //level 2

    l2ob1 = createSprite(width / 2, height / 2)
    l2ob1.addImage(l2ob1img)
    //l2ob1.visible=false

  //  l2ob2 = createSprite(width / 4 + 100, height / 2 - 50)
  //  l2ob2.addImage(l2ob2img)
    //l2ob2.visible=false


    l2ob9 = createSprite(width / 12, height / 2 + height / 5.25)
    l2ob9.addImage(l2ob9img)
    l2ob9.scale = 2.5
    //l2ob9.visible=false

    //magic wand
    l2ob3 = createSprite(l2ob9.x, l2ob9.y + 70)
    l2ob3.addImage(l2ob3img)
    l2ob3.scale = 0.5
    //l2ob3.visible=false

   // l2ob4 = createSprite(width / 1.5, height / 2 - 200)
    //l2ob4.addImage(l2ob4img)
    //l2ob4.visible=false

    l2ob5 = createSprite(width - 100, height - 100)
    l2ob5.addImage(l2ob5img)
    l2ob5.scale = 2.5
    //l2ob5.visible=false

    //bottle
    l2ob6 = createSprite(l2ob5.x - 300, l2ob5.y)
    l2ob6.addImage(l2ob6img)
    l2ob6.scale = .75

    //l2ob6.visible=false

    //book
    l2ob7 = createSprite(width / 4, height / 2)
    l2ob7.addImage(l2ob7img)
    //l2ob7.visible=false
    l2ob7.scale = .5

  //  l2ob8 = createSprite(width / 4, height / 2)
    //l2ob8.addImage(l2ob8img)
    //l2ob8.visible=false



    doorc = createSprite(width - 200, height / 4 + 100)
    doorc.addImage(doorclose)
    doorc.visible = false

    dooro = createSprite(width - 50, height / 4 + 100)
    dooro.addImage(dooropen)
    dooro.visible = false

    /*metaldoor = createSprite(width/2-200,height/1.25)
    metaldoor.addAnimation("metaldooropen",metaldoorimg)
    metaldoor.scale=0.5
    metaldoor.visible=false*/

    power1 = createSprite(width / 3, height / 2)
    power1.addImage(power1img)
    power1.scale = 1.5
    power1.visible = false




    gotbook = createSprite(collect.x + 50, collect.y + 10)
    gotbook.addImage(l2ob7img)
    gotbook.scale = 0.15
    gotbook.visible = false

    gotbottle = createSprite((collect.x) - 50, collect.y + 10)
    gotbottle.addImage(l2ob6img)
    gotbottle.scale = 0.35
    gotbottle.visible = false

    gotwand = createSprite(collect.x, collect.y + 10)
    gotwand.addImage(l2ob3img)
    gotwand.scale = 0.2
    gotwand.visible = false

    //level 3
    invisibleground1 = createSprite(width / 2, height - 50, width, 20)
    invisibleground1.visible = false


    l3obg1 = createSprite(150, height - 200)
    l3obg1.addImage(l3obg3img)
    l3obg1.scale = 1.5
    l3obg1.visible = false
    //l3obg1.debug=true
    l3obg1.setCollider("rectangle", 0, 0, l3obg1.width / 2, l3obg1.height / 2)


    l3obg2 = createSprite(width / 2.5, height / 2)
    l3obg2.addImage(l3obg2img)
    l3obg2.scale = 1.5
    l3obg2.visible = false
    //l3obg2.debug=true
    l3obg2.setCollider("rectangle", 0, 0, l3obg2.width / 2, l3obg2.height / 1.25)


    l3obg3 = createSprite(width - 100, height / 2)
    l3obg3.addImage(l3obg1img)
    l3obg3.scale = 1.5
    l3obg3.visible = false
    // l3obg3.debug=true
    l3obg3.setCollider("rectangle", 0, 0, l3obg3.width / 2, l3obg3.height / 2)


    l3obg4 = createSprite(width / 2 + width / 5, height / 1.25)
    l3obg4.addImage(l3obg4img)
    l3obg4.scale = 1.5
    l3obg4.visible = false
    // l3obg4.debug=true
    l3obg4.setCollider("rectangle", 0, 0, l3obg4.width / 2, l3obg4.height)

    


    l3crown = createSprite(width / 2 + width / 4, height / 4)
    l3crown.addImage(l3crownimg)
    l3crown.scale = 0.50

    l3wand = createSprite(width / 2, height / 2)
    l3wand.addImage(l3wandimg)
   // l3wand.debug = true
    l3wand.scale = 0.5
    l3wand.setCollider("rectangle", 0, 0, l3wand.width / 2, l3wand.height / 4)


    l3throne = createSprite(width - 100, l3obg3.y - (l3obg3.height))
    l3throne.addImage(l3throneimg)
    l3throne.scale = 0.5
    //l3throne.debug=true

    l3throne.visible = false
    l3crown.visible = false
    l3wand.visible = false



    gotthrone = createSprite(collect.x + 50, collect.y + 10)
    gotthrone.addImage(l3throneimg)
    gotthrone.scale = 0.15
    gotthrone.visible = false

    gotcrown = createSprite((collect.x) - 50, collect.y + 10)
    gotcrown.addImage(l3crownimg)
    gotcrown.scale = 0.35
    gotcrown.visible = false

    gotwandl3 = createSprite(collect.x, collect.y + 10)
    gotwandl3.addImage(l3wandimg)
    gotwandl3.scale = 0.2
    gotwandl3.visible = false

    popup = createSprite(width / 2, height / 2, 400, 400)
    popup.addImage(popimg)
    popup.visible = false
    popup.scale = 2.25

    /// WIN///
    winpop = createSprite(width / 2, height / 2)
    winpop.addImage(winpopimg)
    winpop.visible = false
    winpop.scale = 2

    won = createSprite(width / 2-10, height / 2)
    won.addImage(wonimg)
    won.visible = false
    //won.scale = 2


    enemy1Group = new Group()

}

function draw() {
    if (gameState === "wait") {
        background(bgimg1)
        logo.visible = true


        //making items invisible
        //basin
        l2ob1.visible = false
        winpop.visible = false
        won.visible = false

        home.hide()
        reset.hide()
       // l2ob2.visible = false
        l2ob3.visible = false
      // l2ob4.visible = false
        l2ob5.visible = false
        l2ob6.visible = false
        l2ob7.visible = false
        play.show()
        about.show()
        //not required
      //  l2ob8.visible = false
        l2ob9.visible = false
        l3obg4.visible = false
        l3obg3.visible = false
        l3obg2.visible = false
        l3obg1.visible = false

        l3throne.visible = false
        l3crown.visible = false
        l3wand.visible = false

        popup.visible = false


    }

    home.mousePressed(() => {
        gameState = "wait"

    })


    //resetting the game
 /*   reset.mousePressed(() => {
        gameState = "wait"
        lifeprint = "left"
        logo.visible = true

        life = 3
        count = 0
        count3 = 0
        fall = "no"
        doorc.destroy()
        dooro.destroy()
        level1start.visible = false
        power1.visible=false
        enemy1Group.destroyEach()


    })*/


    about.mousePressed(() => {
        gameState = "about"

    })

    if (gameState === "about") {
        popup.visible = true
        about.hide()
        play.hide()
        home.show()
        reset.hide()


    }

    player.collide(invisibleground)

    play.mousePressed(() => {
        gameState = "Level 1"

    })

    if (gameState === "Level 1") {
        background(playbg)
        logo.visible = false
        popup.visible = false
        home.hide()
        play.hide()
        about.hide()
        reset.hide()

        level1item1.visible = true
        level1item2.visible = true
        level1item3.visible = true

        level1obs2.visible = true
        level1obs3.visible = true
        level1.visible = true
        collect.visible = true
        player.visible = true
        heart.visible = true
        l3obg4.visible = false
        l3obg3.visible = false
        l3obg2.visible = false
        l3obg1.visible = false

        l3throne.visible = false
        l3crown.visible = false
        l3wand.visible = false

        if (count === 3) {
            gameState = "levelup"
        }


        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5
            player.changeAnimation("walk", playerwalk)
        }

        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5
            player.changeAnimation("walkleft", playerwalkleft)
        }

        if (keyDown("space")) {
            player.velocityY = -15
        }

        player.velocityY += 0.8
        if (player.x > width) {
            player.x = 50
        }

        if (player.x < 0) {
            player.x = width - 100
        }




        if (player.isTouching(level1item1) || player.isTouching(level1item2) || player.isTouching(level1item3)) {
            if (player.isTouching(level1item1) && keyDown("t")) {
                gotmap.visible = true
                level1item1.destroy()
                count += 1
                console.log("got : ", count)
                getsound.play()
            }

            if (player.isTouching(level1item2) && keyDown("t")) {
                gottime.visible = true
                level1item2.destroy()
                count += 1
                console.log("got : ", count)
                getsound.play()

            }

            if (player.isTouching(level1item3) && keyDown("t")) {
                gotbino.visible = true
                level1item3.destroy()
                count += 1
                console.log("got : ", count)
                getsound.play()

            }
        }




        if (player.isTouching(level1obs2) || player.isTouching(level1obs3)) {
            level1start.visible = true


            if (player.isTouching(level1obs2)) {
                level1obs2.destroy()

diesound.play()
            }

            if (player.isTouching(level1obs3)) {
                level1obs3.destroy()
                diesound.play()

            }
            life = life - 1
            if (life == 2) {
                heart.changeAnimation("one", heartlost1img)
            }

            if (life == 1) {
                heart.changeAnimation("two", heartlost2img)
            }

            //   player.changeAnimation("die", playerdie)
            if (life > 0) {
                lifeprint = "lifelost"
            }

        }

        if (keyDown("s")) {
            lifeprint = "left"
            player.changeAnimation("walk", playerwalk)
            level1start.visible = false


        }

    }



    //level 2 codes

    if (gameState === "Level 2") {
        background(level2grndimg)
        spawnenemy()
        player.changeAnimation("walk", playerwalk)
        player.velocityY += 0.8
        player.visible = true
        level2.visible = true
        level2.depth = l2ob1.depth + 1
        level1.visible = false
        levelup.visible = false
        l2ob1.visible = true
        doorc.visible = true
        reset.hide()
        //metaldoor.visible=true
        logo.visible = false
        play.hide()
        about.hide()
        home.hide()
        collect.visible = true
        heart.visible = true
        l3obg4.visible = false
        l3obg3.visible = false
        l3obg2.visible = false
        l3obg1.visible = false
        l3throne.visible = false
        l3crown.visible = false
        l3wand.visible = false

        //making items visible

        l2ob1.visible = true
        //magic wand
        l2ob3.visible = true


        //obstacle 2
        l2ob5.visible = true

        //bottle
        l2ob6.visible = true


        l2ob7.visible = true
        // l2ob8.visible=true
        l2ob9.visible = true

        if (player.isTouching(power1)) {
            enemy1Group.destroyEach()
            getsound.play()
        }



        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5
            player.changeAnimation("walk", playerwalk)
        }

        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5
            player.changeAnimation("walkleft", playerwalkleft)
        }

        if (keyDown("space")) {
            player.velocityY = -15
        }

        player.velocityY += 0.8
        if (player.x > width) {
            player.x = 50
        }

        if (player.x < 0) {
            player.x = width - 100
        }


        for (i = 0; i < enemy1Group.length; i++) {
            if (player.isTouching(enemy1Group.get(i))) {
                level1start.visible = true
                enemy1Group.get(i).destroy()
                life = life - 1
                // player.changeAnimation("die",playerdie)
                diesound.play()
           lifeprint = "lifelost"

            }
        }
        if (life == 3) {
            heart.changeAnimation("all", heartallimg)

        }


        if (life == 2) {
            heart.changeAnimation("one", heartlost1img)
        }

        if (life == 1) {
            heart.changeAnimation("two", heartlost2img)
        }

        if (life <= 0) {
            gameState = "over"
        }

        //player.changeAnimation("die", playerdie)
        //if (life > 0) {
     //       lifeprint = "lifelost"
     //   }

        // }
        if (keyDown("s")) {
            lifeprint = "left"
            player.changeAnimation("walk", playerwalk)
            level1start.visible = false


        }


        // getting objects in level 2

        if (player.isTouching(l2ob7) || player.isTouching(l2ob3) || player.isTouching(l2ob6)) {
            if (player.isTouching(l2ob7) && keyDown("t")) {
                gotbook.visible = true
                l2ob7.destroy()
                count2 += 1
                console.log("got : ", count2)
                getsound.play()
            }

            if (player.isTouching(l2ob3) && keyDown("t")) {
                gotwand.visible = true
                l2ob3.destroy()
                count2 += 1
                console.log("got : ", count2)
                getsound.play()

            }

            if (player.isTouching(l2ob6) && keyDown("t")) {
                gotbottle.visible = true
                l2ob6.destroy()
                count2 += 1
                console.log("got : ", count2)
                getsound.play()

            }
        }

        /*     if (count2 === 3) {
                 gameState = "levelup"
             }*/

        if (count2 === 3) {
            doorc.visible = false
            dooro.visible = true

        }

        if (player.isTouching(dooro)) {
            gameState = "levelup2"
            dooro.visible = false
            power1.visible = false
            getsound.play()

        }



    }



    //level up codes for clearing level 1

    if (gameState === "levelup") {
        //background(levelupimg)
        background(playbg)
        logo.visible = false
        level1start.visible=false
        play.hide()
        about.hide()
        level1item1.visible = false
        level1item2.visible = false
        level1item3.visible = false

        level1obs2.visible = false
        level1obs3.visible = false
        level1.visible = false
        collect.visible = false
        player.visible = false
        heart.visible = false
        levelup.visible = true
        gotmap.visible = false
        gotbino.visible = false
        gottime.visible = false

    }



    //move to next level
    if (gameState === "levelup" && keyDown("c")) {
        gameState = "Level 2"
        player.changeAnimation("walk", playerwalk)
        life = 3
        count = 0

    }



    //level up codes for clearing level 2

    if (gameState === "levelup2") {
        //background(levelupimg)
        background(playbg)
        logo.visible = false
        level1start.visible=false
        play.hide()
        about.hide()
        level1item1.visible = false
        level1item2.visible = false
        level1item3.visible = false
        level3.visible = false

        level1obs2.visible = false
        level1obs3.visible = false
        level1.visible = false
        collect.visible = false
        player.visible = false
        heart.visible = false
        levelup.visible = true
        gotmap.visible = false
        gotbino.visible = false
        gottime.visible = false
        enemy1Group.destroyEach()
        level2.visible = false
        collect.visible = false
        heart.visible = false
        l2ob1.visible = false
        winpop.visible = false
        won.visible = false

        doorc.visible = false
        level1item1.visible = false
        level1item2.visible = false
        level1item3.visible = false
        level1obs2.visible = false
        level1obs3.visible = false
        level1.visible = false
        collect.visible = false
        heart.visible = false

        gotmap.visible = false
        gotbino.visible = false
        level1.visible = false
        logo.visible = false
        gottime.visible = false
        l2ob3.visible = false
        l2ob5.visible = false
        l2ob6.visible = false
        l2ob7.visible = false
        l2ob9.visible = false
        gotwand.visible = false
        gotbook.visible = false
        gotbottle.visible = false

    }



    //move to next level
    if (gameState === "levelup2" && keyDown("c")) {
        gameState = "Level 3"
        player.visible = true

        player.changeAnimation("walk", playerwalk)
        life = 3
        count = 0
        levelup.visible = false

        player.x = l3obg1.x
        player.y = (l3obg1.y - (l3obg1.height)) - 30
        // l3obg1.debug=true
        player.collide(l3obg1)
    }


    ////codes for level 3

    if (gameState === "Level 3") {
        // background(255)
        background(level3bg)
        
      //  player.visible = true
        player.collide(l3obg1)
        player.changeAnimation("walk", playerwalk)
        play.hide()
        about.hide()
        home.hide()
        if (count3 === 3) {
            gameState = "win"
        }
        reset.hide()

        l3obg4.visible = true
        l3obg3.visible = true
        l3obg2.visible = true
        l3obg1.visible = true
        level3.visible = true
        levelup.visible = false
        level2.visible = false
        collect.visible = true
        heart.visible = true
        winpop.visible = false
        won.visible = false

        doorc.visible = false
        level1item1.visible = false
        level1item2.visible = false
        level1item3.visible = false
        level1obs2.visible = false
        level1obs3.visible = false
        level1.visible = false
        levelup.visible = false
        gotmap.visible = false
        gotbino.visible = false
        level1.visible = false
        logo.visible = false
        gottime.visible = false
        l2ob1.visible = false
        l2ob3.visible = false
        l2ob5.visible = false
        l2ob6.visible = false
        l2ob7.visible = false
        l2ob9.visible = false
        gotwand.visible = false
        gotbook.visible = false
        gotbottle.visible = false

        // l3magicball.visible=true
        l3throne.visible = true
        l3crown.visible = true
        l3wand.visible = true


        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5
            player.changeAnimation("walk", playerwalk)
        }

        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5
            player.changeAnimation("walkleft", playerwalkleft)
        }

        if (keyDown("space")) {
            player.velocityY = -15
        }

        player.velocityY += 0.8
        if (player.x > width) {
            player.x = 50
        }


        if (player.isTouching(l3obg1) || player.isTouching(l3obg2) || player.isTouching(l3obg3) || player.isTouching(l3obg4) || player.isTouching(l3crown)/*||player.isTouching(l3magicball)*/ || player.isTouching(l3wand) || player.isTouching(l3throne)) {

            if (player.isTouching(l3obg1)) {
                player.collide(l3obg1)
                
            }

            if (player.isTouching(l3obg2)) {
                player.collide(l3obg2)
            }

            if (player.isTouching(l3obg3)) {
                player.collide(l3obg3)
            }

            if (player.isTouching(l3obg4)) {
                player.collide(l3obg4)
            }


            if (player.isTouching(l3crown)) {
                l3crown.destroy()
                gotcrown.visible = true
                count3 += 1

            }
            if (player.isTouching(l3wand)) {
                l3wand.destroy()
                gotwandl3.visible = true
                count3 += 1

            }

          
            if (player.isTouching(l3throne)) {
                l3throne.destroy()
                gotthrone.visible = true
                count3 += 1

            }



        }


        if (player.isTouching(invisibleground1)) {
            gameState = "over"
        }


        

    if (keyDown("s")) {
        lifeprint = "left"
        player.changeAnimation("walk", playerwalk)
        level1start.visible = false


    }

    }


    if (gameState === "win") {
        background(winbg)
        winpop.visible = true
        won.visible = true
        gamesound.stop()

        player.visible = false
        gotthrone.visible = false
      //  reset.show()

        gotcrown.visible = false
        gotwandl3.visible = false
        l3obg4.visible = false
        l3obg3.visible = false
        l3obg2.visible = false
        l3obg1.visible = false
        level3.visible = false
        levelup.visible = false
        level2.visible = false
        collect.visible = false
        heart.visible = false
        l2ob1.visible = false
        doorc.visible = false
        level1item1.visible = false
        level1item2.visible = false
        level1item3.visible = false
        level1obs2.visible = false
        level1obs3.visible = false
        level1.visible = false
        levelup.visible = false
        gotmap.visible = false
        gotbino.visible = false
        level1.visible = false
        logo.visible = false
        gottime.visible = false
        l2ob1.visible = false
        l2ob3.visible = false
        l2ob5.visible = false
        l2ob6.visible = false
        l2ob7.visible = false
        l2ob9.visible = false
        gotwand.visible = false
        gotbook.visible = false
        gotbottle.visible = false

        // l3magicball.visible=true
        l3throne.visible = false
        l3crown.visible = false
        l3wand.visible = false
    }


    drawSprites()

    if (gameState === "Level 1" || gameState === "Level 2" || gameState ==="Level 3") {



        if (lifeprint === "lifelost") {
            fill("green")
            //text(, (width / 4), height / 2)
            player.changeAnimation("die", playerdie)
        }


    }


    if (gameState === "over") {
        background(gameover)
        gamesound.stop()
        heart.visible = false
        player.velocityY = 0
        player.visible = false
        level2.visible = false
        level3.visible = false
        winpop.visible = false
        won.visible = false

      //  reset.show()

        //  level2.depth = l2ob1.depth + 1
        level1.visible = false
        levelup.visible = false
        l2ob1.visible = false
        dooro.visible = false
        //metaldoor.visible=true
        logo.visible = false
        play.hide()
        about.hide()
        collect.visible = false

        l3throne.visible = false
        l3crown.visible = false
        l3wand.visible = false

    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function spawnenemy() {
    if (frameCount % 50 === 0) {
        power1.visible = true
        rand1 = Math.round(random(25, width))
        for (i = rand1; i < width; i = i + rand) {
            rand = Math.round(random(50, width))
            enemy1 = createSprite(i, 50)
            enemy1.addImage(enemy1img)
            enemy1.scale = 0.25

            enemy1.velocityY = +5
            enemy1Group.add(enemy1)

        }

    }

}