import * as Joi from '@hapi/joi';

const schema = Joi.object({
  username: Joi.string()
    .email()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .min(8)
    .max(25),
});

export default schema;
