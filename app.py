from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop

class MainHandler(RequestHandler):
  def get(self):
    self.render('index.html')
    #self.write({'message': 'hello world'})

def make_app():
  urls = [("/", MainHandler)]
  return Application(urls, autoreload=True)
  
if __name__ == '__main__':
    app = make_app()
    app.listen(3000)
IOLoop.instance().start()