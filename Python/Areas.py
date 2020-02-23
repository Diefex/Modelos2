import math
from tkinter import Canvas, Tk

class Shape:
    def __init__ (self, x1, y1, x2, y2):
        self.x1 = x1
        self.y1 = y1
        self.x2 = x2
        self.y2 = y2

    def getarea(self, x1, y1, x2, y2):
        pass

    def getperimeter(self, x1, y1, x2, y2):
        pass

    def draw(self):
        pass

class Circle(Shape):
    def getarea(self):
        return math.pi*((math.sqrt((x2-x1)**2 + (y2-y1)**2))**2)

    def getperimeter(self):
        return 2*math.pi*(math.sqrt((x2-x1)**2 + (y2-y1)**2))

    def draw(self):
        r = math.sqrt((x2-x1)**2 + (y2-y1)**2)
        canvas.create_oval(x1-r, y1-r, x1+r, y1+r, outline='green')

class Square(Shape):
    def getarea(self):
        return abs(abs(x2 - x1) * abs(y2 - y1))

    def getperimeter(self):
        return abs((abs(x2 - x1) * 2) + (abs(y2 - y1) * 2))

    def draw(self):
        canvas.create_polygon(self.x1, self.y1, self.x1, self.y2, self.x2, self.y2, self.x2, self.y1, outline='red')

class Triangle(Shape):
    def getarea(self):
        return abs(abs(x2 - x1) * abs(y2 - y1))/2
    
    def getperimeter(self):
        return abs(abs(x2 - x1) + abs(y2 - y1) + math.sqrt(abs(x2 - x1)**2 + abs(y2 - y1)**2))

    def draw(self):
        canvas.create_polygon(self.x1, self.y1, self.x2, self.y2, self.x2, self.y1, dash=(4,2), outline='yellow')

def calculate(f, x, y, color):
    canvas.create_text(x,y,text="area: "+str(round(f.getarea(),2))+"px", fill=color)
    canvas.create_text(x,y+10,text="perimetro: "+str(round(f.getperimeter(),2))+"px", fill=color)

frame = Tk()

#canvas
canvas = Canvas(frame, bg='black', width=1000, height=1000)
canvas.pack()

#coordenadas
x1 = 0
y1 = 0
x2 = 0
y2 = 0

#eventos
def hold(event):
    canvas.delete('all')
    canvas.create_line(x1, y1, event.x, event.y, fill='blue')

def click(event):
    global x1
    global y1
    x1 = event.x
    y1 = event.y

def release(event):
    global x2
    global y2
    x2 = event.x
    y2 = event.y
    #dibujar
    f = Square(x1, y1, x2, y2)
    f.draw()
    calculate(f, x1+50, y2+10, 'red')
    f = Triangle(x1, y1, x2, y2)
    f.draw()
    calculate(f, x2-50, y1-20, 'yellow')
    f = Circle(x1, y1, x2, y2)
    f.draw()
    calculate(f, x1, y1+30, 'green')

canvas.bind('<Button-1 >',click)
canvas.bind('<B1-Motion>', hold)
canvas.bind('<ButtonRelease-1>',release)

frame.mainloop()