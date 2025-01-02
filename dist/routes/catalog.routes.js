"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const catalogs = [
    {
        id: "dl-tcg",
        order: 1,
        name: "Disney Lorcana TCG",
        status: "active",
        logo: "/disney-lorcana-tcg/img/logos/dl-tcg-logo.png",
        copyright: " Disney / Ravensburger.",
        disclaimer: "This website is not produced, endorsed, supported, or affiliated with Disney / Ravensburger.",
    },
];
// Get all books
router.get("/catalogs", (req, res) => {
    res.json(catalogs);
});
// Get a catalog by ID
router.get("/catalogs/:id", (req, res) => {
    const catalogId = req.params.id;
    const catalog = catalogs.find(b => b.id === catalogId);
    if (catalog) {
        res.json(catalog);
    }
    else {
        res.status(404).json({ message: "Catalog not found" });
    }
});
// Create a new catalog
router.post("/catalogs", (req, res) => {
    const newCatalog = {
        id: req.body.id,
        order: req.body.order,
        name: req.body.name,
        status: req.body.status,
        logo: req.body.logo,
        copyright: req.body.copyright,
        disclaimer: req.body.disclaimer,
    };
    catalogs.push(newCatalog);
    res.status(201).json(newCatalog);
});
// Update a catalog by ID
router.put("/catalogs/:id", (req, res) => {
    const catalogId = req.params.id;
    const catalogIndex = catalogs.findIndex(b => b.id === catalogId);
    if (catalogIndex !== -1) {
        catalogs[catalogIndex] = {
            id: req.body.id,
            order: req.body.order,
            name: req.body.name,
            status: req.body.status,
            logo: req.body.logo,
            copyright: req.body.copyright,
            disclaimer: req.body.disclaimer
        };
        res.json(catalogs[catalogIndex]);
    }
    else {
        res.status(404).json({ message: "Catalog not found" });
    }
});
// Delete a catalog by ID
router.delete("/catalogs/:id", (req, res) => {
    const catalogId = req.params.id;
    const catalogIndex = catalogs.findIndex(b => b.id === catalogId);
    if (catalogIndex !== -1) {
        catalogs.splice(catalogIndex, 1);
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: "Catalog not found" });
    }
});
exports.default = router;
