
import { LOGGER } from './logger';
const runApp = async () => {
    try {
        LOGGER.info(`[runApp][App is running]`, {
            metadata: '',
            sendLog: true,
        });
        LOGGER.warn(`[runApp][App WARN Test]`, {
            metadata: '',
            sendLog: true,
        });

        throw new Error('Error on run app');
    } catch (error: any) {
        LOGGER.error(`[runApp][Error on run app]`, {
            metadata: { error: error, stack: error.stack.toString() },
        });
    }
};

runApp();
