import a from './a.json';
import b from './b.json';
import c from './c.json';
import md5 from 'md5';

var all = {
  termos : []
}
a.termos.map((termo)=>termo.id=md5(termo.title.toUpperCase()));
b.termos.map((termo)=>termo.id=md5(termo.title.toUpperCase()));
c.termos.map((termo)=>termo.id=md5(termo.title.toUpperCase()));

a.termos.forEach((termo)=>all.termos.push(termo));
b.termos.forEach((termo)=>all.termos.push(termo));
c.termos.forEach((termo)=>all.termos.push(termo));

export default all;
