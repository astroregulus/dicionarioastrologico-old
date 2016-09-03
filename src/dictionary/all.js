import a from './a.json';
import b from './b.json';

var all = {
  termos : []
}

a.termos.forEach((termo)=>all.termos.push(termo));
b.termos.forEach((termo)=>all.termos.push(termo));

export default all;
