import { Router } from "express";

import * as rh from './requesthandler.js'

const router=Router();

router.route('/add').post(rh.addMovie)
router.route('/getMovies').get(rh.getMovies)
router.route('/getMovie/:id').get(rh.getMovie)
router.route('/update/:id').put(rh.update)
router.route('/deleteMovie/:id').delete(rh.deleteemp)
router.route('/adduser').post(rh.addUser)

export default router;