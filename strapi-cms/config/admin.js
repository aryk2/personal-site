module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '29078fe058dc59eb3d86fc4b093ecfc9'),
  },
});
