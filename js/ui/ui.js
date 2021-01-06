class UI {
  constructor({ callbacks = {} }) {
    //callbacks
    this.move = (callbacks.move instanceof Function) ? callbacks.move : function () { };

    //составляющие фигур
    const printPoints = (callbacks.printPoints instanceof Function)
      ? callbacks.printPoints
      : function () { }
    const printEdges = (callbacks.printEdges instanceof Function)
      ? callbacks.printEdges
      : function () { }
    const printPolygons = (callbacks.printPolygons instanceof Function)
      ? callbacks.printPolygons
      : function () { }
    const printNumbers = (callbacks.printNumbers instanceof Function)
      ? callbacks.printNumbers
      : function () { }
    const printShadows = (callbacks.printShadows instanceof Function)
      ? callbacks.printShadows
      : function () { }
    //фон 
    const printStars = (callbacks.printStars instanceof Function)
      ? callbacks.printStars
      : function () { }
    const randomColor = (callbacks.printStars instanceof Function)
      ? callbacks.randomColor
      : function () { }
    const printLight = (callbacks.printLight instanceof Function)
      ? callbacks.printLight
      : function () { }
    const printLines = (callbacks.printLines instanceof Function)
      ? callbacks.printLines
      : function () { }

    //фигуры
    const printSphere = (callbacks.printSphere instanceof Function)
      ? callbacks.printSphere
      : function () { }
    const printEllipsoid = (callbacks.printEllipsoid instanceof Function)
      ? callbacks.printEllipsoid
      : function () { }
    const printHyperbolicparaboloid = (callbacks.printHyperbolicparaboloid instanceof Function)
      ? callbacks.printHyperbolicparaboloid
      : function () { }
    const printHyperboliccylinder = (callbacks.printHyperboliccylinder instanceof Function)
      ? callbacks.printHyperboliccylinder
      : function () { }
    const printParaboliccylinder = (callbacks.printParaboliccylinder instanceof Function)
      ? callbacks.printParaboliccylinder
      : function () { }
    const printEllipticcylinder = (callbacks.printEllipticcylinder instanceof Function)
      ? callbacks.printEllipticcylinder
      : function () { }
    const printEllipticparaboloid = (callbacks.printEllipticparaboloid instanceof Function)
      ? callbacks.printEllipticparaboloid
      : function () { }
    const printCone = (callbacks.printCone instanceof Function)
      ? callbacks.printCone
      : function () { }
    const printBublick = (callbacks.printBublick instanceof Function)
      ? callbacks.printBublick
      : function () { }
    const printSinglecavityhyperboloid = (callbacks.printSinglecavityhyperboloid instanceof Function)
      ? callbacks.printSinglecavityhyperboloid
      : function () { }
    const printDoublecavityhyperboloid = (callbacks.printDoublecavityhyperboloid instanceof Function)
      ? callbacks.printDoublecavityhyperboloid
      : function () { }
    //events
    //составляющие фигур
    document
      .getElementById('printPoints')
      .addEventListener('click', function () { printPoints(this.checked); })
    document
      .getElementById('printEdges')
      .addEventListener('click', function () { printEdges(this.checked); })
    document
      .getElementById('printPolygons')
      .addEventListener('click', function () { printPolygons(this.checked); })
    document
      .getElementById('printNumbers')
      .addEventListener('click', function () { printNumbers(this.checked); })

    //фон
    document
      .getElementById('printStars')
      .addEventListener('click', function () { printStars(this.checked); })
    document
      .getElementById('randomColor')
      .addEventListener('click', function () { randomColor(this.checked); })
    document
      .addEventListener('keydown', event => this.keyDown(event));
    document
      .getElementById('printLight')
      .addEventListener('click', function () { printLight(this.checked); })
    document
      .getElementById('printLines')
      .addEventListener('click', function () { printLines(this.checked); })
    document
      .getElementById('printShadows')
      .addEventListener('click', function () { printShadows(this.checked); })
    //фигуры
    document
      .getElementById('printSphere')
      .addEventListener('click', function () { printSphere(this.checked); })
    document
      .getElementById('printEllipsoid')
      .addEventListener('click', function () { printEllipsoid(this.checked); })
    document
      .getElementById('printHyperbolicparaboloid')
      .addEventListener('click', function () { printHyperbolicparaboloid(this.checked); })
    document
      .getElementById('printHyperboliccylinder')
      .addEventListener('click', function () { printHyperboliccylinder(this.checked); })
    document
      .getElementById('printParaboliccylinder')
      .addEventListener('click', function () { printParaboliccylinder(this.checked); })
    document
      .getElementById('printEllipticcylinder')
      .addEventListener('click', function () { printEllipticcylinder(this.checked); })
    document
      .getElementById('printEllipticparaboloid')
      .addEventListener('click', function () { printEllipticparaboloid(this.checked); })
    document
      .getElementById('printCone')
      .addEventListener('click', function () { printCone(this.checked); })
    document
      .getElementById('printBublick')
      .addEventListener('click', function () { printBublick(this.checked); })
    document
      .getElementById('printSinglecavityhyperboloid')
      .addEventListener('click', function () { printSinglecavityhyperboloid(this.checked); })
    document
      .getElementById('printDoublecavityhyperboloid')
      .addEventListener('click', function () { printDoublecavityhyperboloid(this.checked); })
  }


  keyDown(event) {
    switch (event.keyCode) {
      case 37: return this.move('left');
      case 38: return this.move('up');
      case 39: return this.move('right');
      case 40: return this.move('down');
    }
  }
}