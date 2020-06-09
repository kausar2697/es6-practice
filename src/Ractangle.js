import shape from './Shape'

class Rectangle extends shape{
    constructor(color,hight,width){
            super(color)
            this.hight=hight
            this.width=width
        }
    
        calculate(){
            return this.hight*this.width+ this.color
        }
    
}

export default Rectangle