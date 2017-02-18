/**
 * Created by Ig on 02/17/2017.
 Just for learning
 */
var Person = function (config){
    this.name = config.name;
    this.age = config.age;
    this.job = config.job;
};
// TODO [x] Just new class
// FIXME Next task
var nick = new Person({name: 'Nick', age: 24, job: 'Developer'});
