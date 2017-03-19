/**
 * Created by Bombel on 19.03.2017.
 */
class Entity {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    greet() {
        console.log(`Hi! I'm ${this.name} from middle earth!`);
    }

}

export default Entity;