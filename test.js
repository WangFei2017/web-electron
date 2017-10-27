console.log("argv: ",process.argv);
process.on('uncaughtException', function (err) {
   console.error('111111111111111111');
   console.error(err.stack);
 });
