const express = require("express")

const db = require("../data/dbConfig.js")

const server = express()

server.use(express.json())

module.exports = server

server.get("/", (req, res) => {
  db("accounts").then((accounts) => res.status(200).json(accounts))
})

server.get("/:id", (req, res) => {
  db("accounts")
    .where("id", req.params.id)
    .then((account) => res.status(200).json(account))
})

server.post("/", (req, res) => {
  db("accounts")
    .insert(req.body)
    .then((account) => res.status(200).json(account))
})

server.put("/:id", (req, res) => {
  db("accounts")
    .where("id", req.params.id)
    .update(req.body)
    .then((account) => res.status(200).json(account))
})

server.delete("/:id", (req, res) => {
  db("accounts")
    .where("id", req.params.id)
    .del()
    .then((account) => res.status(200).json(account))
})
