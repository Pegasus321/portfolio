import * as THREE from "three"
import Sizes from "./Utils/Sizes.js"

import Camera from "./Camera.js"

export default class Exp{
    static instance
    constructor(canvas) {
        if (Exp.instance) {
            return Exp.instance
        }
        Exp.instance = this
        this.canvas = canvas
        this.scene= new THREE.Scene()
        this.sizes = new Sizes()
        this.camera=new Camera()
    }
}

