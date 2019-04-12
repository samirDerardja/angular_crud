"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send({ text: ' L API est /api/games' });
    }
}
exports.indexController = new IndexController();
