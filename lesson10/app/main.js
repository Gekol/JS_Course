import {ChargingMarker} from './marker.js';
console.log("Marker");
let marker = new ChargingMarker("red", 100);
marker.write("Hello, world!!!");
console.log(marker.ink);
marker.write("My name is Georgyi Sokolovskyi.");
console.log(marker.ink);
marker.charge(15);
console.log(marker.ink);
marker.color = "green";
marker.write("I am a programmer!");
console.log(marker.ink);

import {Employee, EmpTable} from './employee.js';
let employees = [new Employee("Georgyi", "Sokolovskyi", 1.5, 800), new Employee("Michael", "Sokolovskyi", 0.5, 400), 
                new Employee("Petr", "Petrov", 10, 5000), new Employee("Ivan", "Ivanov", 5, 2500)
                ];
let table = new EmpTable(employees);
table.getCode();

import {Circle} from './circle.js';
console.log("Circle");
let circle = new Circle(5);
console.log(circle.radius);
circle.radius = 10;
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.surface());
console.log(circle.length());