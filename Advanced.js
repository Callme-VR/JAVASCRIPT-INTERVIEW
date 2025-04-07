// .call() - it in biult function in js that allow to call a function with a specified contxt and arguemnts

function greet(greeting) {
    console.log(greeting + "" + my name is $ {
        this.name
    });

}
const person = {
    name: "vishal"
};
greet.call(person, "hello")