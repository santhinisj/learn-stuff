var createError= require('http-errors');
const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send('HELLO WORLD'))
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });
  
//   // error handler
//   app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });
app.use((req,res)=>(res.sendStatus(404)))
app.get('/users/:id/books/:id2',(req,res)=>(res.send(req.params)))
app.listen(3000,()=>console.log('listening on port 3000'))