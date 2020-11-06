class Component{
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide(){
        this.$el.style.display = "none";
    }

    show(){
        this.$el.style.display = "block";
    }

    changeColor(){
        const colors = ['yellow', 'brown', 'black', 'pink', 'blue'];
        this.$el.style.background = colors[Math.floor(Math.random() * colors.length)];
        return "now color is " + this.$el.style.background;
    }


}

class Box extends Component{
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + "px";
        this.$el.style.background = options.color;

    }
}

class Circle extends Box{
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = options.radius;
    }
}

const box = new Box({
    selector: "#box1",
    size: 100,
    color: "red"
});

const circle = new Circle({
    selector: "#circle1",
    size: 100,
    color: "green",
    radius: "50%"
})


