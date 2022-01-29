import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';

const limiter: RateLimitRequestHandler = rateLimit({
    windowMs: 15 * 60 * 1000, // 15minutes
    max: 90, //Limit each IP to 100 requests
    message: 'exceeding requests limit',
});
export default limiter;