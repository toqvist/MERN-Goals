import express from 'express';
import { getGoals, setGoal, updateGoal, deleteGoal } from '../controllers/goalController';
const router = express.Router();


router.get('/', getGoals);
router.post('/', setGoal);

router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);

//"Cleaner" way of doing it:
//router.route('/').get(getGoals).post(setGoals);
//router.route('/:id').put(updateGoal).delete(deleteGoal);


module.exports = router;