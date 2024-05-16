const { STRING } = require('sequelize');
const {sequelize} = require('./db')
const {Restaurant, Menu, Item } = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
    seedItem
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });
    

    test('can create a Restaurant', async () => {
        // TODO - write test
        const testUser = await Restaurant.create({ name: 'Pepes', location: '123', cuisine: 'Peri Peri' });
        expect(testUser.name).toBe('Pepes')
    })
    test('can create a Menu', async () => {
        // TODO - write test
        const testUser =  await Menu.create({title: 'breakfast'})
        expect(testUser.title).toEqual('breakfast')
    });

    test('can create a Item', async () => {
        // TODO - write test
        const testUser =  await Item.create({name:'steak'})
        expect(testUser.name).toEqual('steak')
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const testUser = await Restaurant.create({ name: 'Pepes', location: '123', cuisine: 'Peri Peri' });
        await testUser.findAll()
        const findall = await Restaurant.findByPk(testUser.id)
        expect(findall).toBe({name: 'Pepes', location: '123', cuisine: 'Peri Peri'})
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const testUser = await Restaurant.create({ name: 'Pepes', location: '123', cuisine: 'Peri Peri' });
        await testUser.destroy()
        const deletedRestaurant = await Restaurant.findByPk(testUser.id)
        expect(deletedRestaurant).toBeNull()
    });

})