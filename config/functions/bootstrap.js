'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {

  if (await strapi.plugins['users-permissions'].services.user.count() === 0) {
    await strapi.plugins['users-permissions'].services.user.add({
      id: 1,
      username: 'John Doe',
      email: 'john@doe.fr',
      provider: 'local',
      password: '$2a$10$jA6p3IBpqc6hSco8AYNDhORpAdP6yd/bZUmAZNhLFJjs/O//LEOVq',
      resetPasswordToken: null,
      confirmed: 1,
      blocked: 0,
      role: 1,
      veterinary: 1,
      created_by: 1,
      updated_by: 1
    })
  }

  if (await strapi.services.veterinary.count === 0) {
    await strapi.services.veterinary.create({
      id: 1,
      ordinal: 10775,
      user: 1,
      created_by: 1,
      updated_by: 1
    })
  }
};
