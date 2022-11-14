var buf= Buffer.alloc(10);
buf.write("hello");
console.log(buf);
console.log(buf.toString());


var buf2= Buffer.from("Wellcome");
console.log(buf2.length);
console.log(buf2.toJSON());0