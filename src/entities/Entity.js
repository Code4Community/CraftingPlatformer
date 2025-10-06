
/**A class representing a game object with position, size, and graphics*/
export default class Entity{

    /** 
     * @param {number} x - in pixels
     * @param {number} y - in pixels
     * @param {number} w - in pixels
     * @param {number} h - in pixels
     * @param {string} texture - sprite image key
     */
    
    constructor(x,y,w,h,texture){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.texture = texture;
    }

    /**
     * @param {Phaser.Scene} scene 
     */
    initialize(scene) {

    }

    draw(){

    }

    update(){

    }

    /**
     * @param {Phaser.Scene} scene 
     */
    destroy(scene) {

    }

}