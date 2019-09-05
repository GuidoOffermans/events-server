const { Router } = require('express');
const Event = require('./model');

const router = new Router();

router.post('/events', (req, res, next) =>
	Event.create(req.body)
		.then((event) => res.send(event))
		.catch((err) => next(err))
);

router.get('/events', (req, res, next) =>
	Event.findAll().then((events) => res.send(events)).catch((err) => next(err))
);

router.get('/events/:id', (req, res, next) =>
	Event.findByPk(req.params.id)
		.then((event) => res.send(event))
		.catch((err) => next(err))
);

router.put('/events/:id', (req, res, next) =>
	Event.findByPk(req.params.id)
		.then((event) => event.update(req.body))
		.then((event) => res.send(event))
		.catch((err) => next(err))
);

router.delete('/events/:id', (req, res, next) =>
	Event.destroy({ where: { id: req.params.id } })
		.then(
      () => {
        console.log(req.params.id)
        res.send({ id: req.params.id })
      }
    )
		.catch(next)
);

module.exports = router;
