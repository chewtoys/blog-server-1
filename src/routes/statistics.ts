import * as Router from 'koa-router'
import statisticsController from '../app/controllers/statisticsController'
const router = new Router()

router.get('/newVisit', statisticsController.newVisit)
router.post('/getDataByDate', statisticsController.getDataByDate)
router.get('/getTotalData', statisticsController.getTotalData)

export default router
