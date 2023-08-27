import Exp from "./exp"
import * as  THREE from "three"
export default class Renderer {
    constructor() {
        this.exp = new Exp()
        this.sizes = this.exp.sizes
        this.scene = this.exp.scene
        this.canvas = this.exp.canvas
        
        this.camera = this.exp.camera
        

        this.setRenderer()
    }
    setRenderer() {
        this.renderer = new THREE.WebGL1Renderer({
            canvas: this.canvas,
            antialias: true,
            
        });
        this.renderer
    }
    update() {
        
    }
 }