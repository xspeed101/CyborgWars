var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Level3 = /** @class */ (function (_super) {
        __extends(Level3, _super);
        // public properties
        // Constructor
        function Level3(assetManager) {
            var _this = _super.call(this, assetManager.getResult("level3")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Level3.prototype._reset = function () {
            this.x = 0;
        };
        // move the object to some new location
        Level3.prototype._move = function () {
            this.x -= this._dx;
        };
        // check to see if some boundary has been passed
        Level3.prototype._checkBounds = function () {
            if (this.x <= -1727.5) {
                this._reset();
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Level3.prototype.Start = function () {
            this._dx = 2; //speed
            this._reset();
        };
        // updates the game object every frame
        Level3.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Level3;
    }(createjs.Bitmap));
    objects.Level3 = Level3;
})(objects || (objects = {}));
//# sourceMappingURL=level3.js.map