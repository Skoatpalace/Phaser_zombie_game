var player = {
    aPlayer : null,

    initPlayer : function(){
        this.aPlayer = jeu.scene.add.sprite(200,200,"player","adventurer_stand");
    },

    generatePlayerAnimations : function(){
        jeu.scene.anims.create({
            key : "playerWalk",
            frames : jeu.scene.anims.generateFrameNames("player",{
                prefix : "adventurer_walk",
                start : 1,
                end : 2
            }),
            frameRate : 5,
            repeat : -1
        });
    }
}