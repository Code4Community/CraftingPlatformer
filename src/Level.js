import Entity from "./entities/entity";

export default class Level{

    /** 
     * @param {string} jsonData 
    */
    constructor(jsonData){
        let levelData;
        
        try{
            levelData = JSON.parse();
        }catch(e){
            levelData = {name: "Invalid Level Data"};
        }

            this.name = levelData.name ? levelData.name : "No Name";
            this.background = levelData.background ? levelData.background : [...Array(8)].map(e => Array(8));

            const CELL_SIZE = 30;
            this.levelEntities = [];

            for(let i = 0; i < this.background.length; i++){
                for(let j = 0; j < this.background.length; j++){
                    let entity;
                    switch(this.background[i][j]){
                        case 0:
                        default:
                            entity = new Entity(j*CELL_SIZE, i*CELL_SIZE, CELL_SIZE, CELL_SIZE);
                        break;
                    }

                    this.levelEntities.push(entity)
                }    
            }
    }
    /**
     * @returns {Entity[]}
     */
    getLevelEntities(){
        return this.levelEntities;
    }

}