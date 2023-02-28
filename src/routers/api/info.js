import { Router } from 'express';
import os from 'os';
const router = Router();

router.get('/', (req, res, next) => {
      try {
            const data = {
                  cpus: os.cpus().length,
                  arg: process.argv.slice(2),
                  so: process.platform,
                  vn: process.version,
                  rss: process.memoryUsage().rss,
                  pe: process.execPath,
                  pid: process.pid,
                  carp: process.cwd(),
            };
            return res.status(200).json(data);
      } catch (error) {
            next(error);
      }
});
export default router;
