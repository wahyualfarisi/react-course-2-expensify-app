console.log('destructuring');



const person = {
    name: 'wahyu',
    age: 24,
    location: {
        city: 'indonesia',
        temperatur: 223
    }
};
const {name: n = 'tak ada', age} = person
const {city, temperatur} = person.location;

console.log(`${n} ${age} `);
console.log(`${city} ${temperatur} `);


const address = ['indonesia','jepang','singapura'];
const [ind, jp, sng] = address;


console.log(`you are in ${ind} `)

const menu = ['coffe hot ','1','2','3'];

const [c, , medium] = menu;
console.log(`${c} is ${medium} ` );