const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
    try {
      const allMovies = await prisma.movies.findMany();
      res.send(allMovies);
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/:id", async (req, res, next) => {
    try {
      const movie = await prisma.movies.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      res.send(movie);
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/movies/:id", async (req, res, next) => {
    try {
      const allMovies = await prisma.movies.findMany({
        where: {
          userId: Number(req.params.id),
        },
      });
      res.send(allMovies);
    } catch (err) {
      next(err);
    }
  });
  
  router.delete("/:id",  async (req, res, next) => {
  
    try {
      const movie = await prisma.movies.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.send(movie);
    } catch (err) {
      next(err);
    }
  });
  
  router.post("/", async (req, res, next) => {

    try {
      const movie = await prisma.movies.create({
        data: req.body,
      });
      res.send(movie);
    } catch (err) {
      next(err);
    }
  });
  
  router.put("/:id",  async (req, res, next) => {
  
    try {
      const movie = await prisma.movies.update({
        where: {
          id: Number(req.params.id),
        },
        data: req.body,
      });
      res.send(movie);
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;