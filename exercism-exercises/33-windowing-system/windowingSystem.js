//Task 1 and task 2 with prototype syntax:
function Size(width, height) {
    this.width = (width !== undefined) ? width : 80;
    this.height = (height !== undefined) ? height : 60;


    Size.prototype.resize = function (newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    };

}

function Position(x, y) {
    this.x = (x !== undefined) ? x : 0;
    this.y = (y !== undefined) ? y : 0;


    Position.prototype.move = function (newX, newY) {
        this.x = newX;
        this.y = newY;
    };

}

//Task 3,4,5 class syntax:
class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {

        const newWidth = newSize.width < 1 ? 1 : newSize.width;
        const newHeight = newSize.height < 1 ? 1 : newSize.height;

        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        this.size.width = newWidth > maxWidth ? maxWidth : newWidth;
        this.size.height = newHeight > maxHeight ? maxHeight : newHeight;
    }

    move(newPosition) {

        const newX = newPosition.x < 0 ? 0 : newPosition.x;
        const newY = newPosition.y < 0 ? 0 : newPosition.y;

        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;

        this.position.x = newX > maxX ? maxX : newX;
        this.position.y = newY > maxY ? maxY : newY;
    }
}

function changeWindow(programWindow) {
    programWindow.size.width = 400;
    programWindow.size.height = 300;
    programWindow.position.x = 100;
    programWindow.position.y = 150;
    return programWindow;
}

module.exports = {
    Size,
    Position,
    ProgramWindow,
    changeWindow
}