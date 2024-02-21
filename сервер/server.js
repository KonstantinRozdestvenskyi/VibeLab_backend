
// Импорт основных модулей для создания веб-сервера
const http = require("http");

// Созданный http-сервер
const server = http.createServer((req, res) => {
  const url = req.url;

  // Создание ответов на запросы к различным url
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("You are at home page");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("You are at about page");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("You are at contact page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Page not found");
  }
  res.end();
});

// Создание порта в виде переменной
const port = 4000;

// Прослушивание порта на предмет запросов
server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});