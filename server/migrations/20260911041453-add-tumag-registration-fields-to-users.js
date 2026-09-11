'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn(
    'users',
    'bar_association',
    {
      type: Sequelize.STRING,
      allowNull: true,
    }
  );

  await queryInterface.addColumn(
    'users',
    'bar_registration_number',
    {
      type: Sequelize.STRING,
      allowNull: true,
    }
  );

  await queryInterface.addColumn(
    'users',
    'registration_source',
    {
      type: Sequelize.STRING,
      allowNull: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.removeColumn(
    'users',
    'registration_source'
  );

  await queryInterface.removeColumn(
    'users',
    'bar_registration_number'
  );

  await queryInterface.removeColumn(
    'users',
    'bar_association'
  );
}