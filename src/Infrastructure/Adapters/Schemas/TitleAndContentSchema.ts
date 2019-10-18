import * as Joi from '@hapi/joi';

const schema = Joi.object({
    title: Joi.string().max(50).min(10).required(),
    content: Joi.string().max(255).min(0).required()
});

export default schema;
