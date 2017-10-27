console.log("argv: ",process.argv,'1111');
process.on('uncaughtException', function (err) {
   console.error('An uncaught error occurred!');
   console.error(err.stack);
 });
