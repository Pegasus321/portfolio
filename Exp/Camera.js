import Exp from "./exp"
import * as  THREE from "three"
export default class Camera {
    constructor() {
        this.exp = new Exp()
        this.sizes = this.exp.sizes
        this.scene = this.exp.scene
        this.canvas = this.exp.canvas
        // console.log(this.exp,this.sizes,this.scene,this.canvas)

        this.createPerspectiveCamera()
        this.createorthographicCamera()
    }
    
    createPerspectiveCamera() {
        this.perspectiveCamera
            = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000)
    
        this.scene.add(this.perspectiveCamera)
    
    }
    createorthographicCamera() {
        this.frustrum = 5
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        )
    
        this.scene.add(this.orthographicCamera)
    }
    resize() {
        //updating perspectiveCamera on resize 
        this.perspectiveCamera.aspect = this.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix()

        //updating orthographicCamera on resize 

        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2
        this.orthographicCamera.top = this.sizes.frustrum / 2
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2
        this.orthographicCamera.updateProjectionMatrix()
    }
    update() {
        
    }
 }